---
name: run-wst-studio
description: Build and run WST Studio — the autonomy console (levels L0→L9, gate, plan, ledger) above the wetsea-packaging pipeline. Use when asked to run, start, build, test, or check WST Studio, to inspect autonomy levels, or to decide whether an action (YouTube write-back, Notion draft, Hugo commit, batch) is allowed at a given level.
---

# Run WST Studio

A **CLI console** that decides what the `wetsea-packaging` pipeline is allowed to
publish, on an L0→L9 autonomy ladder. It never publishes anything itself, so it
runs **with no secrets at all** — secrets and flags are *declared* on the command
line so the gate can reason about them.

Doctrine: [`SPEC.md`](../../../SPEC.md). Paths below are relative to `wst-studio/`.

## Prerequisites

Node 22+ (verified on `v22.22.2`). The Studio imports the pipeline's canon
(`validateKit`) instead of copying it, so **the pipeline's deps must be
installed** — the driver checks this and tells you if not:

```sh
cd ../wetsea-packaging && npm ci     # provides zod to the imported canon
cd ../wst-studio && npm install
npm run typecheck                    # tsc --noEmit -> exit 0
```

## Run (agent path) — the driver

```sh
node .claude/skills/run-wst-studio/driver.mjs
```

Builds the CLI and asserts 15 behaviours: the ladder renders, the canon holds,
the gate is fail-closed (level / secrets / flag / quota), **the canon outranks
the level**, the plan lists effective outputs plus the exact missing commands,
and decisions are journaled. Ends in `DRIVER OK`, exit 0.

## Run (human path) — the console

```sh
npm run build                        # esbuild -> dist/studio.mjs

node dist/studio.mjs status          # armed level, next step, history
node dist/studio.mjs levels          # the ladder + invariants
node dist/studio.mjs explain L6      # decider, blast radius, rollback, prerequisites
node dist/studio.mjs check --kits ../wetsea-packaging/examples/pilot_kits.json

# arm a level — refuses level-skipping and unattested secrets
node dist/studio.mjs arm L4 --attest GITHUB_TOKEN --motif "..."

# "am I allowed?" — exit 0 allowed, 1 refused, 2 usage
node dist/studio.mjs gate --level L6 --action youtube_metadata \
  --kits ../wetsea-packaging/examples/pilot_kits.json \
  --secrets YT_CLIENT_ID,YT_CLIENT_SECRET,YT_REFRESH_TOKEN --flags YT_PUBLISH

# "what would it publish?" — plus the commands still missing
node dist/studio.mjs plan --level L6 \
  --kits ../wetsea-packaging/examples/pilot_kits.json \
  --secrets GITHUB_TOKEN,NOTION_TOKEN --flags NOTION_PUBLISH
```

Actions: `generate`, `commit_hugo`, `notion_draft`, `youtube_metadata`,
`batch_fanout`, `autonomous_discovery`, `self_modify`.

## Gotchas

- **`npm install` in wst-studio is not enough.** The canon is imported from
  `../wetsea-packaging/src/`, and Node/TS resolve *that* file's `zod` from
  `wetsea-packaging/node_modules` — which a fresh clone does not have. Symptom:
  `TS2307: Cannot find module 'zod'` plus a cascade of `TS7006 implicitly any`
  in `validator.ts`. Fix: `npm ci` in `wetsea-packaging` too.
- **A refusal is the expected output, not a failure.** `gate` exits `1` when it
  refuses — that's what makes it usable in CI. Don't "fix" a refusal by
  loosening the gate; supply the missing secret/flag/level.
- **Declaring `--secrets` does not grant anything.** It tells the gate the secret
  *exists* so it can reason offline. The real write still needs it in
  `wrangler secret`.
- **The canon outranks the level, always.** L6 fully armed still refuses a kit
  containing a forbidden phrase. A new rule added in `wetsea-packaging` applies
  to the Studio with no sync.
- **Exit code of `plan` is `1` if any kit is non-conformant**, even when the plan
  itself printed fine — it reflects publishability, not command success.
- **`arm` writes `studio.state.json`, which is committed.** When testing, always
  pass `--state /tmp/…json` so you don't silently change the repo's declared
  posture — the driver does exactly this.
- **Attesting is not verifying.** `--attest GITHUB_TOKEN` records a signed,
  dated claim that the secret is set in the Worker; the Studio cannot see
  Cloudflare secrets. Never attest on someone else's behalf — it poisons the
  audit trail the mechanism exists to provide.

## Troubleshooting

| Symptom | Fix |
|---|---|
| `Missing …/wetsea-packaging/node_modules` | `cd ../wetsea-packaging && npm ci` |
| `TS2307: Cannot find module 'zod'` | same — the sibling's deps, not the Studio's |
| `--action requis, parmi: …` | pass `--action` with one of the listed action names |
