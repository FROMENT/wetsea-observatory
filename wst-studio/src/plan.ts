// Le plan : ce qui se passerait réellement si on lançait, au niveau armé.
//
// C'est la valeur de console du Studio — répondre à « qu'est-ce que ça publie,
// et qu'est-ce qu'il me manque pour que ça publie » AVANT de lancer quoi que ce soit.

import type { EditorialKit } from "../../wetsea-packaging/src/schema";
import { validateKit } from "../../wetsea-packaging/src/validator";
import { authorize, REQUIRED_FLAGS, REQUIRED_SECRETS, type GateContext } from "./gate";
import { type Action, type LevelId, getLevel, grantedActions } from "./levels";

export type KitWithId = EditorialKit & { videoId?: string };

export interface KitPlan {
  videoId: string;
  canonOk: boolean;
  violations: string[];
  /** action -> autorisée ou raison du blocage */
  actions: { action: Action; allowed: boolean; blockers: string[] }[];
}

export interface Plan {
  level: LevelId;
  nomNiveau: string;
  kits: KitPlan[];
  /** Sorties qui atteindraient réellement le monde extérieur. */
  sortiesEffectives: Action[];
  /** Ce qu'il manque pour armer les actions du niveau. */
  manquants: { action: Action; secrets: string[]; flag?: string }[];
  /** Commandes concrètes à exécuter, dans l'ordre. */
  commandes: string[];
  resume: { total: number; conformes: number; bloques: number };
}

/** Les actions « sortie » du niveau, dans l'ordre du pipeline. */
const OUTPUT_ORDER: Action[] = ["commit_hugo", "notion_draft", "youtube_metadata"];

export function buildPlan(kits: KitWithId[], ctx: GateContext): Plan {
  const level = getLevel(ctx.level)!;
  const granted = grantedActions(ctx.level);
  const outputs = OUTPUT_ORDER.filter((a) => granted.includes(a));

  const kitPlans: KitPlan[] = kits.map((kit, i) => {
    const violations = validateKit(kit);
    return {
      videoId: kit.videoId ?? `(kit #${i + 1} sans videoId)`,
      canonOk: violations.length === 0,
      violations,
      actions: outputs.map((action) => {
        const d = authorize(action, { ...ctx, kit });
        return { action, allowed: d.allowed, blockers: d.blockers };
      }),
    };
  });

  // Une sortie est « effective » si elle est autorisée pour au moins un kit :
  // secrets présents, flag armé, canon respecté.
  const sortiesEffectives = outputs.filter((a) =>
    kitPlans.some((k) => k.actions.find((x) => x.action === a)?.allowed),
  );

  const have = new Set(ctx.secrets ?? []);
  const armed = new Set(ctx.flags ?? []);
  const manquants = outputs
    .map((action) => ({
      action,
      secrets: (REQUIRED_SECRETS[action] ?? []).filter((s) => !have.has(s)),
      flag: REQUIRED_FLAGS[action] && !armed.has(REQUIRED_FLAGS[action]!)
        ? REQUIRED_FLAGS[action]
        : undefined,
    }))
    .filter((m) => m.secrets.length > 0 || m.flag);

  const commandes: string[] = [];
  for (const m of manquants) {
    for (const s of m.secrets) commandes.push(`wrangler secret put ${s}`);
    if (m.flag) commandes.push(`# wrangler.toml [vars] : ${m.flag} = "true"`);
  }
  const publiables = kitPlans.filter((k) => k.canonOk).length;
  if (publiables > 0 && outputs.length > 0) {
    commandes.push(
      `curl -X POST "$WORKER_URL/publish" -H 'content-type: application/json' --data @kits.json` +
        `   # ${publiables} kit(s) conforme(s)`,
    );
  }
  if (publiables === 0 && kitPlans.length > 0) {
    commandes.push("# aucun kit conforme : corriger le canon avant toute publication");
  }

  return {
    level: ctx.level,
    nomNiveau: level.nom,
    kits: kitPlans,
    sortiesEffectives,
    manquants,
    commandes,
    resume: {
      total: kitPlans.length,
      conformes: publiables,
      bloques: kitPlans.length - publiables,
    },
  };
}
