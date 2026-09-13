// WST Studio — console d'autonomie au-dessus du pipeline wetsea-packaging.
//
//   studio levels                        échelle L0->L9
//   studio explain L6                    ce qu'un niveau accorde, exige, et comment on revient
//   studio gate --level L5 --action youtube_metadata [--kits f.json]
//   studio plan  --level L6 --kits examples/pilot_kits.json [--secrets A,B] [--flags YT_PUBLISH]
//   studio check --kits f.json           invariants seuls (canon), sans niveau
//
// Le Studio ne publie rien lui-même : il décide, explique, et imprime la
// commande exacte à lancer. La sortie appartient au pipeline.

import { readFileSync } from "node:fs";
import { join } from "node:path";
import { authorize, REQUIRED_SECRETS } from "./gate";
import { buildPlan, type KitWithId } from "./plan";
import { append, type LedgerEntry } from "./ledger";
import { attested, load as loadState, save as saveState, type Transition } from "./state";
import {
  ACTIONS,
  INVARIANTS,
  LEVELS,
  type Action,
  type LevelId,
  getLevel,
  grantedActions,
  levelIndex,
  minLevelFor,
} from "./levels";
import { validateKit } from "../../wetsea-packaging/src/validator";

function arg(name: string): string | undefined {
  const i = process.argv.indexOf(`--${name}`);
  return i >= 0 ? process.argv[i + 1] : undefined;
}
const list = (name: string): string[] =>
  (arg(name) ?? "").split(",").map((s) => s.trim()).filter(Boolean);

function loadKits(path: string): KitWithId[] {
  const raw = JSON.parse(readFileSync(path, "utf8"));
  if (Array.isArray(raw)) return raw;
  if (Array.isArray(raw.kits)) return raw.kits;
  if (raw.kit) return [raw.kit];
  return [raw];
}

/** Chemin de l'état armé. Versionné : changer de palier est un commit relu. */
const statePath = () => arg("state") ?? join(process.cwd(), "studio.state.json");

function ctxFromArgs(kits?: KitWithId[]) {
  const state = loadState(statePath());
  // Sans --level explicite, on raisonne au niveau RÉELLEMENT armé, pas à un
  // défaut optimiste : la console doit dire la vérité du système.
  const level = (arg("level") ?? state.arme).toUpperCase() as LevelId;
  // Les secrets attestés comptent comme présents — c'est ce qui rend `plan`
  // utilisable une fois les paliers franchis, sans redéclarer la liste.
  const secrets = [...new Set([...attested(state), ...list("secrets")])];
  return {
    level,
    secrets,
    flags: list("flags"),
    batchSize: kits?.length,
    maxBatch: arg("max-batch") ? Number(arg("max-batch")) : undefined,
  };
}

function cmdLevels(): void {
  console.log("Échelle d'autonomie WST Studio\n");
  for (const l of LEVELS) {
    const acts = l.accorde.length ? l.accorde.join(", ") : "—";
    console.log(`${l.id}  ${l.nom}`);
    console.log(`     décideur : ${l.decideur}`);
    console.log(`     accorde  : ${acts}`);
    console.log(`     retour   : ${l.retour_arriere}`);
    console.log("");
  }
  console.log("Invariants (vrais à TOUS les niveaux) :");
  for (const i of INVARIANTS) console.log(`  · ${i}`);
}

function cmdExplain(id: string): number {
  const l = getLevel(id);
  if (!l) {
    console.error(`niveau inconnu: ${id}`);
    return 2;
  }
  console.log(`${l.id} — ${l.nom}\n`);
  console.log(`Décideur       : ${l.decideur}`);
  console.log(`Rayon de souffle: ${l.rayon}`);
  console.log(`Retour arrière : ${l.retour_arriere}`);
  console.log(`Réglage        : ${l.reglage}`);
  console.log(`\nAccorde en propre : ${l.accorde.join(", ") || "—"}`);
  console.log(`Cumul autorisé    : ${grantedActions(l.id).join(", ") || "—"}`);
  if (l.prerequis.length) {
    console.log("\nPrérequis avant d'armer :");
    for (const p of l.prerequis) console.log(`  · ${p}`);
  }
  return 0;
}

function cmdStatus(): number {
  const path = statePath();
  const state = loadState(path);
  const l = getLevel(state.arme)!;
  const att = [...attested(state)];

  console.log(`Niveau armé : ${l.id} — ${l.nom}`);
  console.log(`  décideur  : ${l.decideur}`);
  console.log(`  autorise  : ${grantedActions(l.id).join(", ") || "—"}`);
  console.log(`  secrets attestés : ${att.join(", ") || "aucun"}`);
  console.log(`  état      : ${path}`);

  const next = LEVELS[levelIndex(l.id) + 1];
  if (next) {
    console.log(`\nProchain palier : ${next.id} — ${next.nom}`);
    console.log(`  accorde : ${next.accorde.join(", ") || "—"}`);
    console.log(`  rayon   : ${next.rayon}`);
    for (const p of next.prerequis) console.log(`  · ${p}`);
    const need = next.accorde.flatMap((a) => REQUIRED_SECRETS[a] ?? []).filter((s) => !att.includes(s));
    console.log(
      `\n  armer : studio arm ${next.id}` + (need.length ? ` --attest ${need.join(",")}` : ""),
    );
  } else {
    console.log("\nPalier maximal atteint.");
  }

  if (state.historique.length) {
    console.log("\nHistorique :");
    for (const t of state.historique)
      console.log(`  ${t.ts}  ${t.de} -> ${t.vers}  par ${t.par}${t.motif ? ` (${t.motif})` : ""}`);
  }
  return 0;
}

/**
 * Arme un niveau. Refuse le saut de palier (invariant 5) et exige une
 * attestation explicite pour chaque secret que le nouveau niveau rend
 * nécessaire — le Studio ne peut pas lire les secrets du Worker, il enregistre
 * donc un engagement daté plutôt qu'une vérification factice.
 */
function cmdArm(target: string): number {
  const path = statePath();
  const state = loadState(path);
  const cible = getLevel(target);
  if (!cible) {
    console.error(`niveau inconnu: ${target}`);
    return 2;
  }
  const courant = getLevel(state.arme)!;
  const blockers: string[] = [];

  const delta = levelIndex(cible.id) - levelIndex(courant.id);
  if (delta === 0) {
    console.log(`${cible.id} est déjà armé.`);
    return 0;
  }
  if (delta > 1)
    blockers.push(
      `saut de palier interdit : ${courant.id} -> ${cible.id}. Armer ${LEVELS[levelIndex(courant.id) + 1].id} d'abord.`,
    );

  // Secrets rendus nécessaires par ce niveau, non encore attestés.
  const deja = attested(state);
  const nouveaux = [...new Set(cible.accorde.flatMap((a) => REQUIRED_SECRETS[a] ?? []))];
  const declares = new Set(list("attest"));
  const manquants = nouveaux.filter((s) => !deja.has(s) && !declares.has(s));
  for (const s of manquants)
    blockers.push(`secret non attesté : ${s} — poser \`wrangler secret put ${s}\` puis --attest ${s}`);

  if (delta < 0) {
    // Désarmer est toujours permis : c'est la marche arrière de L8.
    console.log(`Désarmement ${courant.id} -> ${cible.id}.`);
  } else if (blockers.length) {
    console.log(`REFUSÉ  ${courant.id} -> ${cible.id}`);
    for (const b of blockers) console.log(`  ✗ ${b}`);
    console.log("\nPrérequis du niveau visé :");
    for (const p of cible.prerequis) console.log(`  · ${p}`);
    return 1;
  }

  const t: Transition = {
    ts: new Date().toISOString(),
    de: courant.id,
    vers: cible.id,
    par: arg("par") ?? process.env.USER ?? "inconnu",
    attestations: [...declares],
    motif: arg("motif"),
  };
  state.arme = cible.id;
  state.historique.push(t);
  saveState(path, state);

  console.log(`ARMÉ  ${t.de} -> ${t.vers} (${cible.nom})`);
  console.log(`  autorise désormais : ${grantedActions(cible.id).join(", ")}`);
  if (t.attestations.length) console.log(`  attesté par ${t.par} : ${t.attestations.join(", ")}`);
  console.log(`  retour arrière : ${cible.retour_arriere}`);
  console.log(`\n  ${path} modifié — commiter ce changement de posture.`);
  return 0;
}

function cmdGate(): number {
  const action = (arg("action") ?? "") as Action;
  if (!ACTIONS.includes(action)) {
    console.error(`--action requis, parmi: ${ACTIONS.join(", ")}`);
    return 2;
  }
  const kitsPath = arg("kits");
  const kits = kitsPath ? loadKits(kitsPath) : undefined;
  const ctx = { ...ctxFromArgs(kits), kit: kits?.[0] };
  const d = authorize(action, ctx);

  console.log(`${d.allowed ? "AUTORISÉ" : "REFUSÉ"}  ${action} @ ${d.level}`);
  if (!d.allowed) {
    console.log(`  niveau minimal requis : ${minLevelFor(action) ?? "aucun"}`);
    for (const b of d.blockers) console.log(`  ✗ ${b}`);
  }
  for (const w of d.warnings) console.log(`  ! ${w}`);

  const ledger = arg("ledger");
  if (ledger) {
    const entry: LedgerEntry = {
      ts: new Date().toISOString(),
      level: d.level,
      action,
      videoId: kits?.[0]?.videoId,
      allowed: d.allowed,
      blockers: d.blockers.length ? d.blockers : undefined,
      dryRun: true, // le Studio ne sort jamais : il décide.
    };
    append(ledger, entry);
    console.log(`  → journalisé dans ${ledger}`);
  }
  return d.allowed ? 0 : 1;
}

function cmdPlan(): number {
  const kitsPath = arg("kits");
  if (!kitsPath) {
    console.error("--kits <fichier.json> requis");
    return 2;
  }
  const kits = loadKits(kitsPath);
  const plan = buildPlan(kits, ctxFromArgs(kits));

  console.log(`Plan @ ${plan.level} — ${plan.nomNiveau}`);
  console.log(
    `${plan.resume.total} kit(s) : ${plan.resume.conformes} conforme(s), ${plan.resume.bloques} bloqué(s)\n`,
  );

  for (const k of plan.kits) {
    console.log(`  ${k.canonOk ? "✓" : "✗"} ${k.videoId}`);
    for (const v of k.violations) console.log(`      canon: ${v}`);
    for (const a of k.actions)
      if (!a.allowed) console.log(`      ${a.action}: ${a.blockers[0] ?? "bloqué"}`);
  }

  console.log(
    `\nSorties effectives : ${plan.sortiesEffectives.join(", ") || "aucune (tout reste en dry-run)"}`,
  );
  if (plan.manquants.length) {
    console.log("\nManque pour armer ce niveau :");
    for (const m of plan.manquants) {
      const bits = [...m.secrets, m.flag ? `flag ${m.flag}` : ""].filter(Boolean);
      console.log(`  · ${m.action} : ${bits.join(", ")}`);
    }
  }
  console.log("\nCommandes :");
  for (const c of plan.commandes) console.log(`  ${c}`);
  return plan.resume.bloques > 0 ? 1 : 0;
}

function cmdCheck(): number {
  const kitsPath = arg("kits");
  if (!kitsPath) {
    console.error("--kits <fichier.json> requis");
    return 2;
  }
  const kits = loadKits(kitsPath);
  let bad = 0;
  for (const k of kits) {
    const v = validateKit(k);
    if (v.length) bad++;
    console.log(`${v.length === 0 ? "OK  " : "FAIL"} ${k.videoId ?? "(sans videoId)"}`);
    for (const x of v) console.log(`       ${x}`);
  }
  console.log(`\n${kits.length - bad}/${kits.length} conforme(s) au canon.`);
  return bad === 0 ? 0 : 1;
}

const cmd = process.argv[2];
let code = 0;
if (cmd === "levels") cmdLevels();
else if (cmd === "explain") code = cmdExplain(process.argv[3] ?? "");
else if (cmd === "status") code = cmdStatus();
else if (cmd === "arm") code = cmdArm(process.argv[3] ?? "");
else if (cmd === "gate") code = cmdGate();
else if (cmd === "plan") code = cmdPlan();
else if (cmd === "check") code = cmdCheck();
else {
  console.log(
    "WST Studio — console d'autonomie\n\n" +
      "  studio status                        niveau armé, prochain palier, historique\n" +
      "  studio arm <L0..L9> [--attest A,B] [--motif \"...\"] [--par nom]\n" +
      "  studio levels\n" +
      "  studio explain <L0..L9>\n" +
      "  studio gate  --action youtube_metadata [--level L6] [--kits f.json] [--secrets A,B] [--flags YT_PUBLISH] [--ledger f.jsonl]\n" +
      "  studio plan  --kits f.json [--level L6] [--secrets ...] [--flags ...] [--max-batch N]\n" +
      "  studio check --kits f.json\n\n" +
      "Sans --level, les commandes raisonnent au niveau réellement armé (studio.state.json).\n",
  );
  code = cmd ? 2 : 0;
}
process.exit(code);
