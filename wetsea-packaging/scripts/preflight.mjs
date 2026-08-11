#!/usr/bin/env node
// Préflight de déploiement.
//
// Objectif : faire échouer le déploiement ICI plutôt qu'en production.
//
//   node scripts/preflight.mjs          contrôles locaux (aucune auth requise)
//   node scripts/preflight.mjs --post   + vérifie le Worker DÉPLOYÉ (auth requise)
//
// La liste des secrets est dérivée de src/env.d.ts, pas d'une doc recopiée :
// une doc dérive, le code non.

import { spawnSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const UNIT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const post = process.argv.includes("--post");

let fail = 0, warn = 0;
const ok = (c, m) => { console.log(`${c ? "OK  " : "FAIL"} ${m}`); if (!c) fail++; };
const note = (m) => { console.log(`WARN ${m}`); warn++; };
const sh = (cmd, args, opts = {}) =>
  spawnSync(cmd, args, { cwd: UNIT, encoding: "utf8", ...opts });

// --- secrets attendus, lus dans le code ---------------------------------
const envd = readFileSync(join(UNIT, "src/env.d.ts"), "utf8");
const secretsBlock = envd.slice(envd.indexOf("// Secrets"));
const SECRETS = [...secretsBlock.matchAll(/^\s{2}([A-Z0-9_]+):\s*string;/gm)].map((m) => m[1]);

// Secrets requis par palier d'autonomie (cf. wst-studio/SPEC.md).
const BY_LEVEL = {
  L3: ["ANTHROPIC_API_KEY", "GCP_SA_EMAIL", "GCP_SA_PRIVATE_KEY"],
  L4: ["GITHUB_TOKEN"],
  L5: ["NOTION_TOKEN"],
  L6: ["YT_CLIENT_ID", "YT_CLIENT_SECRET", "YT_REFRESH_TOKEN"],
};

console.log("== contrôles locaux ==");

const tsc = sh("npm", ["run", "typecheck", "--silent"]);
ok(tsc.status === 0, "typecheck");
if (tsc.status !== 0) console.log((tsc.stdout || tsc.stderr).trim().split("\n").slice(0, 8).join("\n"));

const dry = sh("npx", ["wrangler", "deploy", "--dry-run", "--outdir", "/tmp/wsp-preflight"], {
  env: { ...process.env, CI: "1" },
});
ok(dry.status === 0, "wrangler deploy --dry-run (config + bundle)");
if (dry.status !== 0) console.log((dry.stdout || dry.stderr).trim().split("\n").slice(-15).join("\n"));

const toml = readFileSync(join(UNIT, "wrangler.toml"), "utf8");
ok(/\[observability\][\s\S]*?enabled\s*=\s*true/.test(toml),
  "observabilité activée (sans logs, « L3 tenu » est invérifiable)");

// Sécurité : le dépôt ne doit contenir aucune valeur de secret.
const assigned = SECRETS.filter((s) => new RegExp(`^\\s*${s}\\s*=\\s*"[^"]+"`, "m").test(toml));
ok(assigned.length === 0,
  assigned.length ? `secrets en clair dans wrangler.toml: ${assigned.join(", ")}` : "aucun secret en clair dans wrangler.toml");

// Sûreté par défaut : les sorties externes restent opt-in.
for (const flag of ["YT_PUBLISH", "NOTION_PUBLISH"]) {
  const armed = new RegExp(`^\\s*${flag}\\s*=\\s*"true"`, "m").test(toml);
  if (armed) note(`${flag}="true" : cette sortie écrira réellement dès le déploiement`);
}

// Le cron tourne dès le déploiement ; sans dossier Drive il ne fait rien.
const driveEmpty = /DRIVE_ROOT_FOLDER_ID\s*=\s*""/.test(toml);
if (driveEmpty) console.log("INFO découverte cron inerte (DRIVE_ROOT_FOLDER_ID vide) — déploiement sans effet de bord");

console.log(`\nSecrets attendus (dérivés de src/env.d.ts) : ${SECRETS.length}`);
for (const [lvl, list] of Object.entries(BY_LEVEL))
  console.log(`  ${lvl} : ${list.join(", ")}`);
const orphans = SECRETS.filter((s) => !Object.values(BY_LEVEL).flat().includes(s));
if (orphans.length) note(`secrets non rattachés à un palier : ${orphans.join(", ")}`);

// --- contrôles post-déploiement -----------------------------------------
if (post) {
  console.log("\n== Worker déployé ==");
  const who = sh("npx", ["wrangler", "whoami"], { env: { ...process.env, CI: "1" } });
  const authed = who.status === 0 && !/not authenticated/i.test(who.stdout + who.stderr);
  ok(authed, "authentifié (wrangler login)");
  if (!authed) { console.log("  -> `npx wrangler login`, puis relancer avec --post"); }
  else {
    const list = sh("npx", ["wrangler", "secret", "list"], { env: { ...process.env, CI: "1" } });
    if (list.status !== 0) {
      ok(false, "wrangler secret list (le Worker est-il déployé ?)");
    } else {
      let present = [];
      try {
        present = JSON.parse(list.stdout.slice(list.stdout.indexOf("["))).map((s) => s.name);
      } catch { present = SECRETS.filter((s) => list.stdout.includes(s)); }
      for (const [lvl, need] of Object.entries(BY_LEVEL)) {
        const missing = need.filter((s) => !present.includes(s));
        if (lvl === "L3") ok(missing.length === 0, `secrets L3 posés${missing.length ? ` — manque ${missing.join(", ")}` : ""}`);
        else if (missing.length) console.log(`INFO ${lvl} pas encore armable — manque ${missing.join(", ")}`);
        else console.log(`INFO ${lvl} : secrets présents`);
      }
    }
  }
}

console.log(`\n${fail === 0 ? "PREFLIGHT OK" : `PREFLIGHT FAILED (${fail})`}${warn ? ` — ${warn} avertissement(s)` : ""}`);
process.exit(fail === 0 ? 0 : 1);
