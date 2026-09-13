// L'échelle d'autonomie WST Studio.
//
// Elle prolonge les « paliers » déjà en place côté pipeline (dry-run -> commit
// Hugo -> NOTION_PUBLISH -> YT_PUBLISH) en une progression lisible : à chaque
// cran, on répond à trois questions — qui décide, quel est le rayon de souffle,
// et comment on revient en arrière.
//
// Un niveau n'est PAS une permission technique de plus : c'est un contrat
// d'exploitation. Les invariants (INVARIANTS) ne se relâchent à aucun niveau.

export const ACTIONS = [
  "generate",              // produire un kit à partir d'un brief + sources
  "commit_hugo",           // écrire data/packaging/<id>.json dans le dépôt site
  "notion_draft",          // créer le brouillon Notion (-> WordPress via publisher)
  "youtube_metadata",      // écrire titre/description/chapitres sur la vidéo
  "batch_fanout",          // traiter N vidéos en une commande
  "autonomous_discovery",  // cron: découvrir puis publier sans humain par item
  "self_modify",           // proposer une modification de ses propres réglages
] as const;
export type Action = (typeof ACTIONS)[number];

export type LevelId = "L0" | "L1" | "L2" | "L3" | "L4" | "L5" | "L6" | "L7" | "L8" | "L9";

export interface Level {
  id: LevelId;
  nom: string;
  /** Qui prend la décision de publier. */
  decideur: string;
  /** Ce que le niveau autorise EN PLUS des niveaux inférieurs. */
  accorde: Action[];
  /** Rayon de souffle : ce qui change dans le monde réel. */
  rayon: string;
  /** Comment on annule. Un niveau sans marche arrière crédible ne doit pas exister. */
  retour_arriere: string;
  /** Conditions à réunir AVANT d'armer ce niveau. */
  prerequis: string[];
  /** Réglage concret côté pipeline. */
  reglage: string;
}

export const LEVELS: Level[] = [
  {
    id: "L0",
    nom: "Manuel",
    decideur: "Humain, pour tout",
    accorde: [],
    rayon: "Aucun automatisme. Le Studio n'écrit rien.",
    retour_arriere: "Sans objet.",
    prerequis: [],
    reglage: "Pipeline non déployé.",
  },
  {
    id: "L1",
    nom: "Assistance",
    decideur: "Humain",
    accorde: [],
    rayon: "Le Studio propose du texte ; l'humain recopie.",
    retour_arriere: "Sans objet — rien n'est écrit.",
    prerequis: ["Canon éditorial figé (frameworks/clac.md, brand/)"],
    reglage: "Aucun.",
  },
  {
    id: "L2",
    nom: "Génération à la demande",
    decideur: "Humain déclenche, humain publie",
    accorde: ["generate"],
    rayon: "Un kit JSON est produit sur appel explicite. Aucune sortie.",
    retour_arriere: "Jeter le kit.",
    prerequis: ["ANTHROPIC_API_KEY", "Sources d'or curées"],
    reglage: "POST /run, toutes sorties en dry-run.",
  },
  {
    id: "L3",
    nom: "Génération autonome, sorties nulles",
    decideur: "Machine génère, humain publie",
    accorde: [],
    rayon:
      "Le cron génère et valide des kits sans humain. Rien ne sort : YouTube et " +
      "Notion composent puis retournent le payload sans appel réseau.",
    retour_arriere: "Aucun besoin — aucune écriture externe.",
    prerequis: [
      "Validateur vert sur un lot pilote (hard rules + anti-dérive)",
      "Drive /WetSea partagé au service account",
    ],
    reglage: 'YT_PUBLISH="false", NOTION_PUBLISH="false" (défaut).',
  },
  {
    id: "L4",
    nom: "Publication réversible par git",
    decideur: "Machine publie sur une surface versionnée",
    accorde: ["commit_hugo"],
    rayon: "Commit de data/packaging/<id>.json dans le dépôt site -> build Hugo.",
    retour_arriere: "git revert du commit ; le site se reconstruit.",
    prerequis: [
      "GITHUB_TOKEN restreint à Contents:write sur wetandseaai-site",
      "L3 tenu sur au moins un cycle complet",
    ],
    reglage: "GITHUB_TOKEN présent (le commit Hugo n'a pas de flag dédié).",
  },
  {
    id: "L5",
    nom: "Brouillon Notion automatique",
    decideur: "Machine prépare, humain promeut",
    accorde: ["notion_draft"],
    rayon:
      "Page créée dans la base Chroniques au statut 📝 Brouillon. Rien n'est " +
      "public : le publisher WordPress ne prend que ce qu'un humain promeut.",
    retour_arriere: "Supprimer la page Notion (rien n'a atteint WordPress).",
    prerequis: ["NOTION_TOKEN", "Idempotence vérifiée (ID_Episode)"],
    reglage: 'NOTION_PUBLISH="true".',
  },
  {
    id: "L6",
    nom: "Write-back YouTube",
    decideur: "Machine écrit sur une surface publique",
    accorde: ["youtube_metadata"],
    rayon:
      "Titre, description et chapitres remplacés sur une vidéo en ligne. " +
      "Première action visible par le public sans relecture.",
    retour_arriere:
      "Restaurer le snippet capturé avant écriture (videos.list est déjà fait " +
      "pour la fusion — le Studio exige qu'il soit journalisé).",
    prerequis: [
      "YT_REFRESH_TOKEN (scope youtube.force-ssl, propriétaire de la chaîne)",
      "L5 tenu ; snapshot du snippet journalisé au ledger",
    ],
    reglage: 'YT_PUBLISH="true".',
  },
  {
    id: "L7",
    nom: "Batch autonome",
    decideur: "Machine, sur un lot borné",
    accorde: ["batch_fanout"],
    rayon:
      "N vidéos traitées en une commande (rattrapage rétroactif). L'erreur " +
      "n'est plus unitaire : elle est systémique.",
    retour_arriere:
      "Arrêt au premier échec de canon (fail-closed) + revert par lot via le ledger.",
    prerequis: [
      "Quota explicite (maxVideos) et budget de tokens",
      "L6 tenu sur au moins 3 vidéos unitaires",
    ],
    reglage: "POST /publish { kits: [...] } sous quota.",
  },
  {
    id: "L8",
    nom: "Boucle fermée",
    decideur: "Machine de bout en bout ; humain par exception",
    accorde: ["autonomous_discovery"],
    rayon:
      "Le cron découvre, génère et publie jusqu'au niveau armé, sans humain " +
      "dans la boucle par item. L'humain ne voit que les alertes.",
    retour_arriere:
      "Désarmement immédiat (retour L3) + revert des sorties du cycle via le ledger.",
    prerequis: [
      "Alerting sur échec ET sur silence (un cron muet est un cron mort)",
      "L7 tenu sans intervention sur un cycle complet",
    ],
    reglage: "[triggers] crons actif + niveau armé >= L4.",
  },
  {
    id: "L9",
    nom: "Auto-ajustement supervisé",
    decideur: "Machine propose, humain fusionne — toujours",
    accorde: ["self_modify"],
    rayon:
      "Le Studio propose des modifications de ses propres réglages et prompts " +
      "à partir des métriques observées.",
    retour_arriere: "Fermer la PR. Rien n'est appliqué sans fusion humaine.",
    prerequis: [
      "Métriques de qualité mesurées, pas seulement d'audience",
      "Interdiction d'auto-merge vérifiée par la protection de branche",
    ],
    reglage: "Proposition sous forme de PR draft. Jamais d'écriture directe.",
  },
];

export const LEVEL_ORDER: LevelId[] = LEVELS.map((l) => l.id);

/** Invariants non négociables : vrais à TOUS les niveaux, y compris L9. */
export const INVARIANTS = [
  "Le canon éditorial est vérifié par validateKit() — règles dures ET phrases interdites — avant toute sortie, quel que soit le niveau.",
  "Aucune écriture externe n'est possible sans le secret correspondant : un niveau armé sans secret reste inerte, il n'échoue pas silencieusement.",
  "Toute écriture externe est journalisée (ledger) avec de quoi revenir en arrière.",
  "Le Studio ne fusionne jamais lui-même une modification de son propre canon.",
  "Un niveau ne s'arme que si le niveau précédent a tenu — pas de saut de palier.",
];

export function getLevel(id: string): Level | undefined {
  return LEVELS.find((l) => l.id === id.toUpperCase());
}

export function levelIndex(id: LevelId): number {
  return LEVEL_ORDER.indexOf(id);
}

/** Toutes les actions accordées à ce niveau (cumul des niveaux inférieurs). */
export function grantedActions(id: LevelId): Action[] {
  const max = levelIndex(id);
  const out = new Set<Action>();
  for (const l of LEVELS.slice(0, max + 1)) for (const a of l.accorde) out.add(a);
  return [...out];
}

/** Le niveau minimal qui accorde cette action. */
export function minLevelFor(action: Action): LevelId | undefined {
  return LEVELS.find((l) => l.accorde.includes(action))?.id;
}
