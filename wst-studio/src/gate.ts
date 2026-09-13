// Le gate : seul point qui autorise une action. Fail-closed par construction —
// on part d'un refus et on n'accorde que si TOUTES les conditions sont réunies.
//
// Il réutilise validateKit() du pipeline (pas de copie du canon) : les règles
// dures et les phrases interdites sont donc opposables à tous les niveaux,
// y compris L9.

import { validateKit } from "../../wetsea-packaging/src/validator";
import type { EditorialKit } from "../../wetsea-packaging/src/schema";
import {
  type Action,
  type LevelId,
  getLevel,
  grantedActions,
  levelIndex,
  minLevelFor,
} from "./levels";

/** Secrets requis par action — un niveau armé sans secret reste inerte. */
export const REQUIRED_SECRETS: Partial<Record<Action, string[]>> = {
  generate: ["ANTHROPIC_API_KEY"],
  commit_hugo: ["GITHUB_TOKEN"],
  notion_draft: ["NOTION_TOKEN"],
  youtube_metadata: ["YT_CLIENT_ID", "YT_CLIENT_SECRET", "YT_REFRESH_TOKEN"],
};

/** Flag `wrangler.toml` à basculer pour que l'action sorte du dry-run. */
export const REQUIRED_FLAGS: Partial<Record<Action, string>> = {
  notion_draft: "NOTION_PUBLISH",
  youtube_metadata: "YT_PUBLISH",
};

export interface GateContext {
  level: LevelId;
  /** Kit concerné, s'il y en a un : le canon est vérifié avant toute sortie. */
  kit?: EditorialKit;
  /** Noms des secrets effectivement disponibles. */
  secrets?: string[];
  /** Flags effectivement à "true". */
  flags?: string[];
  /** Taille du lot pour batch_fanout. */
  batchSize?: number;
  /** Quota de lot autorisé (L7). */
  maxBatch?: number;
}

export interface Decision {
  action: Action;
  level: LevelId;
  allowed: boolean;
  /** Ce qui bloque (vide si autorisé). */
  blockers: string[];
  /** Ce qui passe mais mérite d'être vu. */
  warnings: string[];
}

/**
 * Autorise (ou non) une action à un niveau donné.
 *
 * Ordre des contrôles, du plus structurel au plus conjoncturel :
 *   1. le niveau accorde-t-il l'action ?
 *   2. le canon éditorial est-il respecté ? (invariant, jamais relaxable)
 *   3. les secrets sont-ils là ?
 *   4. les flags sont-ils armés ?
 *   5. les quotas sont-ils tenus ?
 */
export function authorize(action: Action, ctx: GateContext): Decision {
  const blockers: string[] = [];
  const warnings: string[] = [];

  // 1. Niveau
  if (!getLevel(ctx.level)) {
    blockers.push(`niveau inconnu: ${ctx.level}`);
    return { action, level: ctx.level, allowed: false, blockers, warnings };
  }
  if (!grantedActions(ctx.level).includes(action)) {
    const min = minLevelFor(action);
    blockers.push(
      min
        ? `action "${action}" non accordée à ${ctx.level} — requiert ${min}`
        : `action "${action}" n'est accordée par aucun niveau`,
    );
  }

  // 2. Canon éditorial — invariant. Vérifié même si le niveau bloque déjà,
  //    pour que le rapport dise TOUT ce qui ne va pas d'un coup.
  if (ctx.kit) {
    const violations = validateKit(ctx.kit);
    for (const v of violations) blockers.push(`canon: ${v}`);
  } else if (action !== "self_modify" && action !== "autonomous_discovery") {
    warnings.push("aucun kit fourni — le canon n'a pas pu être vérifié");
  }

  // 3. Secrets
  const have = new Set(ctx.secrets ?? []);
  for (const s of REQUIRED_SECRETS[action] ?? [])
    if (!have.has(s)) blockers.push(`secret manquant: ${s}`);

  // 4. Flags (dry-run tant qu'ils ne sont pas armés)
  const flag = REQUIRED_FLAGS[action];
  const armed = new Set(ctx.flags ?? []);
  if (flag && !armed.has(flag))
    blockers.push(`flag ${flag} non armé (dry-run) — l'action ne sortira pas`);

  // 5. Quotas
  if (action === "batch_fanout") {
    const size = ctx.batchSize ?? 0;
    const max = ctx.maxBatch ?? 0;
    if (max <= 0) blockers.push("maxBatch non défini — L7 exige un quota explicite");
    else if (size > max) blockers.push(`lot de ${size} > quota ${max}`);
    if (size > 10 && levelIndex(ctx.level) < levelIndex("L8"))
      warnings.push(`lot de ${size} : au-delà de 10, surveiller le premier échec de près`);
  }

  return { action, level: ctx.level, allowed: blockers.length === 0, blockers, warnings };
}
