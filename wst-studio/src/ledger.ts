// Le ledger : journal append-only des décisions et des écritures externes.
//
// Invariant : « toute écriture externe est journalisée avec de quoi revenir en
// arrière ». À L6+, l'état d'avant (snapshot du snippet YouTube, sha du commit,
// id de page Notion) est ce qui rend le retour arrière possible — sans lui, le
// niveau ne devrait pas être armé.
//
// Format JSONL : une décision par ligne, jamais réécrite.

import { appendFileSync, existsSync, readFileSync } from "node:fs";
import type { Action, LevelId } from "./levels";

export interface LedgerEntry {
  ts: string;
  level: LevelId;
  action: Action;
  videoId?: string;
  allowed: boolean;
  blockers?: string[];
  /** Dry-run = l'action a été calculée mais n'est pas sortie. */
  dryRun: boolean;
  /** De quoi revenir en arrière (snippet d'avant, sha, pageId). */
  rollback?: unknown;
}

export function append(path: string, entry: LedgerEntry): void {
  appendFileSync(path, JSON.stringify(entry) + "\n", "utf8");
}

export function read(path: string): LedgerEntry[] {
  if (!existsSync(path)) return [];
  return readFileSync(path, "utf8")
    .split("\n")
    .filter(Boolean)
    .map((l) => JSON.parse(l) as LedgerEntry);
}

/** Écritures réellement sorties (non dry-run) et donc à annuler en cas de retour arrière. */
export function effectiveWrites(path: string): LedgerEntry[] {
  return read(path).filter((e) => e.allowed && !e.dryRun);
}
