#!/usr/bin/env node
// Driver for WST Studio — builds the console and asserts the autonomy gate.
//
// Everything here is dry-run by construction: the Studio decides, it never
// publishes, so no secrets are needed. Secrets/flags are *declared* on the
// command line so the gate can reason about them.
//
// Usage: node .claude/skills/run-wst-studio/driver.mjs

import { spawn } from "node:child_process";
import { existsSync, mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const UNIT = resolve(HERE, "../../.."); // -> wst-studio/
const PIPE = resolve(UNIT, "../wetsea-packaging");
const KITS = join(PIPE, "examples/pilot_kits.json");
const CLI = join(UNIT, "dist/studio.mjs");
const YT = "YT_CLIENT_ID,YT_CLIENT_SECRET,YT_REFRESH_TOKEN";

let failed = 0;
const ok = (cond, msg) => {
  console.log(`${cond ? "PASS" : "FAIL"} ${msg}`);
  if (!cond) failed++;
};
const run = (file, args, opts = {}) =>
  new Promise((res) => {
    const p = spawn(file, args, { cwd: UNIT, ...opts });
    let out = "", err = "";
    p.stdout?.on("data", (d) => (out += d));
    p.stderr?.on("data", (d) => (err += d));
    p.on("close", (code) => res({ code, out, err }));
  });
const studio = (args) => run(process.execPath, [CLI, ...args]);

// The Studio reuses the pipeline's canon, so the pipeline's deps must be there.
if (!existsSync(join(PIPE, "node_modules"))) {
  console.error(`Missing ${PIPE}/node_modules — run \`cd ../wetsea-packaging && npm ci\` first.`);
  process.exit(2);
}

console.log("== build ==");
const build = await run("npm", ["run", "build", "--silent"]);
if (build.code !== 0) {
  console.log(build.err || build.out);
  ok(false, "esbuild build");
  process.exit(1);
}
ok(existsSync(CLI), "build produced dist/studio.mjs");

console.log("\n== ladder ==");
const levels = await studio(["levels"]);
ok(
  ["L0", "L3", "L6", "L9"].every((l) => levels.out.includes(l)) &&
    levels.out.includes("Invariants"),
  "levels lists L0..L9 and the invariants",
);
const explain = await studio(["explain", "L6"]);
ok(
  explain.out.includes("youtube_metadata") && explain.out.includes("Retour arrière"),
  "explain L6 states what it grants and how to roll back",
);
ok((await studio(["explain", "L42"])).code === 2, "explain rejects an unknown level");

console.log("\n== canon (invariant) ==");
ok((await studio(["check", "--kits", KITS])).code === 0, "all pilot kits pass the canon");

const tmp = mkdtempSync(join(tmpdir(), "wst-"));
const driftPath = join(tmp, "drift.json");
const pilots = JSON.parse(readFileSync(KITS, "utf8"));
const drifted = structuredClone(pilots.kits[0]);
drifted.hook_intro = "Une approche révolutionnaire qui change tout.";
writeFileSync(driftPath, JSON.stringify({ kits: [drifted] }));
ok((await studio(["check", "--kits", driftPath])).code === 1, "a drifted kit fails the canon");

console.log("\n== gate: fail-closed ==");
const low = await studio(["gate", "--level", "L3", "--action", "youtube_metadata", "--kits", KITS]);
ok(low.code === 1 && low.out.includes("requiert L6"), "youtube @ L3 refused, names the minimum level");

const noSecrets = await studio([
  "gate", "--level", "L6", "--action", "youtube_metadata", "--kits", KITS, "--flags", "YT_PUBLISH",
]);
ok(noSecrets.code === 1 && noSecrets.out.includes("secret manquant"),
  "youtube @ L6 refused without secrets");

const noFlag = await studio([
  "gate", "--level", "L6", "--action", "youtube_metadata", "--kits", KITS, "--secrets", YT,
]);
ok(noFlag.code === 1 && noFlag.out.includes("YT_PUBLISH"),
  "youtube @ L6 refused while the flag is unarmed (dry-run)");

const armed = await studio([
  "gate", "--level", "L6", "--action", "youtube_metadata", "--kits", KITS,
  "--secrets", YT, "--flags", "YT_PUBLISH",
]);
ok(armed.code === 0, "youtube @ L6 allowed once level + secrets + flag + canon all hold");

console.log("\n== gate: the canon outranks the level ==");
const drift = await studio([
  "gate", "--level", "L6", "--action", "youtube_metadata", "--kits", driftPath,
  "--secrets", YT, "--flags", "YT_PUBLISH",
]);
ok(drift.code === 1 && drift.out.includes("canon:"),
  "fully armed L6 still refuses a drifted kit");

console.log("\n== gate: L7 demands an explicit quota ==");
const noQuota = await studio(["gate", "--level", "L7", "--action", "batch_fanout", "--kits", KITS]);
ok(noQuota.code === 1 && noQuota.out.includes("quota"), "batch_fanout refused without maxBatch");
const quota = await studio([
  "gate", "--level", "L7", "--action", "batch_fanout", "--kits", KITS, "--max-batch", "50",
]);
ok(quota.code === 0, "batch_fanout allowed under an explicit quota");

console.log("\n== plan ==");
const planL3 = await studio(["plan", "--level", "L3", "--kits", KITS]);
ok(planL3.out.includes("aucune (tout reste en dry-run)"), "plan @ L3 has no effective output");
const planL6 = await studio([
  "plan", "--level", "L6", "--kits", KITS,
  "--secrets", "GITHUB_TOKEN,NOTION_TOKEN", "--flags", "NOTION_PUBLISH",
]);
ok(
  planL6.out.includes("commit_hugo") && planL6.out.includes("notion_draft") &&
    planL6.out.includes("wrangler secret put YT_CLIENT_ID"),
  "plan @ L6 lists effective outputs and the exact commands still missing",
);

console.log("\n== armed state ==");
// Throwaway state: never touch the repo's committed posture.
const st = join(tmp, "state.json");
writeFileSync(st, JSON.stringify({ arme: "L3", historique: [] }));

const skip = await studio(["arm", "L6", "--attest", YT, "--state", st]);
ok(skip.code === 1 && skip.out.includes("saut de palier"), "arm refuses to skip a level");

const noAttest = await studio(["arm", "L4", "--state", st]);
ok(
  noAttest.code === 1 && noAttest.out.includes("GITHUB_TOKEN"),
  "arm L4 refused until the required secret is attested",
);

const armL4 = await studio([
  "arm", "L4", "--attest", "GITHUB_TOKEN", "--par", "driver", "--state", st,
]);
ok(armL4.code === 0 && armL4.out.includes("L3 -> L4"), "arm L4 succeeds once attested");

const status = await studio(["status", "--state", st]);
ok(
  status.out.includes("L4") && status.out.includes("commit_hugo") && status.out.includes("driver"),
  "status reports the armed level, what it grants, and who armed it",
);

// The gate must follow the armed state when --level is omitted.
const implicit = await studio([
  "gate", "--action", "commit_hugo", "--kits", KITS, "--state", st,
]);
ok(implicit.code === 0, "gate defaults to the armed level and honours attested secrets");
const implicitYt = await studio([
  "gate", "--action", "youtube_metadata", "--kits", KITS, "--state", st,
]);
ok(implicitYt.code === 1, "gate still refuses an action above the armed level");

console.log("\n== ledger ==");
const led = join(tmp, "ledger.jsonl");
await studio(["gate", "--level", "L3", "--action", "youtube_metadata", "--kits", KITS, "--ledger", led]);
const entries = readFileSync(led, "utf8").trim().split("\n").map((l) => JSON.parse(l));
ok(entries.length === 1 && entries[0].allowed === false && entries[0].dryRun === true,
  "the decision is journaled append-only with its blockers");

console.log(failed === 0 ? "\nDRIVER OK" : `\nDRIVER FAILED (${failed})`);
process.exit(failed === 0 ? 0 : 1);
