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
import { authorize } from "./gate";
import { buildPlan, type KitWithId } from "./plan";
import { append, type LedgerEntry } from "./ledger";
import {
  ACTIONS,
  INVARIANTS,
  LEVELS,
  type Action,
  type LevelId,
  getLevel,
  grantedActions,
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

function ctxFromArgs(kits?: KitWithId[]) {
  return {
    level: (arg("level") ?? "L3").toUpperCase() as LevelId,
    secrets: list("secrets"),
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
else if (cmd === "gate") code = cmdGate();
else if (cmd === "plan") code = cmdPlan();
else if (cmd === "check") code = cmdCheck();
else {
  console.log(
    "WST Studio — console d'autonomie\n\n" +
      "  studio levels\n" +
      "  studio explain <L0..L9>\n" +
      "  studio gate  --level L6 --action youtube_metadata [--kits f.json] [--secrets A,B] [--flags YT_PUBLISH] [--ledger f.jsonl]\n" +
      "  studio plan  --level L6 --kits f.json [--secrets ...] [--flags ...] [--max-batch N]\n" +
      "  studio check --kits f.json\n",
  );
  code = cmd ? 2 : 0;
}
process.exit(code);
