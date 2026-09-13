// L'état armé : quel niveau est effectivement en vigueur.
//
// Il vit dans un fichier VERSIONNÉ (studio.state.json). Conséquence voulue :
// changer de palier est un commit relu, pas une variable d'environnement qu'on
// bascule un vendredi soir. L'historique des transitions est dans le fichier ET
// dans git.
//
// Le Studio ne peut pas VÉRIFIER un secret qui vit chez Cloudflare : il n'y a
// pas accès. Il enregistre donc une ATTESTATION explicite de l'opérateur —
// « je confirme avoir posé ce secret » — horodatée et signée. Attester est un
// acte ; se tromper est traçable. C'est plus honnête qu'une fausse vérification.

import { existsSync, readFileSync, writeFileSync } from "node:fs";
import type { LevelId } from "./levels";

export interface Transition {
  ts: string;
  de: LevelId;
  vers: LevelId;
  par: string;
  /** Secrets attestés comme posés côté Worker au moment de la transition. */
  attestations: string[];
  motif?: string;
}

export interface StudioState {
  arme: LevelId;
  historique: Transition[];
}

export const DEFAULT_STATE: StudioState = { arme: "L3", historique: [] };

export function load(path: string): StudioState {
  if (!existsSync(path)) return { ...DEFAULT_STATE };
  return JSON.parse(readFileSync(path, "utf8")) as StudioState;
}

export function save(path: string, state: StudioState): void {
  writeFileSync(path, JSON.stringify(state, null, 2) + "\n", "utf8");
}

/** Secrets déjà attestés au fil des transitions successives. */
export function attested(state: StudioState): Set<string> {
  const out = new Set<string>();
  for (const t of state.historique) for (const a of t.attestations) out.add(a);
  return out;
}
