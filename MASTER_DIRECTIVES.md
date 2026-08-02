# WST Observatory — Directives Consolidées

> **Auto-généré** par `scripts/build_master.sh` · Last update : 2026-08-02T16:52:37Z
> Source : https://github.com/FROMENT/wetsea-observatory
> **Ne pas éditer ce fichier manuellement** — il est régénéré à chaque push.

Ce document concatène toutes les directives du repo pour servir de **source
unique NotebookLM** (Pattern C). Tout LLM qui utilise ce document a accès à
l'intégralité de la charte WST en une seule source indexée.

---

## 📚 Table des matières

- **[`AGENTS.md`](#source-agents-md)** — WetSea Observatory — Agent Rules
- **[`README.md`](#source-readme-md)** — wetsea-observatory
- **[`START_HERE.md`](#source-start_here-md)** — WetSea Observatory — Point d'entrée
- **[`UX_AUDIT_REPORT.md`](#source-ux_audit_report-md)** — WetSea Observatory — Audit UX & Design System
- **[`assets/README.md`](#source-assets-readme-md)** — Assets Directory
- **[`brand/core.md`](#source-brand-core-md)** — WetSea Observatory — Brand Core
- **[`brand/editorial_voice.md`](#source-brand-editorial_voice-md)** — WetSea Observatory — Editorial Voice
- **[`brand/forbidden.md`](#source-brand-forbidden-md)** — WetSea Observatory — Forbidden Aesthetics
- **[`brand/logo_and_marks.md`](#source-brand-logo_and_marks-md)** — WetSea Observatory — Logo and Marks Governance
- **[`brand/mascot.md`](#source-brand-mascot-md)** — WetSea Observatory — Mascot System
- **[`brand/visual_references.md`](#source-brand-visual_references-md)** — WetSea Observatory — Visual References Matrix
- **[`brand/wetseatech_program.md`](#source-brand-wetseatech_program-md)** — Ligne cyber — Program Adapter
- **[`brand_guidelines.md`](#source-brand_guidelines-md)** — Wet & Sea AI — Brand Guidelines
- **[`branding/composition_rules.md`](#source-branding-composition_rules-md)** — Cinematic Composition Rules
- **[`branding/forbidden_styles.md`](#source-branding-forbidden_styles-md)** — Forbidden Aesthetics
- **[`branding/palettes.md`](#source-branding-palettes-md)** — Palettes
- **[`channels/etsy.md`](#source-channels-etsy-md)** — WetSea Observatory — Canal Etsy
- **[`channels/podcast.md`](#source-channels-podcast-md)** — WetSea Observatory — Canal Podcast
- **[`channels/youtube.md`](#source-channels-youtube-md)** — WetSea Observatory — Canal YouTube
- **[`channels/youtube_titles.md`](#source-channels-youtube_titles-md)** — WetSea Observatory — Règles de Titres YouTube
- **[`docs/CLAC_FRAMEWORK.md`](#source-docs-clac_framework-md)** — Compatibility Reference — CLAC Framework
- **[`docs/WST_REPO_AUDIT_PROMPT.md`](#source-docs-wst_repo_audit_prompt-md)** — WST Repository Audit & Completion Prompt
- **[`docs/context.md`](#source-docs-context-md)** — Context
- **[`docs/editorial_direction.md`](#source-docs-editorial_direction-md)** — Editorial Direction
- **[`docs/etsy_branding.md`](#source-docs-etsy_branding-md)** — Etsy Branding Direction
- **[`docs/illustration_prompts.md`](#source-docs-illustration_prompts-md)** — Illustration Prompts
- **[`docs/mascot_systems.md`](#source-docs-mascot_systems-md)** — Mascot Systems
- **[`docs/podcast_cover_prompts.md`](#source-docs-podcast_cover_prompts-md)** — Podcast Cover Prompts
- **[`docs/system_prompts.md`](#source-docs-system_prompts-md)** — System Prompt Library
- **[`docs/typography.md`](#source-docs-typography-md)** — Typography
- **[`docs/visual_identity.md`](#source-docs-visual_identity-md)** — Visual Identity System
- **[`examples/MLpromptsample.md`](#source-examples-mlpromptsample-md)** — examples/MLpromptsample.md
- **[`examples/prompt_examples.md`](#source-examples-prompt_examples-md)** — examples/prompt_examples.md
- **[`frameworks/clac.md`](#source-frameworks-clac-md)** — WetSea Observatory — CLAC Hook Framework
- **[`identity/brand_core.md`](#source-identity-brand_core-md)** — Compatibility Reference — Brand Core
- **[`identity/forbidden.md`](#source-identity-forbidden-md)** — Compatibility Reference — Forbidden Aesthetics
- **[`identity/mascot.md`](#source-identity-mascot-md)** — Compatibility Reference — Mascot System
- **[`knowledge.md`](#source-knowledge-md)** — Wet & Sea AI — Knowledge Base
- **[`maintenance/migration_map.md`](#source-maintenance-migration_map-md)** — WetSea Observatory — Migration Map
- **[`notebooklm/README.md`](#source-notebooklm-readme-md)** — NotebookLM Brand Kit
- **[`notebooklm/WetSeaTech_Graphic_Identity_NotebookLM.md`](#source-notebooklm-wetseatech_graphic_identity_notebooklm-md)** — Compatibility Reference — WetSeaTech Visual Adapter
- **[`notebooklm/clap.md`](#source-notebooklm-clap-md)** — Compatibility Reference — CLAC Framework
- **[`notebooklm/directives.md`](#source-notebooklm-directives-md)** — WetSeaTech — Complete NotebookLM Master Directives
- **[`prompts/mascot_prompt.md`](#source-prompts-mascot_prompt-md)** — Mascot System Prompt
- **[`prompts/master_prompt.md`](#source-prompts-master_prompt-md)** — Wet & Sea AI — Prompt Maître
- **[`prompts/negative_prompt_standard.md`](#source-prompts-negative_prompt_standard-md)** — WetSea Observatory — Negative Prompt Standard
- **[`prompts/script_template.md`](#source-prompts-script_template-md)** — WetSea Observatory — Template de Script Vidéo
- **[`prompts/youtube_thumbnail_prompt.md`](#source-prompts-youtube_thumbnail_prompt-md)** — WetSea Observatory — YouTube Thumbnail Prompt
- **[`references/visual_references.md`](#source-references-visual_references-md)** — Compatibility Reference — Visual References
- **[`system_prompt.md`](#source-system_prompt-md)** — Wet & Sea AI — System Prompt
- **[`youtube/README.md`](#source-youtube-readme-md)** — YouTube Brand Kit
- **[`youtube/thumbnail_rules.md`](#source-youtube-thumbnail_rules-md)** — YouTube Thumbnail Rules

---

<a id="source-agents-md"></a>

## 📄 SOURCE: `AGENTS.md`

# WetSea Observatory — Agent Rules

WetSea Observatory is a premium editorial visual identity system focused on:
- cybersecurity,
- cloud architecture,
- AI agents and autonomous systems,
- technology foresight,
- invisible infrastructures,
- contemporary technical systems.

Occasional subjects: submarine cables, satellites.
Complementary illustration only, never subject: sailing boats, paragliding,
diving, vessel silhouettes, sea and depth.

The aesthetic must feel:
- calm,
- cinematic,
- restrained,
- intelligent,
- editorial,
- technically sophisticated,
- timeless.

Visual references:
- Japanese editorial design,
- marine cartography,
- scientific instrumentation,
- radar systems,
- documentary photography,
- modernist architecture,
- mature manga minimalism.

Always prioritize:
- negative space,
- cinematic composition,
- subtle technical details,
- premium editorial balance,
- calm visual systems.

The project should feel like:

> “A technical editorial observatory studying the invisible systems of the modern world.”

NEVER generate:
→ See `brand/forbidden.md` for the complete and maintained list.
Summary: no cyberpunk, no RGB neon, no gaming, no SaaS startup, no crypto/web3, no kawaii.

Primary palette:
→ Canonical hex values in `design_tokens.yaml` section `color.primary`.
Summary: deep navy (#0A1A2B) · graphite (#2A2F36) · muted cyan (#5E8FA3) · off-white (#F2F1EC).

## Working Protocol

1. Read `START_HERE.md` first — it routes you to the right files for your task.
2. Load `design_tokens.yaml` for palette, typography and spacing values.
3. Load `brand/core.md` for positioning and visual DNA.
4. Load `brand/editorial_voice.md` for textual or narrative work.
5. Load the relevant channel file (`channels/youtube.md`, `channels/etsy.md`, `channels/podcast.md`).
6. For cyber/tech/security work, load `brand/wetseatech_program.md`.
7. Preserve coherence across prompts, guidelines, and examples.
8. Favor concise precision over visual excess.
9. Keep all outputs production-ready and reusable by humans and agents.
10. In case of conflict between files: `design_tokens.yaml` > `brand/core.md` > channel files > other files.

<!-- claude-md-opus5:begin v2 -->
## Règles opérationnelles Opus 5

Source : doc officielle « Prompting Claude Opus 5 » (consultée le 2026-08-02).
Bloc généré — ne pas éditer à la main hors de `tools/apply_opus5.py`.

### Style de réponse
- Réponses ciblées, brèves et concises. Avertissements et réserves courts ;
  l'essentiel du texte porte sur la réponse.
- Pour une explication, donner une synthèse de haut niveau sauf demande
  explicite d'approfondissement.
- Ajuster la longueur des livrables écrits au besoin réel : couvrir le fond,
  sans sections de remplissage, résumés redondants ni boilerplate.
- Le paramètre `effort` règle la quantité de réflexion, pas la longueur du texte
  visible : baisser l'effort ne raccourcit pas fiablement la réponse.

### Périmètre
- Livrer ce qui est demandé, au périmètre demandé. Trancher seul les arbitrages
  de routine ; ne revenir vers l'utilisateur que si deux lectures de la demande
  conduisent à des travaux matériellement différents.
- Si la demande paraît erronée ou qu'une meilleure approche existe, le dire en
  une phrase puis exécuter la demande telle quelle — sans la rétrécir,
  l'élargir ni la transformer en silence.
- Terminer la tâche entière et s'arrêter avant toute action manifestement hors
  périmètre.

### Restitution de l'avancement
- Avant le premier appel d'outil, annoncer en une phrase ce qui va être fait.
  Pendant le travail, ne signaler qu'un résultat important ou un changement de
  direction.
- Commencer le message final par le résultat ; les détails ensuite.
- Ne corriger une affirmation antérieure que si l'erreur change le code, les
  conclusions ou les décisions. Sinon, corriger et continuer sans le signaler.

### Délégation et effort
- Ne déléguer à un sous-agent que pour un travail large, réellement indépendant
  et parallélisable (investigation multi-fichiers). Ne pas déléguer ce qui tient
  en quelques appels d'outils. Ne jamais utiliser un sous-agent pour vérifier
  son propre travail. Un seul sous-agent s'il suffit.
- Effort par défaut `high`. Utiliser `low` et `medium` largement comme levier
  principal de coût et de latence partout où la qualité tient ; `xhigh` réservé
  au code et aux boucles agentiques exigeants.
- Les valeurs d'effort héritées d'un modèle antérieur ne sont pas transposables :
  rejouer un balayage d'effort sur ses propres évaluations.
- La réflexion est activée par défaut et ne peut être désactivée qu'à effort
  `high` ou moins. Préférer garder la réflexion activée à `low` plutôt que la
  désactiver : à coût comparable, le résultat est meilleur.

### À proscrire
- Pas d'échafaudage de vérification (« ajoute une étape de vérification finale »,
  « fais relire par un sous-agent », « revérifie avant de répondre ») : le modèle
  s'auto-corrige, ces consignes consomment des tokens sans gain.
- Ne pas demander au modèle de ne pas réfléchir.
- Ne pas nommer de balises XML internes ; écrire : « N'inclus pas de balises XML
  internes ou système dans ta réponse. »
- Revalider les contournements de vision réglés pour un modèle antérieur : ils
  sont souvent devenus inutiles.
<!-- claude-md-opus5:end -->

---

<a id="source-readme-md"></a>

## 📄 SOURCE: `README.md`

# wetsea-observatory
Editorial visual identity system for a technical channel covering cybersecurity, cloud architecture, AI agents, technology foresight. Submarine cables and satellites appear as occasional subjects; marine and aerial imagery — sailing boats, paragliding, diving, vessel silhouettes — serves as complementary illustration, never as subject matter. Cinematic minimalist design.

---

<a id="source-start_here-md"></a>

## 📄 SOURCE: `START_HERE.md`

# WetSea Observatory — Point d'entrée

> Ce fichier est le **seul point d'entrée** du système. Commence toujours par ici.  
> En cas de conflit entre deux fichiers, ce fichier et `design_tokens.yaml` ont priorité.

---

## Tu es un agent IA ?

**Si tu es Claude, NotebookLM, Midjourney ou tout autre agent :**

1. Lis `design_tokens.yaml` — source de vérité pour palette, typographie, espacements
2. Lis `brand/core.md` — positionnement et ADN visuel
3. Lis `brand/editorial_voice.md` pour les productions textuelles
4. Consulte le fichier de ton canal ci-dessous

**Hiérarchie de priorité en cas de conflit :**
```
design_tokens.yaml  >  brand/core.md  >  fichiers de canal  >  autres fichiers
```

---

## Par canal de production

| Je génère... | Lis en priorité |
|---|---|
| Miniature YouTube | `channels/youtube.md` + `prompts/youtube_thumbnail_prompt.md` |
| Visuel Etsy / affiche | `channels/etsy.md` + `prompts/master_prompt.md` |
| Cover podcast | `channels/podcast.md` |
| Script / narration vidéo | `notebooklm/directives.md` |
| Mascotte | `brand/mascot.md` (voir `design_tokens.yaml` section mascots) |
| Contenu cyber / cloud / agents IA | `brand/wetseatech_program.md` |
| Hook CLAC | `frameworks/clac.md` |
| Prompt d'illustration général | `prompts/master_prompt.md` |

> `design_tokens.yaml` est l'unique source de palette. `#5E8FA3` est le seul accent
> cyan. `brand/wetseatech_program.md` adapte la densité technique, pas les couleurs.

---

## Rappel des 5 règles non-négociables

1. **Espace négatif** — minimum 25% dans toute composition
2. **Cyan discret** — `#5E8FA3` uniquement, jamais saturé, jamais dominant
3. **Pas de centrage statique** — compositions asymétriques, ancrage aux tiers
4. **Maximum 2 familles de fontes** par composition
5. **Interdit absolu** → `brand/forbidden.md`

---

## Structure du repo

```
design_tokens.yaml          Source de vérité technique (palette, typo, spacings)
START_HERE.md               Ce fichier
MASTER_DIRECTIVES.md        Agrégat auto-généré (read-only, ne pas éditer)
AGENTS.md                   Règles pour agents IA
brand/
  core.md                   Positionnement, ADN et applications
  editorial_voice.md        Ton et discipline éditoriale
  forbidden.md              Liste unique et maintenue des interdits
  mascot.md                 Spécification complète des mascottes
  wetseatech_program.md     Adaptateur cyber/tech/security
frameworks/
  clac.md                   Framework canonique de hook
channels/
  youtube.md                Règles miniatures et format vidéo
  etsy.md                   Règles produits Etsy
  podcast.md                Règles covers podcast
prompts/                    Prompts opérationnels (IA image/texte)
notebooklm/                 Directives NotebookLM
references/                 Références visuelles
assets/                     Gouvernance des assets ; approbation à documenter
maintenance/                Migration, audits et historique opérationnel
```

---

## Nommage de la marque

<!-- Source canonique : design_tokens.yaml, bloc canonical_names. Ne pas dupliquer. -->

| Contexte | Nom à utiliser |
|---|---|
| Tout output public, toutes langues | **Wet & Sea AI** |
| Domaine canonique | wetandseaai.fr |
| Design system (interne, jamais affiché) | WetSea Observatory |
| Boutique Etsy (marque produit endossée) | WetSeaTech |
| Couche technique interne (dépôts, `wst_`, wst-tech.org) | WST |
| Proscrits | ~~Wet & Sea & IA~~ · ~~WetAndSeaAI~~ · ~~WST NETWORK~~ · ~~WST Labs~~ |

---

*Dernière mise à jour : 2026-08-02*

---

<a id="source-ux_audit_report-md"></a>

## 📄 SOURCE: `UX_AUDIT_REPORT.md`

# WetSea Observatory — Audit UX & Design System
**Audit complet · Mai 2026 · Version 2.0** — *Extension Prompting & Chaîne YouTube*

> Ce document est un audit systémique du repository `wetsea-observatory` analysé en tant que **système documentaire de brand identity** utilisé comme source de vérité par des agents IA (Claude, NotebookLM, Midjourney) et par son propriétaire. L'analyse applique les principes UX à la structure, la cohérence et l'efficacité opérationnelle du système de documentation lui-même.

---

## RECADRAGE PRÉLIMINAIRE

Ce repository n'est pas une application SaaS avec des composants UI. C'est un **système éditorial de brand identity** dont les "utilisateurs" sont :

1. **Pascal** — propriétaire, qui navigue et édite les fichiers manuellement
2. **Agents IA** (Claude, NotebookLM, Midjourney) — qui consomment les fichiers comme contexte de génération
3. **Le pipeline automatisé** — `build_master.sh` qui agrège les sources en `MASTER_DIRECTIVES.md`

Les principes UX s'appliquent donc à : navigation documentaire, cohérence des spécifications, charge cognitive de lecture, découvrabilité, et fiabilité comme source de vérité.

---

## 1. DIAGNOSTIC UX

### 1.1 Architecture d'information

**Structure actuelle :**
```
/
├── AGENTS.md           ← Agent rules
├── brand_guidelines.md ← Guidelines marque
├── knowledge.md        ← Base de connaissances
├── system_prompt.md    ← Prompt système
├── MASTER_DIRECTIVES.md ← Auto-généré (source NotebookLM)
├── branding/
│   ├── composition_rules.md
│   ├── forbidden_styles.md
│   └── palettes.md        ← PALETTE A
├── docs/
│   ├── context.md
│   ├── editorial_direction.md
│   ├── etsy_branding.md
│   ├── illustration_prompts.md
│   ├── mascot_systems.md  ← MASCOT SPEC 1/3
│   ├── podcast_cover_prompts.md
│   ├── system_prompts.md
│   ├── typography.md      ← TYPOGRAPHIE (incomplète)
│   └── visual_identity.md
├── examples/
│   ├── MLpromptsample.md
│   └── prompt_examples.md ← PALETTE C (3e version)
├── notebooklm/
│   ├── directives.md
│   └── WetSeaTech_Graphic_Identity_NotebookLM.md ← PALETTE B
├── prompts/
│   ├── mascot_prompt.md   ← MASCOT SPEC 3/3
│   ├── master_prompt.md
│   └── youtube_thumbnail_prompt.md
├── references/
│   └── visual_references.md
├── youtube/
│   ├── README.md
│   └── thumbnail_rules.md
└── assets/             ← VIDE (seulement README)
```

**Problème central :** Il n'existe pas de point d'entrée unique et hiérarchisé. Six fichiers prétendent chacun être "la référence principale" : `AGENTS.md`, `system_prompt.md`, `brand_guidelines.md`, `knowledge.md`, `MASTER_DIRECTIVES.md`, et `notebooklm/directives.md`. Un agent IA qui lit les deux premiers reçoit déjà deux structures de règles légèrement différentes.

---

## 2. PROBLÈMES CRITIQUES

### P-01 · CRITIQUE — Fragmentation de la palette couleur (3 définitions conflictuelles)

C'est le problème le plus sévère du système. La même couleur "cyan" est définie avec trois valeurs hex distinctes dans trois fichiers différents, dont l'une contredit directement la règle "no neon".

**Preuve — comparaison directe :**

| Token | `branding/palettes.md` | `notebooklm/WetSeaTech_Graphic_Identity_NotebookLM.md` | `examples/prompt_examples.md` |
|---|---|---|---|
| Deep Navy | `#0A1A2B` | `#0A1628` | `#07141D` |
| Cyan | `#5E8FA3` | **`#00D4FF`** ⚠️ | `#6CB7C7` |
| Off-White | `#F2F1EC` | `#E6F1FF` | `#ECE8E1` |
| Graphite | `#2A2F36` | — | `#1A1F24` |

**Impact :** `#00D4FF` est un cyan saturé proche du neon pur. Il contredit directement la règle "no neon / no aggressive neon" présente dans tous les autres fichiers. Un agent IA qui lit `WetSeaTech_Graphic_Identity_NotebookLM.md` en priorité génèrera des visuels cyan criards — précisément l'esthétique que le système cherche à éviter.

### P-02 · CRITIQUE — Typographie sans noms de fontes dans la spec principale

`docs/typography.md` spécifie "Primary Serif" et "Primary Sans" **sans jamais nommer les fontes**. Les noms n'apparaissent que dans `examples/prompt_examples.md` (Helvetica Now, IBM Plex Sans, Space Grotesk, Suisse Int'l) — mais uniquement comme suggestions pour prompts d'images, pas comme spec typographique canonique.

**Conséquence :** un agent demandant "quelle fonte utiliser pour les titres YouTube ?" ne trouve pas de réponse définitive dans les fichiers de spec. Il doit inférer ou deviner.

### P-03 · MAJEUR — Point d'entrée ambigu (6 fichiers "maîtres")

Aucun fichier n'indique clairement lequel consulter en premier. `AGENTS.md` dit "Read AGENTS.md and all markdown context files before editing." — mais ne précise pas l'ordre ni la hiérarchie de priorité en cas de conflit.

**Liste des fichiers se présentant comme "la référence" :**
- `AGENTS.md` (Working Protocol)
- `system_prompt.md` (System Prompt)
- `brand_guidelines.md` (Brand Guidelines)
- `knowledge.md` (Knowledge Base)
- `MASTER_DIRECTIVES.md` (Directives Consolidées — auto-généré)
- `notebooklm/directives.md` (Master Directives NotebookLM)

### P-04 · MAJEUR — Divergence de personnalité de marque entre canaux

Les documents présentent deux tonalités significativement différentes :

**Tonalité A** (docs principaux) : *"calme, contemplatif, maritime, documentaire, intemporel, lumineux discret"*

**Tonalité B** (`WetSeaTech_Graphic_Identity_NotebookLM.md`) : *"dark, precise, technical, slightly tense, not corporate-polished, cyber-infrastructure"*

Ce fichier crée un sous-brand "WetSeaTech" avec une identité visuelle distincte (fonds plus sombres, cyan plus fort, focus cyber/security) qui diverge de l'identité principale WetSea Observatory. Si un agent charge ce fichier sans les autres, il produit une marque différente.

### P-05 · MAJEUR — Spec mascotte fragmentée en 3 fichiers partiellement contradictoires

| Aspect | `knowledge.md` | `docs/mascot_systems.md` | `prompts/mascot_prompt.md` |
|---|---|---|---|
| Archétypes | pieuvre, raie manta, oiseau marin, navigateur | beacon, buoy, node, courier vessel | beacon, buoy, vessel silhouette, signal node, seabird glyph |
| Style | silencieux, intelligent, contemplatif | statique, géométrique, print-ready | éditorial symbolique, non cartoon |
| Contraintes | jamais cartoon, expressif | lisible en monochrome | fonctionne en duotone et palette principale |

Aucun des trois ne cite les deux autres. Un agent qui lit `docs/mascot_systems.md` seul ne sait pas que `knowledge.md` préfère des créatures hybrides "infrastructure + vivant" non mentionnées dans la spec système.

### P-06 · MODÉRÉ — Listes "interdit" dupliquées dans 10+ fichiers

La liste "no cyberpunk, no neon, no gaming, no crypto/web3, no kawaii" apparaît — avec des variantes — dans : `AGENTS.md`, `brand_guidelines.md`, `knowledge.md`, `branding/forbidden_styles.md`, `system_prompt.md`, `notebooklm/directives.md`, `WetSeaTech_Graphic_Identity_NotebookLM.md`, `examples/prompt_examples.md`, `prompts/master_prompt.md`, `prompts/youtube_thumbnail_prompt.md`.

**Impact :** toute modification de cette liste (ajout d'un style à prohiber) doit être appliquée manuellement dans 10 endroits. La dette de maintenance est élevée et le risque d'incohérence croît à chaque évolution.

### P-07 · MODÉRÉ — Dossier `assets/` vide

Le système spécifie une identité visuelle complète mais ne contient aucun asset materiel : pas de logo, pas de fichier couleur, pas de texture, pas d'icône. Les "assets" sont entièrement remplacés par des prompts de génération IA. Ceci crée une dépendance totale à la qualité des prompts et à la capacité de l'IA à respecter la spec — sans asset de référence pour calibration ou comparaison.

### P-08 · MODÉRÉ — `docs/system_prompts.md` est un stub vide de substance

Ce fichier fait 9 lignes et pointe uniquement vers d'autres fichiers sans ajouter de valeur. Il devrait soit être supprimé, soit absorber une logique d'orchestration réelle.

### P-09 · MINEUR — Naming inconsistency non résolue

La règle est documentée ("WetSea Observatory est le nom canonique, WetAndSeaAI/WetSeaTech sont des labels programme") mais appliquée de façon incohérente dans les titres de fichiers et les H1 des documents eux-mêmes :

- `brand_guidelines.md` commence par `# WetAndSeaAI / WetSeaTech — Brand Guidelines`
- `system_prompt.md` commence par `# WetAndSeaAI / WetSeaTech — System Prompt`
- `knowledge.md` utilise "WetAndSeaAI / WetSeaTech" comme titre principal de section

La règle est énoncée mais pas appliquée dans les fichiers qui la définissent.

### P-10 · MINEUR — Absence de spec d'espacement/grille pour formats digitaux

`branding/composition_rules.md` spécifie une grille 12 colonnes et 25–40% d'espace négatif, mais uniquement pour les "key visuals" (affiches, thumbnails). Il n'existe aucune spec pour les interfaces digitales ou les publications web (blog éditorial mentionné dans les applications).

---

## 3. OPPORTUNITÉS

**O-01 — Design Tokens YAML/JSON comme source de vérité unique**
Exporter la palette, la typographie et les règles d'espacement en un fichier `tokens.yaml` parseable par des agents et des outils de design automatiquement. Éliminer la duplication par référence.

**O-02 — Architecture par canal avec héritage**
Créer un modèle de spec "base → override par canal" : `base_identity.md` définit les invariants, puis `channels/youtube.md`, `channels/etsy.md`, `channels/podcast.md` héritent et overrident uniquement ce qui change. Plus maintenable, plus cohérent.

**O-03 — Checklist agent auto-validable**
La section "Anti-drift checklist" de `WetSeaTech_Graphic_Identity_NotebookLM.md` est excellente mais isolée dans un seul fichier. La formaliser comme outil de validation universel applicable à tout output.

**O-04 — `START_HERE.md` avec arbre de décision**
Un fichier d'entrée unique qui oriente : "Tu génères une miniature YouTube ? → lis X. Tu génères un visuel Etsy ? → lis Y. Tu es un agent Claude ? → lis Z en priorité."

**O-05 — Référence visuelle matérialisée**
Créer un `references/mood_board.md` avec des URLs d'images de référence réelles (publications NHK, Monocle, National Geographic cartography) — actuellement, `references/visual_references.md` ne contient que des descriptions textuelles. Les agents visuels bénéficient de références concrètes.

---

## 4. QUICK WINS (< 1 jour)

### QW-01 — Consolider la palette en une source unique ⚡
**Action :** Choisir un jeu de valeurs hex définitif (recommandation ci-dessous), mettre à jour `branding/palettes.md`, supprimer les définitions dans `examples/prompt_examples.md` et aligner `WetSeaTech_Graphic_Identity_NotebookLM.md`.

**Impact :** Élimine la source principale d'incohérence visuelle entre outputs.

### QW-02 — Nommer les fontes dans `docs/typography.md` ⚡
**Action :** Ajouter les noms de fontes recommandées directement dans `docs/typography.md` (voir spec proposée ci-dessous).

**Impact :** Tout agent lisant la spec typographique aura une réponse définitive.

### QW-03 — Créer `START_HERE.md` ⚡
**Action :** Créer un fichier d'entrée de 30 lignes maximum avec l'arbre de décision.

**Impact :** Réduit à zéro l'ambiguïté sur quel fichier lire en premier.

### QW-04 — Supprimer `docs/system_prompts.md` ⚡
**Action :** Supprimer ce fichier stub et intégrer son contenu (3 lignes utiles) dans `START_HERE.md`.

**Impact :** Réduit le bruit sans perte d'information.

### QW-05 — Corriger les titres H1 pour respecter la naming rule ⚡
**Action :** Renommer les H1 de `brand_guidelines.md` et `system_prompt.md` pour utiliser "WetSea Observatory" comme préfixe.

---

## 5. PLAN D'AMÉLIORATION

### Phase 1 — Palette & Tokens (Semaine 1)

Créer `design_tokens.yaml` comme source de vérité machine-readable. Mettre à jour tous les fichiers markdown pour référencer ce fichier plutôt que répéter les valeurs hex. Ajouter un commentaire "Source : `design_tokens.yaml`" dans chaque fichier qui cite des couleurs.

### Phase 2 — Architecture documentaire (Semaine 1–2)

Restructurer le repo selon un modèle hiérarchique :
```
/
├── START_HERE.md               ← NOUVEAU point d'entrée
├── design_tokens.yaml          ← NOUVEAU source de vérité technique
├── MASTER_DIRECTIVES.md        ← conservé (auto-généré)
├── identity/
│   ├── brand_core.md           ← fusion knowledge.md + brand_guidelines.md + visual_identity.md
│   ├── forbidden.md            ← unique source (remplace 10 listes dupliquées)
│   └── mascot.md               ← fusion des 3 specs mascotte
├── channels/
│   ├── youtube.md              ← fusion youtube/README + thumbnail_rules
│   ├── etsy.md                 ← docs/etsy_branding.md enrichi
│   └── podcast.md              ← docs/podcast_cover_prompts.md enrichi
├── prompts/                    ← conservé (opérationnel)
├── notebooklm/                 ← conservé (opérationnel)
└── assets/                     ← à alimenter
```

### Phase 3 — Résolution du dual-brand (< 2 semaines)

Clarifier explicitement la relation WetSea Observatory / WetSeaTech :
- Option A : WetSeaTech devient une "ligne éditoriale cyber/security" avec son propre fichier d'override (`channels/wetseatech_override.md`)
- Option B : Les deux marques sont unifiées, `WetSeaTech_Graphic_Identity_NotebookLM.md` est aligné sur la palette principale

Cette décision est stratégique et doit être prise par le propriétaire.

### Phase 4 — Assets réels (Continu)

Définir un workflow pour stocker les outputs validés comme assets de référence :
- 1 miniature YouTube "exemplaire" par thème
- 1 affiche Etsy "exemplaire" par famille de produit
- Ces visuels deviennent les références visuelles concrètes pour calibrer les futurs prompts

---

## 6. AVANT / APRÈS — EXEMPLES CONCRETS

### Exemple 1 — Palette (avant vs après)

**AVANT** — `examples/prompt_examples.md` ligne 56 :
```
- deep navy (#07141D),
- graphite (#1A1F24),
- muted cyan (#6CB7C7),
```

**APRÈS** — Référence unifiée :
```
See canonical palette in design_tokens.yaml.
Primary: #0A1A2B (deep-navy) · #2A2F36 (graphite) · #5E8FA3 (muted-cyan)
```

---

### Exemple 2 — Typography (avant vs après)

**AVANT** — `docs/typography.md` :
```markdown
## Pairing Strategy
- Primary Serif: long-form editorial authority.
- Primary Sans: data labels, interfaces, metadata.
```
*(aucun nom de fonte)*

**APRÈS** — `docs/typography.md` (enrichi) :
```markdown
## Font Stack

### Primary Serif — Editorial Authority
- **Recommended**: Libre Baskerville, Playfair Display, or EB Garamond
- **Use**: Long-form body text, chapter titles, editorial captions
- **AI prompts**: specify "elegant serif editorial, Playfair-style"

### Primary Sans — Technical Precision
- **Recommended**: IBM Plex Sans (open-source, preferred) or Space Grotesk
- **Use**: UI labels, metadata, data annotations, thumbnail text
- **AI prompts**: specify "IBM Plex Sans, geometric sans, condensed technical"

### Monospace — Coordinates & Technical Data
- **Recommended**: IBM Plex Mono or Space Mono
- **Use**: GPS coordinates, timestamps, technical annotations only

## Hierarchy
- H1: Serif, weight 600–700, tight tracking (–0.02em)
- H2/H3: Sans, weight 500, standard tracking
- Body: Serif, weight 400, 55–75 characters per line
- Metadata/labels: Sans or Mono, weight 400, uppercase allowed

## Rules
- Avoid novelty, futuristic, or gaming fonts.
- Keep line length 55–75 characters for body text.
- Do not use more than 2 font families per composition.
```

---

### Exemple 3 — Listes interdites (avant vs après)

**AVANT** — Répétition dans `system_prompt.md` :
```markdown
## Forbidden Directions
- cyberpunk neon / RGB gaming,
- startup SaaS visuals,
- generic AI-art look,
- crypto/web3 cues,
- kawaii or childish mascots,
- clickbait visual language.
```
*(version identique dans 9 autres fichiers)*

**APRÈS** — Référence unique dans chaque fichier concerné :
```markdown
## Forbidden Directions
→ See `identity/forbidden.md` for the complete and maintained list.
Critical: no neon/RGB, no gaming, no kawaii, no crypto/web3, no SaaS gloss.
```

---

### Exemple 4 — Entrée de repo (avant vs après)

**AVANT** — `README.md` (2 lignes) :
```markdown
# wetsea-observatory
Editorial visual identity system exploring oceans, invisible infrastructures,
maritime networks, submarine cables, ports and contemporary technical systems
through cinematic minimalist design.
```
*(aucune orientation sur comment naviguer le repo)*

**APRÈS** — `START_HERE.md` (voir fichier créé dans ce rapport)

---

## 7. PROPOSITION DESIGN SYSTEM

### 7.1 Palette canonique unifiée — recommandation

Basée sur l'analyse des trois versions existantes, voici la palette de référence recommandée. Le critère de sélection : cohérence avec le principe "muted cyan" (rejet du `#00D4FF` qui viole la règle "no neon") et distinction suffisante entre les tons.

| Token | Hex | Usage | Contraste sur Deep Navy |
|---|---|---|---|
| `deep-navy` | `#0A1A2B` | Fond principal, champs océaniques | — |
| `graphite` | `#2A2F36` | Panneaux secondaires, layers de texte | 1.4:1 |
| `dark-ocean-green` | `#1D3A3A` | Zones de profondeur secondaires | 1.2:1 |
| `muted-cyan` | `#5E8FA3` | Highlights de données, routes, accents | 3.1:1 ⚠️ (AA large only) |
| `off-white` | `#F2F1EC` | Texte principal sur fond sombre | 13.8:1 ✅ AAA |
| `mineral-sand` | `#C9BDA8` | Légendes, accents discrets | 7.2:1 ✅ AA |

**Notes contraste :**
- `muted-cyan` sur `deep-navy` = 3.1:1 → passe AA pour texte large (18pt+), mais pas pour texte courant → à utiliser uniquement pour éléments graphiques, routes et titres larges, jamais pour corps de texte
- Pour les interfaces, utiliser `off-white` (`#F2F1EC`) comme couleur de texte principale

**Extension pour contexte cyber/WetSeaTech uniquement :**
| Token | Hex | Usage |
|---|---|---|
| `near-black` | `#07101A` | Fonds haute densité (vidéo, cyber) |
| `signal-blue` | `#1E3A5F` | Panneaux secondaires cyber |
| `cold-grey` | `#94A3B8` | Texte secondaire sur fond sombre |

### 7.2 Espacement & Grille

```yaml
grid:
  columns: 12
  gutter: 24px  # desktop editorial
  margin: 48px  # desktop editorial
  
negative_space:
  minimum: 25%
  target: 35%
  
composition:
  thirds_anchor: true
  centered_layouts: forbidden
  
print_safe_margin: 5mm  # pour affiches et produits Etsy
```

### 7.3 Structure recommandée pour `design_tokens.yaml`

```yaml
# WetSea Observatory — Design Tokens
# Source of truth for all color, typography and spacing specifications
# Last updated: 2026-05-22
# DO NOT override these values in individual files — edit here only

version: "2.0"
brand: "WetSea Observatory"

color:
  primary:
    deep-navy: "#0A1A2B"
    graphite: "#2A2F36"
    dark-ocean-green: "#1D3A3A"
    muted-cyan: "#5E8FA3"
    off-white: "#F2F1EC"
    mineral-sand: "#C9BDA8"
  
  extension_wetseatech:
    near-black: "#07101A"
    signal-blue: "#1E3A5F"
    cold-grey: "#94A3B8"
    # Note: use muted-cyan above, NOT #00D4FF — violates no-neon rule
  
  forbidden:
    - "#00D4FF"  # neon cyan — prohibited in all outputs
    - note: "Avoid any fully saturated primary colors"

typography:
  serif:
    recommended: "Playfair Display"
    fallback: ["Libre Baskerville", "EB Garamond", "Georgia"]
    use: "long-form editorial, chapter titles"
    ai_prompt_keyword: "Playfair Display editorial serif"
  
  sans:
    recommended: "IBM Plex Sans"
    fallback: ["Space Grotesk", "Inter", "Helvetica Now"]
    use: "UI labels, metadata, thumbnail text, annotations"
    ai_prompt_keyword: "IBM Plex Sans geometric sans"
  
  mono:
    recommended: "IBM Plex Mono"
    fallback: ["Space Mono", "JetBrains Mono"]
    use: "coordinates, timestamps, technical data only"

spacing:
  negative_space_min: "25%"
  negative_space_target: "35%"
  grid_columns: 12
  gutter_desktop: "24px"
  margin_desktop: "48px"
```

---

## 8. RÉSUMÉ EXÉCUTIF

| # | Problème | Sévérité | Effort | Impact |
|---|---|---|---|---|
| P-01 | Palette fragmentée (3 définitions hex conflictuelles) | 🔴 Critique | 2h | Très élevé |
| P-02 | Typographie sans noms de fontes | 🔴 Critique | 1h | Élevé |
| P-03 | 6 fichiers "maîtres" sans hiérarchie | 🟠 Majeur | 3h | Élevé |
| P-04 | Divergence de personnalité WetSea vs WetSeaTech | 🟠 Majeur | 4h | Élevé |
| P-05 | Spec mascotte fragmentée (3 fichiers) | 🟠 Majeur | 2h | Moyen |
| P-06 | Listes "interdit" dupliquées dans 10+ fichiers | 🟡 Modéré | 4h | Moyen |
| P-07 | Assets inexistants (dossier vide) | 🟡 Modéré | Continu | Élevé (long terme) |
| P-08 | `docs/system_prompts.md` stub inutile | 🟢 Mineur | 15min | Faible |
| P-09 | Naming rule violée dans les fichiers qui la définissent | 🟢 Mineur | 30min | Faible |
| P-10 | Absence de spec espacement digital | 🟢 Mineur | 2h | Moyen |

**Priorité absolue : P-01 — La palette fragmentée est le problème le plus susceptible de générer des outputs visuellement incohérents, notamment via le `#00D4FF` qui contredit la règle fondamentale "no neon".**

> **Note de version** : P-01 à P-10 ont été résolus dans la version 1.0 du rapport (commit `5e46976`).
> Les sections 9 et 10 ci-dessous constituent l'extension de l'audit aux dimensions Prompting et Chaîne YouTube.

---

## 9. AUDIT — SYSTÈME DE PROMPTING

### 9.1 État des lieux

Le système de prompting repose sur 5 fichiers actifs :

| Fichier | Type | Cible IA | Complétude |
|---|---|---|---|
| `prompts/master_prompt.md` | Prompt image général | Non spécifiée | ⚠️ Partielle |
| `prompts/youtube_thumbnail_prompt.md` | Prompt image YouTube | Non spécifiée | ⚠️ Très succinct |
| `prompts/mascot_prompt.md` | Prompt image mascotte | Non spécifiée | ✅ Suffisant |
| `examples/prompt_examples.md` | Prompt image YouTube (détaillé) | Non spécifiée | ✅ Exhaustif |
| `examples/MLpromptsample.md` | Prompt script/narration | NotebookLM | ✅ Exhaustif |

### 9.2 Problèmes identifiés

**P-11 · MAJEUR — `prompts/master_prompt.md` : naming rule violée + couleurs sans hex**

Le titre H1 utilise encore `# Prompt Maître — WetAndSeaAI / WetSeaTech`. Le naming rule non appliquée ici malgré les corrections déjà effectuées sur les autres fichiers.

Plus grave : la section `## COLORS` liste les couleurs en texte libre (`Deep navy, graphite, muted cyan...`) sans valeurs hex. Un outil d'image génératif (Midjourney, Flux, DALL-E) ne peut pas calibrer précisément sans valeurs hex explicites.

**Avant :**
```markdown
## COLORS
Deep navy, graphite, muted cyan, dark ocean green, off-white, mineral sand, brushed aluminum.
```

**Après recommandé :**
```markdown
## COLORS
<!-- Source : design_tokens.yaml -->
Deep navy #0A1A2B · Graphite #2A2F36 · Muted cyan #5E8FA3
Dark ocean green #1D3A3A · Off-white #F2F1EC · Mineral sand #C9BDA8
Rule: 90% dark neutrals, 10% muted cyan accents maximum.
```

---

**P-12 · MAJEUR — Double emploi `youtube_thumbnail_prompt.md` vs `examples/prompt_examples.md`**

Ces deux fichiers couvrent le même usage (prompt de miniature YouTube) avec une qualité radicalement différente :
- `youtube_thumbnail_prompt.md` : 16 lignes, peu actionnable
- `examples/prompt_examples.md` : ~80 lignes, complet, avec palette hex, composition, textures, interdits

Le premier est redondant et inférieur au second. Un agent qui charge uniquement `youtube_thumbnail_prompt.md` dispose d'un prompt insuffisant.

**Recommandation :** `prompts/youtube_thumbnail_prompt.md` doit devenir un wrapper qui pointe vers `examples/prompt_examples.md` comme prompt complet, ou les deux doivent être fusionnés avec `examples/prompt_examples.md` comme version canonique renommée `prompts/youtube_thumbnail_prompt_full.md`.

---

**P-13 · MAJEUR — Aucun negative prompt standardisé pour les outils IA image**

Le template `docs/illustration_prompts.md` prévoit un champ `Negative prompts:` mais aucun fichier ne fournit la liste standard. Midjourney, Flux, Stable Diffusion utilisent tous ce mécanisme. Sans negative prompt WetSea Observatory standardisé, chaque prompt ad hoc réinvente la roue — et oublie inévitablement des éléments.

**Negative prompt standard recommandé :**
```
neon, cyberpunk, gaming, RGB lighting, glitch effect, lens flare, startup branding,
stock photography, corporate aesthetic, cartoon, kawaii, chibi, hyper saturated colors,
crypto symbols, web3 aesthetic, futuristic fonts, clickbait, shocked face, red arrows,
yellow circles, overprocessed HDR, sci-fi cliché, generic AI texture, centered symmetrical layout,
SaaS gradients, blob shapes, comic style, manga panels with action lines
```

---

**P-14 · MODÉRÉ — Aucune indication de l'outil IA cible dans les prompts**

Aucun fichier prompt ne précise pour quelle IA il est optimisé. La syntaxe et l'efficacité d'un prompt diffèrent significativement selon l'outil :
- **Midjourney** : utilise des paramètres (`--ar 16:9 --style raw --v 6.1`), sensible aux mots-clés courts
- **DALL-E / GPT-4o** : prompt en prose naturelle, moins sensible aux listes
- **Flux / Stable Diffusion** : tire profit des negative prompts
- **Ideogram / Recraft** : optimisé pour texte dans l'image

**Recommandation :** Ajouter une section `## Target Tool` dans chaque prompt avec la variante par outil, ou créer des fichiers séparés par outil pour les prompts fréquents.

---

**P-15 · MODÉRÉ — `docs/illustration_prompts.md` : template sans catalogue d'exemples**

Le template structure correctement les champs (Subject, Geographic context, Infrastructure type, etc.) mais ne contient qu'un seul exemple. Pour une chaîne YouTube thématique, les sujets récurrents (câbles sous-marins, ports, cloud, réseaux de données) devraient avoir chacun un exemple de prompt complet pré-validé.

**Recommandation :** Créer un `prompts/illustration_library.md` avec 8–12 prompts pré-validés couvrant les thèmes récurrents de la chaîne. Chaque prompt inclut le negative prompt standard et les paramètres outil cible.

---

**P-16 · MODÉRÉ — Anti-AI filter incomplet en français dans `examples/MLpromptsample.md`**

Le fichier `examples/MLpromptsample.md` liste les expressions interdites uniquement en anglais alors que `notebooklm/directives.md` a une liste bilingue plus complète. Si la production de scripts se fait en français, le filtre anglais est insuffisant.

**Recommandation :** Aligner `examples/MLpromptsample.md` avec la liste bilingue de `notebooklm/directives.md`, ou ajouter un renvoi explicite vers ce fichier.

---

**P-17 · MODÉRÉ — Placeholders `[INSERT SUBJECT]` sans guidance contextuelle**

Les prompts `master_prompt.md` et `MLpromptsample.md` utilisent `[INSERT SUBJECT]` / `[INSERT TOPIC]` comme placeholders nus. Pour un utilisateur non expert ou un agent IA, ces placeholders sont insuffisants : il n'y a pas d'exemples de ce qu'on peut y mettre, ni de guidance sur le niveau de granularité attendu.

**Avant :**
```
## Subject
[INSERT SUBJECT]
```

**Après recommandé :**
```
## Subject
[INSERT SUBJECT]
<!-- Exemples :
  - "North Atlantic submarine cable network — AEConnect-1"
  - "Port of Rotterdam as global logistics node"
  - "BGP routing failure cascade — real-world incident"
  - "Hyperscaler datacenter geography — Atlantic coast"
-->
```

---

**P-18 · MINEUR — `notebooklm/directives.md` : section COLOR PALETTE sans hex**

La section `## COLOR PALETTE` liste les couleurs en texte libre (`dark navy, deep black, muted metallic blue`) sans valeurs hex — et "deep black" n'est pas un token de la palette officielle. Un agent NotebookLM guidant la génération de visuels slide/storyboard ne dispose pas des valeurs précises.

---

### 9.3 Quick Wins Prompting

| # | Action | Effort |
|---|---|---|
| QW-P1 | Corriger H1 + ajouter hex dans `prompts/master_prompt.md` | 15 min |
| QW-P2 | Réduire `youtube_thumbnail_prompt.md` à un wrapper pointant vers `examples/prompt_examples.md` | 15 min |
| QW-P3 | Créer `prompts/negative_prompt_standard.md` | 30 min |
| QW-P4 | Ajouter exemples contextuels aux placeholders `[INSERT]` | 30 min |
| QW-P5 | Aligner filtre anti-AI bilingue dans `examples/MLpromptsample.md` | 20 min |

---

## 10. AUDIT — CHAÎNE YOUTUBE

### 10.1 Ce qui est défini

Le système couvre bien :
- Style visuel des miniatures (composition, palette, typo, interdits)
- Structure narrative des scripts (Hook → 9 sections → CTA)
- Ton éditorial (analytique, retenu, documentaire)
- Anti-drift checklist pour cohérence visuelle série
- Règles de montage (direct cuts, pas de transitions décoratives)

### 10.2 Problèmes identifiés

**P-19 · CRITIQUE — Architecture de chaîne non définie**

Aucun fichier ne définit la structure globale de la chaîne YouTube : séries, playlists, catégories de contenu, hiérarchie entre formats. Sans cette architecture, chaque vidéo est produite de façon atomique sans vision d'ensemble de la chaîne. Cela impacte directement la découvrabilité, la rétention d'audience et la cohérence perçue.

**Ce qui manque :**
- Définition des séries thématiques (ex : "Câbles", "Ports", "Cloud", "Cyber")
- Règles de naming des playlists
- Relation entre vidéos longues et Shorts
- Fréquence de publication cible

---

**P-20 · CRITIQUE — Titres de vidéos : aucune règle**

Les titres YouTube sont aussi importants que les miniatures pour le CTR et la découvrabilité SEO. Le système a des règles exhaustives pour les miniatures — mais aucune règle pour les titres.

**Ce qui manque :**
- Format de titre recommandé (longueur, structure, capitalisation)
- Règles SEO (mots-clés, position dans le titre)
- Exemples de titres approuvés dans le style WetSea Observatory
- Ce que le titre doit compléter par rapport à la miniature (titre ≠ répétition de la miniature)

**Exemples de titres dans le style WetSea Observatory :**
```
Format A — Question technique : "Comment 400 câbles sous-marins font tenir l'internet mondial"
Format B — Fait opérationnel : "Ce port traite 15 millions de conteneurs. Sans que personne ne le voie."
Format C — Paradoxe système : "Le cloud est physique. Voici où il se trouve vraiment."
Format D — Incident réel : "Quand un câble se coupe : ce qui se passe en 47 secondes"
```

---

**P-21 · MAJEUR — Descriptions YouTube absentes du système**

Les descriptions YouTube remplissent trois fonctions : SEO (mots-clés indexés), navigation (liens, timestamps) et contexte éditorial (ce que la vidéo couvre). Aucun template ni directive n'existe pour ce composant pourtant essentiel à la chaîne.

**Structure de description recommandée :**
```
[Accroche 1–2 lignes — résumé du sujet, ton éditorial]

[Corps 3–5 lignes — angle analytique développé, facts clés]

— CHAPITRES —
00:00 [Section 1]
xx:xx [Section 2]
...

— SOURCES —
[Liens vers sources primaires]

— TAGS —
#submarine cables #maritime infrastructure #cloud architecture [etc.]
```

---

**P-22 · MAJEUR — Template de script vierge absent**

`notebooklm/directives.md` définit la structure narrative (9 sections) mais il n'existe pas de template de script vierge réutilisable avec les sections pré-remplies et les contraintes de durée par section. Chaque production repart de zéro.

**Structure manquante :**
```
## HOOK (0:00–0:15 / ~30 mots)
[Tension initiale ou dépendance cachée]

## RÉALITÉ OBSERVABLE (0:15–1:00 / ~100 mots)
[Ce qui est visible et mesurable]
...
```

---

**P-23 · MAJEUR — Continuité visuelle entre épisodes d'une série : règles absentes**

La checklist anti-drift demande "Can the frame logic be reused in a series?" mais aucun fichier ne définit concrètement les éléments récurrents d'une série (intro fixe, habillage graphique de série, couleur d'accent par série, position du logo, etc.).

Pour une chaîne éditoriale premium, la continuité visuelle entre épisodes d'une même série est un signal de qualité fort — et un levier de reconnaissance d'audience.

---

**P-24 · MODÉRÉ — Formats vidéo non différenciés (long vs Short)**

Les directives de narration sont conçues pour des formats longs (8–15 min, 9 sections narratives). Les YouTube Shorts (< 60 sec) ont des contraintes radicalement différentes : hook en 2 secondes, un seul point, rythme 2–3x plus rapide, format vertical 9:16. Aucune distinction n'est faite dans les fichiers actuels.

---

**P-25 · MODÉRÉ — CTA approuvés non définis**

La règle est "éviter 'like and subscribe', préférer une action pratique ou une observation réflexive". Mais aucun fichier ne propose de formulations CTA concrètes validées pour WetSea Observatory.

**Formulations CTA dans le style WetSea Observatory :**
```
"Si vous voulez aller plus loin : [lien vers source primaire]."
"La prochaine vidéo couvre [X]. Vous pouvez vous abonner si ce territoire vous intéresse."
"Ce cas précis est documenté dans [rapport/publication]. Lien en description."
"Question ouverte : [formulation analytique du problème traité dans la vidéo]."
```

---

**P-26 · MODÉRÉ — Langue de production non spécifiée**

Les fichiers de directives sont bilingues (sections en anglais dans `directives.md`, `knowledge.md`, `WetSeaTech_Graphic_Identity_NotebookLM.md` ; sections en français dans d'autres fichiers). Aucune règle ne définit : les vidéos sont-elles en français, en anglais, ou les deux ? Cette ambiguïté affecte directement les prompts de script, les titres et descriptions, et la stratégie SEO.

---

**P-27 · MINEUR — Banque de sujets absente**

Il n'existe pas de fichier listant les sujets validés, en cours, ou potentiels pour la chaîne. Un tel fichier permettrait de planifier la cohérence thématique sur plusieurs épisodes, d'identifier les angles encore non couverts, et de mesurer la densité de couverture par domaine (câbles, ports, cloud, cyber, etc.).

---

### 10.3 Quick Wins YouTube

| # | Action | Effort |
|---|---|---|
| QW-Y1 | Créer `channels/youtube_titles.md` — règles + exemples de titres | 45 min |
| QW-Y2 | Créer `prompts/script_template.md` — structure vierge du script à 9 sections | 30 min |
| QW-Y3 | Ajouter règles CTA dans `channels/youtube.md` | 15 min |
| QW-Y4 | Ajouter template de description YouTube dans `channels/youtube.md` | 20 min |
| QW-Y5 | Clarifier la langue de production dans `identity/brand_core.md` | 15 min |

---

## 11. RÉSUMÉ EXÉCUTIF MIS À JOUR (v2.0)

### Problèmes résolus (v1.0 — commit 5e46976)
P-01 · P-02 · P-03 · P-04 · P-05 · P-06 · P-08 · P-09 — tous corrigés.

### Problèmes actifs (v2.0 — extension Prompting + YouTube)

| # | Problème | Domaine | Sévérité | Effort |
|---|---|---|---|---|
| P-11 | `master_prompt.md` : naming rule + couleurs sans hex | Prompting | 🟠 Majeur | 15 min |
| P-12 | Double emploi `youtube_thumbnail_prompt.md` vs `examples/prompt_examples.md` | Prompting | 🟠 Majeur | 15 min |
| P-13 | Negative prompt standardisé absent | Prompting | 🟠 Majeur | 30 min |
| P-14 | Outil IA cible non spécifié dans les prompts | Prompting | 🟡 Modéré | 1h |
| P-15 | `illustration_prompts.md` sans catalogue d'exemples | Prompting | 🟡 Modéré | 2h |
| P-16 | Anti-AI filter incomplet en français | Prompting | 🟡 Modéré | 20 min |
| P-17 | Placeholders `[INSERT]` sans guidance contextuelle | Prompting | 🟡 Modéré | 30 min |
| P-18 | `notebooklm/directives.md` : couleurs sans hex | Prompting | 🟢 Mineur | 15 min |
| P-19 | Architecture de chaîne YouTube non définie | YouTube | 🔴 Critique | 2h |
| P-20 | Règles de titres YouTube absentes | YouTube | 🔴 Critique | 1h |
| P-21 | Descriptions YouTube absentes | YouTube | 🟠 Majeur | 1h |
| P-22 | Template de script vierge absent | YouTube | 🟠 Majeur | 45 min |
| P-23 | Continuité visuelle entre épisodes non définie | YouTube | 🟠 Majeur | 1h |
| P-24 | Formats long vs Short non différenciés | YouTube | 🟡 Modéré | 1h |
| P-25 | CTA approuvés non définis | YouTube | 🟡 Modéré | 20 min |
| P-26 | Langue de production non spécifiée | YouTube | 🟡 Modéré | 15 min |
| P-27 | Banque de sujets absente | YouTube | 🟢 Mineur | Continu |

---

*Rapport mis à jour — v2.0 · Mai 2026 · Analyse directe du repository · Aucune hypothèse externe*

---

# Révision du 2026-08-02

> **Statut du rapport.** Le corps ci-dessus date de mai 2026 et reste un document
> daté : il n'est pas réécrit. Cette révision constate ce que deux décisions du
> 2026-08-02 ont changé, résolu, ou laissé ouvert.
>
> **Décision 1 — recentrage éditorial.** Sujets principaux : cybersécurité,
> architectures cloud, agents IA, prospective. Occasionnels : câbles sous-marins,
> satellites. Illustration complémentaire jamais sujet : voiliers, parapente,
> plongée, silhouettes de navires, mer, horizon. Retirés : ports, terminaux à
> conteneurs, grues portuaires, routes maritimes, logistique portuaire.
>
> **Décision 2 — architecture de marque.** Marque publique unique, graphie unique
> toutes langues : `Wet & Sea AI` (domaine `wetandseaai.fr`). `WetSea Observatory`
> = design system, interne. `WetSeaTech` = boutique Etsy endossée, sans identité
> visuelle propre. `WST` = couche technique interne. Proscrits : `Wet & Sea & IA`,
> `WetAndSeaAI`, `WST NETWORK`, `WST Labs`. Palette `color.extension_wetseatech`
> retirée. Dépôt non renommé.
>
> **Méthode.** Deux revues indépendantes — axe design system, axe architecture de
> marque — menées sur l'état du dépôt après application. Les ratios de contraste
> du §3 ont été recalculés indépendamment (luminance relative WCAG 2.1) et
> vérifiés une seconde fois avant publication.
>
> Convention : **[F]** fait vérifié · **[I]** inférence · **[R]** recommandation.

## Révision du 2026-08-02 — axe design system

### 1. Statut des défauts P-01 à P-10

| ID | Intitulé court | Statut | Justification vérifiée |
|---|---|---|---|
| **P-01** | Palette fragmentée (3 jeux hex conflictuels) | **Résolu** | [F] `design_tokens.yaml:1-10` s'auto-déclare source de vérité unique ; `#00D4FF` est listé en `color.forbidden` (`design_tokens.yaml:81-82`) ; le second jeu de tokens, cause racine, a été retiré (`design_tokens.yaml:70-77`) et les consommateurs citent les mêmes hex (`prompts/master_prompt.md:16-19`, `channels/youtube.md:44-51`, `brand/core.md:88`). |
| **P-02** | Typographie sans noms de fontes | **Résolu** | [F] Trois familles nommées, avec alternatives, fallback système et mot-clé de prompt IA : `design_tokens.yaml:97-143` ; hiérarchie H1/H2/body/captions en `:146-166`. |
| **P-03** | Point d'entrée ambigu (6 fichiers « maîtres ») | **Résolu** | [F] `START_HERE.md:3-4` se déclare point d'entrée unique ; `START_HERE.md:17-20` fixe la hiérarchie de résolution de conflit, reprise en `brand/core.md:5`. |
| **P-04** | Divergence de personnalité WetSea / WetSeaTech | **Résolu (structurellement)** | [F] `brand/wetseatech_program.md:1` requalifie le fichier en « Ligne cyber — Program Adapter » ; `:14-27` supprime le statut de sous-marque ; `:57` impose la palette principale comme unique. Résidus de ton : voir axe marque, §2. |
| **P-05** | Spec mascotte fragmentée | **Toujours ouvert** | [F] `design_tokens.yaml:261-285` consolide archétypes, style et interdits, mais `knowledge.md:101-128` conserve une seconde spec autonome qui le contredit : `knowledge.md:122` demande des mascottes « mobiles » là où `design_tokens.yaml:276` impose « Static or minimally expressive ». |
| **P-06** | Listes « interdit » dupliquées | **Toujours ouvert** | [F] Le renvoi unique existe (`brand/core.md:166`, `channels/youtube.md:87`, `prompts/master_prompt.md:50`), mais deux listes complètes survivent en dur : `knowledge.md:42-55` et `brand_guidelines.md:29-34`. Passage de 10+ exemplaires à 3. |
| **P-07** | Dossier `assets/` vide | **Non vérifiable** | [F] Seule trace : `START_HERE.md:74` annonce une gouvernance d'assets à documenter. Le dossier n'était pas dans le périmètre de la revue. |
| **P-08** | `docs/system_prompts.md` stub | **Non vérifiable** | [I] `START_HERE.md:54-76` ne liste plus de dossier `docs/`, ce qui suggère une suppression — mais `docs/visual_identity.md` existe, ce qui affaiblit l'inférence. |
| **P-09** | Naming rule violée dans les fichiers qui la définissent | **Résolu par effet de bord** | [F] La refonte du 2026-08-02 a supprimé les H1 fautifs : `brand_guidelines.md:1`, `prompts/master_prompt.md:1`, `knowledge.md:1` portent « Wet & Sea AI ». Corrigé comme conséquence de la décision 2, pas pour P-09. Résidus : N-05 ci-dessous et axe marque §2. |
| **P-10** | Absence de spec espacement digital | **Résolu** | [F] `design_tokens.yaml:190-196` définit gutters et marges desktop/mobile plus une largeur de contenu max ; `:252-256` ajoute le format `blog_editorial`. |

### 2. Défauts nouveaux ou résiduels

| ID | Description | Fichier:ligne | Sévérité | Correction |
|---|---|---|---|---|
| **N-01** | Le tableau de composition de miniature cite `port` comme sujet technique principal, alors que la même page interdit les ports 41 lignes plus bas. | `channels/youtube.md:24` vs `:65-66` | Critique | Remplacer par « câble, satellite, topologie réseau, datacenter ». |
| **N-02** | `WetSeaTech` encore employé comme label de contenu éditorial cyber, alors qu'il ne désigne plus que la boutique Etsy. | `START_HERE.md:33` | Majeur | Renommer l'entrée « Contenu cyber / cloud / agents IA ». |
| **N-03** | `knowledge.md` est orphelin de l'arborescence de référence et porte une palette en texte libre, une liste d'interdits dupliquée et une spec mascotte contradictoire. Un agent qui le charge seul reçoit un système périmé. | `knowledge.md:1-173`, absent de `START_HERE.md:54-76` | Majeur | Marquer LEGACY ou remplacer `:79-128` par des renvois. |
| **N-04** | La vision de marque reste ancrée sur « les infrastructures maritimes », registre rétrogradé au rang d'illustration. | `brand/core.md:33` | Majeur | Réécrire sur cyber / cloud / agents IA / infrastructures numériques invisibles. |
| **N-05** | Le nom du design system sert de nom de marque dans trois déclarations d'identité. | `docs/visual_identity.md:4`, `brand/core.md:76`, `brand/wetseatech_program.md:99` | Modéré | Substituer « Wet & Sea AI ». |
| **N-06** | Le template de description YouTube impose des tags maritimes par défaut. | `channels/youtube.md:122` | Modéré | `#cybersécurité #cloud #agentsIA #[sujet]` ; `#câblessousmarins` réservé aux sujets occasionnels. |
| **N-07** | « signalétique portuaire » subsiste dans l'ADN visuel. [I] Registre d'inspiration graphique, pas sujet — mais appartient à la famille retirée. | `brand/core.md:69`, `knowledge.md:64` | Modéré | Supprimer ou requalifier « signalétique technique et navale (inspiration, jamais sujet) ». |
| **N-08** | `VLCC` donné en exemple d'acronyme autorisé — vocabulaire de trafic maritime. | `channels/youtube_titles.md:78` | Mineur | Remplacer par BGP, MCP, IETF. |
| **N-09** | Dates de dernière mise à jour périmées dans les deux fichiers d'autorité, qui portent pourtant la décision du 2026-08-02. Un agent qui arbitre par date lit la décision comme antérieure à elle-même. | `design_tokens.yaml:8`, `START_HERE.md:95` | Mineur | Passer à `2026-08-02`. |
| **N-10** | Renvoi devenu inutile : `wetseatech_program.md` désigné comme « adaptateur contextuel » de palette alors qu'il déclare la palette unique. | `START_HERE.md:37-38` | Mineur | Réduire à « `design_tokens.yaml` est l'unique source de palette ». |
| **N-11** | Bloc terminal dégradé : titre orphelin, préfixe `WST PRIORITY RULE` en position d'autorité éditoriale, puce mal formée. | `brand_guidelines.md:47-50` | Mineur | Supprimer (fichier déjà LEGACY) ; la règle existe en `brand/core.md:86`. |

[F] Aucun renvoi mort vers `color.extension_wetseatech`, `#07101A`, `#1E3A5F`,
`WST NETWORK`, `WST Labs`, `Wet & Sea & IA` ou `WetAndSeaAI` n'a été trouvé : le
retrait a été propagé proprement. `#94A3B8` n'apparaît plus qu'en
`design_tokens.yaml:67`, conformément à la note `:76-77`.

### 3. Accessibilité de la palette restante — recalcul

[F] Méthode : luminance relative WCAG 2.1 (linéarisation sRGB, seuil 0,04045,
exposant 2,4 ; coefficients 0,2126 / 0,7152 / 0,0722), puis
`(L_clair + 0,05) / (L_sombre + 0,05)`. Calcul effectué deux fois, de façon
indépendante, avant publication.

| Couple | Ratio calculé | Ratio annoncé | Verdict |
|---|---|---|---|
| `off-white #F2F1EC` sur `deep-navy #0A1A2B` | **15,53:1** | 13,8:1 (`design_tokens.yaml:59`, `:91`) | Annonce fausse — conclusion AAA inchangée |
| `mineral-sand #C9BDA8` sur `deep-navy` | **9,48:1** | 7,2:1 (`:63`) | Annonce fausse — AAA en réalité, pas AA |
| `muted-cyan #5E8FA3` sur `deep-navy` | **4,96:1** | 3,1:1, « AA large only » (`:54`) | Annonce fausse **et** restriction erronée : passe AA texte courant |
| `deep-navy` sur blanc `#FFFFFF` | **17,57:1** | 14,2:1 (`:46`) | Annonce fausse — AAA confirmé |
| `muted-cyan` sur `mineral-sand` | **1,91:1** | avertissement sans valeur (`:55`) | Avertissement fondé — échec net |
| `off-white` sur `graphite #2A2F36` | **11,92:1** | non annoncé | AAA |
| `mineral-sand` sur `graphite` | **7,27:1** | non annoncé | AAA large / AA courant |
| `muted-cyan` sur `graphite` | **3,81:1** | non annoncé | AA texte large uniquement |
| `off-white` sur `dark-ocean-green #1D3A3A` | **10,80:1** | non annoncé | AAA |
| `muted-cyan` sur `dark-ocean-green` | **3,45:1** | non annoncé | AA texte large uniquement |
| `off-white` sur `mineral-sand` | **1,64:1** | non annoncé | À proscrire explicitement |

[F] Les quatre ratios chiffrés du fichier de tokens sont faux, et de façon
systématique : ils sous-estiment le contraste réel.

[I] L'origine probable est un report croisé. `3,1:1` correspond exactement au
couple `muted-cyan` sur `off-white` (**3,13:1** calculé) et `7,2:1` au couple
`mineral-sand` sur `graphite` (**7,27:1** calculé) : les valeurs ont
vraisemblablement été attribuées au mauvais fond lors de la rédaction.

[F] Conséquence opérationnelle : la restriction de `design_tokens.yaml:54`
interdit sans raison le `muted-cyan` pour du texte courant sur `deep-navy` alors
qu'il satisfait AA. À l'inverse, aucun garde-fou n'existe pour les deux couples
réellement limités — `muted-cyan` sur `graphite` (3,81:1) et sur
`dark-ocean-green` (3,45:1), tous deux texte large uniquement.

### 4. Recommandations — axe design system

**[R] R-1 — Corriger le bloc contraste de `design_tokens.yaml` (30 min, valeur
élevée).** Remplacer les quatre ratios erronés (lignes 46, 54, 59, 63, 91) par les
valeurs recalculées et ajouter les deux couples limités au texte large. C'est le
seul endroit du dépôt où une donnée chiffrée fausse est présentée comme faisant
autorité — et elle est recopiée telle quelle par les fichiers de canal.

**[R] R-2 — Purger les six résidus de vocabulaire périmé en une passe (45 min,
valeur élevée).** N-01, N-02, N-04, N-06, N-07 et N-08 sont des occurrences
textuelles isolées à correction mécanique. N-01 est un cas où le fichier se
contredit à 41 lignes d'intervalle : tant qu'il subsiste, un agent qui lit un seul
fichier de canal peut légitimement produire un visuel de port.

**[R] R-3 — Statuer sur les quatre fichiers hors arborescence (1 h, valeur
moyenne).** `knowledge.md`, `brand_guidelines.md`, `docs/visual_identity.md` et
`branding/composition_rules.md` ne figurent pas dans la structure déclarée en
`START_HERE.md:54-76` alors que `brand/core.md:9-10` affirme les avoir consolidés.
Ils portent les derniers doublons de palette, d'interdits et de spec mascotte :
P-05 et P-06 ne restent ouverts qu'à cause d'eux.

## Révision du 2026-08-02 — axe architecture de marque

> Les affirmations portant sur les propriétés hors dépôt (site Hugo, YouTube,
> Etsy, Ko-fi, Spotify, hook vidéo) proviennent de la décision et d'une lecture
> directe des sites publics ; elles ne sont pas vérifiables dans le dépôt.

### 1. Schéma d'architecture de marque

[F] Schéma déclaré en `design_tokens.yaml:15-33`, repris à l'identique dans
`brand/core.md:14-25`, `brand_guidelines.md:8-15`, `START_HERE.md:84-91` et
`knowledge.md:3-7`. Les cinq déclarations sont cohérentes entre elles.

| Niveau | Nom | Rôle | Où il apparaît | Jamais |
|---|---|---|---|---|
| Marque maîtresse | **Wet & Sea AI** | Seule marque publique, graphie unique toutes langues (`design_tokens.yaml:16-17`) | Site `wetandseaai.fr`, YouTube, covers podcast, descriptions Etsy, Ko-fi, Spotify | — nom par défaut partout |
| Endossée (produit) | **WetSeaTech** | Boutique Etsy, « WetSeaTech, la boutique de Wet & Sea AI ». Aucune identité visuelle propre (`:20-21`, `brand/wetseatech_program.md:21-23`) | Nom et URL de boutique, mention secondaire produit | Chaîne YouTube, site, podcast, miniatures, palette dédiée |
| Endossée (média) | **wst-tech.org** | Site de veille endossé, sous signature Wet & Sea AI (`:23`, `brand_guidelines.md:14`) | Le domaine reste servi, le contenu porte la marque maîtresse | Marque autonome dans le titre ou le pied de page |
| Interne (technique) | **WST** | Dépôts, préfixes `wst_`, Workers, environnements (`:23`, `START_HERE.md:90`) | Code, branches, infra, docs internes | Toute surface publique |
| Interne (design) | **WetSea Observatory** | Nom du design system (`:14`, `brand/core.md:18`) | Fichiers du dépôt, prompts d'agents, doc de production | Tout output destiné à une audience |
| Proscrits | Wet & Sea & IA · WetAndSeaAI · WST NETWORK · WST Labs | Graphies retirées (`:24-28`) | — | Partout, y compris interne |

### 2. Statut des défauts de nommage et de personnalité

[F] L'audit d'origine classait P-04 et P-09 « corrigés » dès la v1.0
(`UX_AUDIT_REPORT.md:462`) tout en laissant la décision de fond ouverte en Phase 3
(`:226-233`). Cette auto-déclaration était prématurée : la décision stratégique
n'était pas prise à la date du rapport.

| Défaut | Objet | Statut | Justification |
|---|---|---|---|
| **P-04** | Divergence de personnalité | **Partiellement résolu** | [F] Cause racine traitée : sous-marque dissoute (`brand/wetseatech_program.md:16-23`), second jeu de tokens retiré (`design_tokens.yaml:70-77`), fichier requalifié en adaptateur de densité (`:18-19`). [F] Résidus : le ton « légèrement plus tendu que le registre général » (`brand/wetseatech_program.md:46`) est exactement la « Tonalité B » que P-04 signalait, désormais légitimée ; et la checklist anti-drift exige un contenu « identifiable comme WetSea Observatory » (`:99`), ce qui redonne au design system un rôle de personnalité de marque. |
| **P-09** | Naming rule violée là où elle est définie | **Partiellement résolu** | [F] H1 corrigés (`brand_guidelines.md:1`, `knowledge.md:1`, `prompts/master_prompt.md:1`). [F] Le nom interne sert encore de titre et de qualificatif éditorial : `channels/youtube.md:1`, `channels/youtube_titles.md:1`, `:4`, `:63`, `brand/core.md:76`, `docs/visual_identity.md:4`. Un agent qui lit `channels/youtube_titles.md` seul en déduit que la marque s'appelle WetSea Observatory. |
| **P-11** | Naming rule dans `master_prompt.md` | **Résolu** | [F] `prompts/master_prompt.md:1` et `:4` séparent marque et design system ; les hex sont présents (`:17-19`). |
| **P-06** | Duplication des règles | **Ouvert, aggravé sur l'axe nommage** | [F] La règle de nommage est recopiée dans cinq fichiers, chacun portant un commentaire « ne pas dupliquer » tout en dupliquant. [I] Cohérent aujourd'hui : risque de dérive future, pas défaut actif. |
| Hors audit | Cohérence du recentrage | **Ouvert** | [F] (a) `channels/youtube.md:24` prescrit « port » onze lignes avant de l'interdire (`:65-66`). (b) `brand/core.md:43` liste « câbles sous-marins, réseaux globaux » sans les marquer occasionnels, là où `knowledge.md:19-22` les classe explicitement ainsi. (c) `channels/youtube.md:122` impose `#submarinecables #maritime #infrastructure` par défaut. |

[F] Non vérifiés faute de fichiers dans le périmètre de la revue :
`brand/forbidden.md`, `brand/editorial_voice.md`, `brand/mascot.md`,
`channels/etsy.md`, `channels/podcast.md`, `frameworks/clac.md`,
`notebooklm/directives.md`, `AGENTS.md`. `notebooklm/directives.md` était l'un des
vecteurs identifiés de P-04.

### 3. Risques résiduels de l'architecture retenue

**a. Deux domaines vivants pour une seule marque.** `wetandseaai.fr` et
`wst-tech.org` publient tous deux du contenu éditorial : autorité SEO, backlinks
et audience se répartissent sur deux racines, et un visiteur arrivant sur le
second n'a aucun signal que le premier existe. L'endossement n'est pas
auto-évident : sans marquage explicite, deux sites lisent comme deux marques —
exactement ce que la décision voulait supprimer.
*Traitement le moins coûteux :* bandeau d'endossement en en-tête de
`wst-tech.org` (« Veille — Wet & Sea AI ») et lien canonique unique vers
`wetandseaai.fr` en pied de page. Une modification de template Hugo, sans
migration de contenu.

**b. Baseline site ≠ baseline vidéo ≠ périmètre éditorial.** « Like diving
traveling coding love IA … » énumère des activités qui, dans le nouveau cadre,
appartiennent au registre d'illustration et jamais au sujet (`knowledge.md:23-26`,
`prompts/master_prompt.md:41-45`). Le hook vidéo porte « Between You and the
Signal ». La première impression (créateur lifestyle-tech) contredit la
proposition de valeur (observatoire cyber/cloud/IA).
Point aggravant [F] : le dépôt ne désigne **aucune** baseline — il liste sept
slogans d'égal statut (`brand/core.md:159-160`, `knowledge.md:166-173`), et
« Between You and the Signal » n'y figure pas ; le plus proche est « Between Sea
And Signal » (`brand/core.md:160`). Un asset déjà produit porte donc une formule
hors référentiel.
*Traitement le moins coûteux :* élire une baseline unique (§5), l'inscrire dans
`design_tokens.yaml` à côté de `canonical_names`, rétrograder les six autres en
slogans de campagne. Le hook déjà produit n'est pas réenregistré : il est traité
comme legacy jusqu'à son remplacement naturel.

**c. Nom de dépôt qui ne correspond plus à la marque.** `wetsea-observatory` porte
le nom du design system — cohérent avec `design_tokens.yaml:14`, donc défendable.
Conséquence réelle : les agents IA sont amorcés par le chemin du dépôt avant tout
fichier, ce qui renforce la confusion déjà constatée en
`channels/youtube_titles.md:4` et `brand/core.md:76`.
*Traitement (renommage écarté) :* une ligne en tête de `START_HERE.md` explicitant
que le nom du dépôt est celui du design system, et purge des six occurrences où le
nom interne sert de qualificatif éditorial. Moins de 30 minutes.

**d. Prononciation de « AI » en synthèse vocale française.** Trois pièges pour un
TTS francophone : l'esperluette (lue « et » ou omise), « Sea » (risque de
« séa »), et « AI » — lu « a-i », ou assimilé à « aïe », ou « corrigé » en « IA »
par le modèle. Le nom est alors prononcé différemment d'une vidéo à l'autre et
diverge de la graphie affichée : le bénéfice de la graphie unique s'annule là où
il compte le plus, à l'oral, sur le canal principal.
[F] `design_tokens.yaml:25` motive le rejet de « Wet & Sea & IA » par « se lit et
se prononce mal », mais aucune forme orale de référence n'est prescrite pour la
graphie retenue.
*Traitement le moins coûteux :* fixer une forme orale canonique unique dans
`design_tokens.yaml` sous `canonical_names` — proposition : **« Wett and Sea
A.I. »** — avec alias SSML `<sub alias="ouette and si é i">` dans les outils qui
le supportent, et mention en tête du template de script.

**e. Asymétrie de gouvernance entre canaux.** `WetSeaTech` n'a « aucune identité
visuelle propre » (`design_tokens.yaml:21`), mais aucune règle ne dit comment le
nommer sur les visuels produits Etsy, où la plateforme affiche elle-même le nom de
boutique en position de marque principale.
*Traitement :* imposer la signature « Wet & Sea AI » sur chaque visuel produit, la
boutique restant un libellé de plateforme.

### 4. Plan d'alignement hors dépôt

[R] Priorité décroissante. Efforts estimés.

| # | Quoi | Où | Effort | Ce qui casse sinon |
|---|---|---|---|---|
| 1 | Graphie exacte `Wet & Sea AI` (en-tête, `<title>`, OG, pied de page) | Hugo `wetandseaai.fr` | 30 min | La marque de référence est elle-même hors norme ; la décision perd son ancrage |
| 2 | Remplacer la baseline « Like diving traveling coding love IA … » par la baseline élue | Hugo `wetandseaai.fr` | 15 min | Promesse lifestyle sur un site d'expertise ; le recentrage n'est visible nulle part publiquement |
| 3 | Retirer « Wet & Sea & IA », « WST NETWORK », « WST Labs » ; poser « Veille — Wet & Sea AI » | `wst-tech.org` | 1 h | Trois graphies proscrites restent publiquement affichées ; la marque lit comme deux entités |
| 4 | Aligner nom de chaîne, bannière, description, lien « à propos » ; vérifier le handle `@DISCOVER-ALLIN360`, qui ne porte aucune trace de la marque | YouTube (2 chaînes) | 1–2 h | Le canal d'acquisition principal ne porte pas la marque ; handle non mémorisable, non recherchable |
| 5 | Mention d'endossement en tête de description de boutique et sur chaque visuel produit | Etsy `wetseatech` | 30 min | La boutique lit comme une marque autonome ; l'audience YouTube ne fait pas le lien |
| 6 | Aligner titre, avatar, présentation ; supprimer « WST » | Ko-fi | 15 min | Une page de soutien portant un nom interne ne convertit pas |
| 7 | Aligner nom, cover, description ; forme orale canonique dans l'intro | Spotify | 30 min + cover | Prononciation différente à chaque épisode ; podcast non rattachable à la chaîne |
| 8 | Unifier les liens sortants : chaque propriété pointe une fois vers `wetandseaai.fr` | Toutes | 30 min | L'audience circule latéralement sans atteindre le hub |
| 9 | Corriger les résidus dépôt du §2 (N-01, N-04, N-06, dates) | Dépôt | 30 min | Les agents continuent de générer des visuels de port et des tags maritimes retirés |

### 5. Baseline unique recommandée

[R] Une seule baseline, une paire FR/EN figée, inscrite dans `design_tokens.yaml`
au même niveau que `canonical_names`. Les sept slogans existants
(`brand/core.md:159-160`) sont rétrogradés en slogans de campagne et ne peuvent
plus tenir lieu de baseline.

**Recommandée — « Lire les systèmes invisibles » / “Reading Invisible Systems”.**
« Système » est le seul mot qui recouvre en une fois cyber, cloud, agents IA et
prospective sans en nommer aucun ; « lire » installe la posture d'observatoire
plutôt que d'opinion ; la formule est déjà dans le référentiel
(`brand/core.md:159`), donc à coût de décision nul ; et ses deux formes se
prononcent proprement dans chaque langue, sans mot piège.

**Repli 1 — « Entre vous et le signal » / “Between You and the Signal”.** Coût
zéro sur l'existant puisqu'un hook la porte déjà, mais elle décrit une posture
relationnelle sans jamais dire de quoi la chaîne parle : à retenir seulement si la
continuité des assets prime sur la lisibilité du périmètre.

**Repli 2 — « Observer les systèmes qui décident » / “Watching the Systems That
Decide”.** La seule des trois qui nomme implicitement les agents IA et la
prospective — des systèmes qui décident, pas seulement qui transportent — au prix
d'une longueur supérieure et d'une tonalité plus tendue que le registre calme
prescrit par `brand/core.md:53-56`.

[R] Règle d'usage commune : la baseline s'affiche toujours sous la marque, jamais
à sa place ; version FR sur surfaces francophones, EN sur surfaces anglophones ;
aucune troisième variante, y compris en légende de miniature.

---

*Révision du 2026-08-02 — deux revues indépendantes (design system, architecture
de marque) sur l'état du dépôt après application des décisions. Ratios de
contraste recalculés et vérifiés deux fois.*

---

<a id="source-assets-readme-md"></a>

## 📄 SOURCE: `assets/README.md`

# Assets Directory

Store approved brand assets here:
- logos,
- texture packs,
- icon sets,
- template exports.

All assets must comply with `brand_guidelines.md` and `branding/forbidden_styles.md`.

---

<a id="source-brand-core-md"></a>

## 📄 SOURCE: `brand/core.md`

# WetSea Observatory — Brand Core

**Status:** CANONICAL
**Scope:** Positionnement, caractère, ADN visuel et applications de la marque
**Authority:** `design_tokens.yaml` prévaut pour les valeurs techniques
**Dependencies:** `design_tokens.yaml`, `brand/forbidden.md`
**Consumers:** Agents IA, éditeurs, designers et adaptateurs de canal

<!-- Consolide identity/brand_core.md, brand_guidelines.md, knowledge.md,
docs/context.md, docs/visual_identity.md et branding/composition_rules.md. -->

---

## Identité canonique

**Marque publique** : Wet & Sea AI — graphie unique, toutes langues
**Domaine canonique** : wetandseaai.fr
**Design system** : WetSea Observatory — nom interne, jamais affiché
**Marque produit endossée** : WetSeaTech (boutique Etsy), sans identité visuelle propre
**Couche technique interne** : WST — wst-tech.org, dépôts, préfixes `wst_`, Workers

> Règle : "Wet & Sea AI" est le seul nom affiché au public. "WetSea Observatory"
> désigne le référentiel visuel, pas la marque. Proscrits : "Wet & Sea & IA",
> "WetAndSeaAI", "WST NETWORK", "WST Labs".
> Source canonique : `design_tokens.yaml`, bloc `canonical_names` (décision 2026-08-02).

---

## Positionnement

Un observatoire éditorial et technique qui documente les systèmes invisibles entre océans, infrastructures et signaux — avec une intelligence visuelle calme et cinématographique.

**Vision :** construire une marque-observatoire éditoriale intemporelle autour de la cybersécurité, des architectures cloud, des agents IA et des infrastructures numériques invisibles.

**Stratégie :**
- publier des visuels de confiance avec une autorité documentaire
- traduire les systèmes techniques en récits élégants
- maintenir une direction artistique cohérente entre les canaux

**Périmètre thématique :**
- cybersécurité, architectures cloud, agents IA, prospective
- mer et profondeur comme registre visuel, jamais comme sujet
- câbles sous-marins, satellites, réseaux globaux (sujets OCCASIONNELS)
- architectures cloud, systèmes techniques contemporains
- infrastructures invisibles et dépendances opérationnelles

**Ton :** explorateur technique du monde contemporain — *mesuré, technique, contemplatif, global*.

---

## Caractère de marque

- Calme et précis.
- Sophistiqué mais lisible.
- Documentaire, technique, intemporel.
- Narratif sans spectacle.

**Ce que la marque doit évoquer :** calme · précision · navigation · intelligence discrète · observation · exploration moderne.

---

## ADN visuel

Fusion subtile de :
- cartes marines anciennes
- design éditorial japonais
- architecture moderniste
- instrumentation scientifique
- signalétique technique et navale (inspiration graphique, jamais sujet)
- aviation/naval technique
- manga adulte minimaliste
- documentaire contemporain
- interfaces radar abstraites
- schémas techniques élégants

**Déclaration d'identité :** WetSea Observatory visualise les routes cachées du monde moderne à travers un langage éditorial cinématographique et calme.

---

## Principes visuels

1. **Espace négatif fort** — compositions respirantes, hiérarchie claire, minimum 25% de vide structurel
2. **Indices techniques subtils** — routes, annotations, marqueurs d'instrumentation avec intention
3. **Minimalisme éditorial premium** — retenue, cohérence, discipline typographique
4. **Système chromatique contrôlé** — deep navy, graphite, muted cyan, dark ocean green, off-white, mineral sand
5. **Omission avant invention** — l'espace négatif est préférable au détail fabriqué

**Valeurs hex canoniques → voir `design_tokens.yaml` section `color.primary`.**

---

## Composants d'identité visuelle

- Textures cartographiques océaniques
- Sujets infrastructure (câbles sous-marins, satellites, datacenters, réseaux)
- Graphiques signal (vecteurs, marqueurs temporels, IDs)
- Hiérarchie typographique retenue
- Espace négatif comme élément structurel

## Composition canonique

- Utiliser une grille éditoriale de 12 colonnes pour les formats horizontaux.
- Réserver 25–40% d'espace négatif dans chaque visuel principal.
- Ancrer le sujet sur les tiers ou sur un point d'équilibre asymétrique.
- Construire la profondeur en trois couches :
  1. contexte cartographique ou infrastructurel
  2. objet technique
  3. titre et annotations concises
- Privilégier les lignes latérales et diagonales suggérant la continuité d'une route.
- Garder l'horizon bas ou absent lorsque l'abstraction du système est prioritaire.
- Utiliser un grain atmosphérique discret, conformément à `design_tokens.yaml`.

---

## Références visuelles

| Source | Apport |
|---|---|
| Design éditorial japonais | Grilles modulaires, asymétrie retenue, silence typographique |
| Cartographie marine | Logique de contour, dégradés de profondeur, réalisme des coordonnées |
| Instrumentation scientifique | Précision des labels, repères de mesure, hiérarchie de données |
| Photographie documentaire | Textures réelles, subtilité atmosphérique, cadrage riche en contexte |
| Architecture moderniste | Rythme structurel, sobriété matérielle, composition fonctionnelle |
| Manga minimaliste adulte | Travail de ligne discipliné, économie tonale, immobilité narrative |

---

## Ton éditorial

**Modèle narratif :**
1. Observation (ce qui est visible)
2. Système (comment cela fonctionne)
3. Implication (pourquoi cela compte)

**Équilibre visuel-textuel :**
- Titres : concis et analytiques
- Légendes : factuelles, non sensationnelles
- Corps : arcs narratifs techniques structurés

---

## Applications

Le système doit rester cohérent pour :
- affiches et prints éditoriaux
- vêtements sobres
- mugs premium
- stickers minimalistes
- covers podcast
- miniatures YouTube
- produits Etsy premium
- objets de bureau
- visuels de blog éditorial

---

## Baseline canonique

> **Reading Invisible Systems** (EN) · **Lire les systèmes invisibles** (FR)

Baseline unique, arrêtée le 2026-08-02. Elle s'affiche toujours SOUS la marque,
jamais à sa place. Aucune troisième variante.
Source canonique : `design_tokens.yaml`, bloc `canonical_names.baseline`.

## Slogans de campagne

Utilisables ponctuellement en accroche ou en légende. Ils ne tiennent **pas** lieu
de baseline et ne se substituent jamais à celle ci-dessus.

> Observe The Current · Signals Across Oceans · Between Sea And Signal
> Quiet Systems · Technical Cartographies · Routes Beneath The Surface

---

## Directions interdites

→ Voir `brand/forbidden.md` pour la liste complète et maintenue.

**Résumé :** no cyberpunk · no neon RGB · no gaming · no SaaS startup · no crypto/web3 · no kawaii · no surcharge graphique.

---

<a id="source-brand-editorial_voice-md"></a>

## 📄 SOURCE: `brand/editorial_voice.md`

# WetSea Observatory — Editorial Voice

**Status:** CANONICAL
**Scope:** Ton, structure narrative et discipline rédactionnelle
**Authority:** `brand/core.md` pour le positionnement de marque
**Dependencies:** `brand/core.md`, `brand/forbidden.md`
**Consumers:** Articles, scripts, tutoriels, podcasts et adaptations de canal

---

## Intention

WetSea Observatory explique les systèmes invisibles avec une voix mesurée,
technique, contemplative et globale. Le texte doit être sophistiqué mais
lisible, documentaire sans être froid, narratif sans spectacle.

Le lecteur ou l'auditeur doit sentir une intelligence d'observation : les faits
sont établis avant l'interprétation, les mécanismes sont rendus visibles, et les
conséquences sont décrites sans amplification artificielle.

---

## Modèle narratif

1. **Observation** — ce qui est visible, mesurable ou directement documenté.
2. **Système** — le mécanisme, les dépendances et les acteurs qui produisent le
   phénomène.
3. **Implication** — pourquoi le système compte, ce qu'il rend possible et où
   se trouvent ses limites.

Une production plus longue peut ajouter contradictions, conséquences,
incertitudes et décisions, mais elle doit conserver cette progression.

---

## Hiérarchie de preuve

- Séparer clairement les faits observés des interprétations.
- Préférer les sources primaires et les exemples nommés.
- Signaler les limites documentaires au lieu de combler les vides.
- Utiliser, lorsque nécessaire, les labels :
  - `[OBSERVED]`
  - `[INFERRED]`
  - `[HYPOTHETICAL]`
  - `[UNKNOWN]`
- Ne jamais transformer une hypothèse en certitude narrative.

---

## Écriture

### Titres

- Concis, analytiques et spécifiques.
- Ils révèlent le sujet sans le dramatiser.
- Ils évitent les promesses vagues et les superlatifs.

### Légendes

- Factuelles et non sensationnelles.
- Elles nomment l'objet, le lieu, le mécanisme ou la mesure utile.
- Elles n'expliquent pas ce que l'image montre déjà clairement.

### Corps

- Paragraphes structurés autour de mécanismes réels.
- Exemples concrets avant généralisation.
- Vocabulaire technique précis, défini lorsque le public peut ne pas le connaître.
- Transitions fondées sur la causalité, pas sur des formules génériques.

---

## Rythme

- Commencer par la réalité du système, pas par une présentation de soi.
- Ouvrir une lacune de compréhension légitime plutôt qu'un suspense artificiel.
- Alterner faits, mécanismes, exemples et conséquences.
- Laisser respirer le texte : la densité ne doit pas devenir une accumulation.
- Préférer une omission honnête à une précision fabriquée.

Pour les hooks, utiliser `frameworks/clac.md`.

---

## Anti-hype et anti-marketing

Éviter :

- les promesses de transformation universelle
- le langage de consultant générique
- les superlatifs sans preuve
- les injonctions promotionnelles
- les conclusions artificiellement urgentes
- les expressions de clickbait
- les appels à l'action mécaniques

Préférer :

- une source à consulter
- une question analytique
- une conséquence opérationnelle
- une limite encore inconnue
- une prochaine piste d'observation

---

## Équilibre visuel-texte

- Un titre fort.
- Une sous-structure claire.
- Des annotations limitées à ce qui améliore la compréhension.
- Aucun texte ne doit compenser un concept visuel insuffisant.
- L'espace négatif éditorial s'applique aussi à l'écriture : supprimer les
  répétitions et les transitions sans fonction.

---

## Contrôle qualité

Avant validation :

- [ ] Le sujet précis est-il identifiable dès le début ?
- [ ] Les faits et interprétations sont-ils distingués ?
- [ ] Le mécanisme central est-il expliqué ?
- [ ] Les exemples sont-ils concrets et pertinents ?
- [ ] Les limites ou inconnues sont-elles déclarées ?
- [ ] Le texte pourrait-il appartenir à une marque générique ? Si oui, réécrire.
- [ ] Le ton reste-t-il calme, technique et non promotionnel ?

---

<a id="source-brand-forbidden-md"></a>

## 📄 SOURCE: `brand/forbidden.md`

# WetSea Observatory — Forbidden Aesthetics

**Status:** CANONICAL
**Scope:** Interdits visuels et contrôle anti-drift
**Authority:** `design_tokens.yaml` prévaut pour les valeurs de couleur
**Dependencies:** `design_tokens.yaml`, `brand/core.md`

<!-- Consolide identity/forbidden.md et branding/forbidden_styles.md. -->

> Pour ajouter une nouvelle interdiction : modifier **uniquement ce fichier**.

---

## Interdits absolus (aucune exception)

### Esthétiques visuelles
- RGB neon / néons agressifs de toute nature
- Cyberpunk — motifs urbains, HUD gaming, neon city
- Gaming — visuels HUD, RGB clutter, polices de jeu
- Startup SaaS — gradients violets/roses, formes blob, typographies "techy fun"
- Crypto / web3 — coins, chains, rockets, symboles meme
- Science-fiction cliché — vaisseaux spatiaux, hologrammes fantaisie
- Glitch esthétique gratuit (non justifié par le contenu)

### Couleurs
- `#00D4FF` — cyan neon saturé (anciennement présent dans WetSeaTech, supprimé)
- Toute couleur primaire saturée utilisée comme fond dominant
- Palettes arc-en-ciel ou multicolores aléatoires
- Gradients avec plus de 2 teintes sans approbation spécifique

### Mascottes & personnages
- Mascottes kawaii ou chibi
- Expressions hyper-actives ou commerciales
- Cartoon enfantin, proportions toy-like
- Couleurs candy vives sur personnages

### Typographie
- Polices futuristes/gaming (ex. Orbitron, Audiowide, etc.)
- Polices décoratives cyberpunk
- Polices manuscrites dans contexte technique
- Outlines épais ou strokes lourds sur titres
- Effets de glow excessifs

### Photographie & visuels
- Visages choqués / réactions expressives style clickbait
- Flèches rouges ou cercles jaunes surlignant des éléments
- Stock photography générique (personnes, bureaux corporate)
- Imagery surtraitée HDR, sursharpened
- Lens flares excessifs

---

## Visual Smells (à éviter fortement)

- Textures IA génériques synthétiques
- Effets de glitch non justifiés par le contenu
- Texte en majuscules style meme (overload)
- Composition centrée statique sans intention
- Surcharge graphique (trop d'éléments concurrents)
- Logos surdimensionnés occupant plus de 15% de la surface

---

## Anti-drift checklist (valider avant tout output)

Avant de valider un visuel, vérifier :

- [ ] Le visuel ressemble-t-il à WetSea Observatory sans le titre ?
- [ ] Le cyan est-il utilisé comme signal discret, pas comme décoration ?
- [ ] L'image est-elle technique, lisible, et non chargée ?
- [ ] La logique de cadrage peut-elle être réutilisée dans une série ?
- [ ] Y a-t-il un concept réel derrière l'image ?
- [ ] A-t-on évité l'esthétique stock footage / clickbait mainstream ?
- [ ] Aucune des couleurs interdites ci-dessus n'est utilisée ?

---

## Référence dans les autres fichiers

Les fichiers suivants référencent cette liste au lieu de la reproduire :
- `brand/core.md`
- `system_prompt.md`
- `AGENTS.md`
- `channels/youtube.md`, `channels/etsy.md`, `channels/podcast.md`

---

<a id="source-brand-logo_and_marks-md"></a>

## 📄 SOURCE: `brand/logo_and_marks.md`

# WetSea Observatory — Logo and Marks Governance

**Status:** CANONICAL GOVERNANCE
**Scope:** Statut, preuve et usage des logos, marques, bannières, avatars et favicons
**Authority:** `brand/core.md`, `design_tokens.yaml`
**Consumers:** Humains et agents manipulant les assets de marque

---

## État actuel

`[OBSERVED]` Le dépôt contient une image PNG et plusieurs vidéos, mais aucun
fichier ne les désigne comme logo, wordmark, bannière, avatar ou favicon
officiellement approuvé.

`[UNKNOWN]` Aucun système de lockup, zone de protection, taille minimale,
variante monochrome ou placement de logo n'est documenté.

`[UNKNOWN]` Des éléments approuvés peuvent exister en dehors du dépôt.

---

## Règle de non-invention

Tant qu'un asset n'est pas accompagné d'une provenance et d'un statut
d'approbation explicites :

- ne pas le présenter comme logo officiel
- ne pas dériver de lockup
- ne pas inventer de zone de protection
- ne pas inventer de taille minimale
- ne pas créer de favicon ou avatar dérivé
- ne pas supprimer ou remplacer l'asset

---

## Approbation requise

Un élément de marque ne peut devenir canonique qu'après documentation de :

- chemin du fichier
- rôle prévu
- auteur ou outil de provenance
- droits d'utilisation
- formats disponibles
- variantes approuvées
- décision d'approbation et date

Ces informations seront enregistrées dans le manifeste d'assets prévu pour un
lot ultérieur.

---

## Usage provisoire

Les compositions peuvent utiliser le nom typographique **Wet & Sea AI** sans
prétendre constituer un logo. Elles suivent les familles et contraintes de
`design_tokens.yaml`.

Une seule graphie, dans toutes les langues : `Wet & Sea AI`. Ne jamais composer
`Wet & Sea & IA` (double esperluette) ni `WetAndSeaAI` (agglutiné).

**WetSea Observatory** ne se compose jamais dans un visuel public : c'est le nom
du design system. **WetSeaTech** ne se compose que sur les supports de la boutique
Etsy, en endossement (« WetSeaTech, la boutique de Wet & Sea AI »), avec la police
et la palette principales — jamais avec une identité propre.

---

<a id="source-brand-mascot-md"></a>

## 📄 SOURCE: `brand/mascot.md`

# WetSea Observatory — Mascot System

**Status:** CANONICAL
**Scope:** Rôle, archétypes, comportement et contraintes des mascottes
**Authority:** `design_tokens.yaml` prévaut pour les tokens structurés
**Dependencies:** `design_tokens.yaml`, `brand/core.md`, `brand/forbidden.md`

<!-- Consolide identity/mascot.md, docs/mascot_systems.md,
prompts/mascot_prompt.md et knowledge.md. -->

---

## Rôle des mascottes

Les mascottes sont des **entités symboliques de navigation** — elles orientent l'audience à travers des récits techniques. Elles ne sont pas des personnages décoratifs ou des ambassadeurs de marque au sens commercial.

Elles représentent : observation · navigation · résilience · adaptation · compréhension des systèmes invisibles.

---

## Archétypes

| Archétype | Rôle narratif | Forme suggérée |
|---|---|---|
| **Beacon** | Guidance et intelligence du signal | Lanterne géométrique, faisceau directionnel |
| **Buoy** | Ancrage maritime et surveillance | Forme flottante, lest, capteur |
| **Node** | Interconnexion réseau | Nœud de câble, point de convergence |
| **Courier Vessel** | Mouvement sur les routes logistiques | Silhouette de navire stylisée |
| **Hybride Infrastructure-Vivant** | Pont poétique entre biologique et technique | Pieuvre analytique, raie manta abstraite, oiseau marin technique, navigateur solitaire |

---

## Qualités comportementales

Les mascottes doivent sembler :
- silencieuses
- intelligentes
- contemplatives
- expérimentées
- mobiles (mais non agitées)

---

## Règles de style

**Obligatoire :**
- Créées à partir de primitives géométriques — formes simples, architecturales
- Lisibles en monochrome, duotone, et palette principale
- Imprimables à toute taille (print-ready)
- Expression neutre, observatrice, intelligente
- Aucune pose dynamique ou action dramatique

**Interdit :**
- Yeux enfantins, proportions chibi, rendu toy-like
- Couleurs candy vives ou saturées
- Expressions hyper-actives ou commerciales
- Cartoon, kawaii, formes organiques molles
- Détails superflus non fonctionnels à la composition

---

## Compatibilité d'application

Chaque mascotte doit fonctionner dans :
- [ ] Monochrome (1 couleur)
- [ ] Duotone (deep-navy + off-white)
- [ ] Palette principale complète
- [ ] Petite taille (sticker, favicon)
- [ ] Grande taille (affiche, cover)

---

## Mot-clé pour prompts IA

```
"editorial symbolic entity, geometric primitives, restrained, intelligent,
monochrome-compatible, non-cartoon, maritime technical, print-ready,
neutral expression, silent and observant"
```

---

## Sujets préférés pour hybrides infrastructure-vivant

- Pieuvre analytique — câbles comme tentacules, corps = nœud de réseau
- Raie manta abstraite — silhouette de données en migration
- Oiseau marin technique — oiseau = vecteur de signal, plumes = lignes de route
- Navigateur solitaire — figure humaine stylisée, non réaliste, comme symbole de trajectoire

---

<a id="source-brand-visual_references-md"></a>

## 📄 SOURCE: `brand/visual_references.md`

# WetSea Observatory — Visual References Matrix

**Status:** CANONICAL REFERENCE
**Scope:** Références de langage visuel, sans imitation littérale
**Authority:** `design_tokens.yaml` et `brand/core.md`
**Consumers:** Direction artistique, prompts visuels et adaptateurs de canal

## Japanese Editorial Design
- Modular grids.
- Restrained asymmetry.
- Typographic silence.

## Marine Cartography
- Contour logic.
- Depth gradients.
- Coordinate realism.

## Scientific Instrumentation
- Label precision.
- Measurement cues.
- Data hierarchy.

## Documentary Photography
- Real textures.
- Atmospheric subtlety.
- Context-rich framing.

## Modernist Architecture
- Structural rhythm.
- Material sobriety.
- Functional composition.

## Mature Manga Minimalism
- Disciplined linework.
- Tonal economy.
- Narrative stillness.

---

<a id="source-brand-wetseatech_program-md"></a>

## 📄 SOURCE: `brand/wetseatech_program.md`

# Ligne cyber — Program Adapter

<!-- Nom de fichier conservé (wetseatech_program.md) pour ne pas casser les chemins
     référencés dans AGENTS.md et les outils. Le contenu n'est plus une sous-marque. -->

**Status:** ADAPTER
**Scope:** Contenus cyber, sécurité, infrastructure numérique et systèmes IA
**Authority:** `design_tokens.yaml`, `brand/core.md`, `brand/editorial_voice.md`,
`brand/forbidden.md`
**Consumers:** NotebookLM, vidéo, audio, slides et prompts visuels Wet & Sea AI

---

## Relation à la marque

Depuis le 2026-08-02, la cybersécurité, le cloud et les agents IA sont des sujets
principaux de **Wet & Sea AI** — plus le territoire d'une sous-marque. Ce fichier
n'est donc plus un adaptateur de marque mais un **adaptateur de densité** : il
décrit comment traiter un sujet technique dense, pas une identité distincte.

**WetSeaTech** ne désigne plus qu'une chose : la boutique Etsy, marque produit
endossée (« WetSeaTech, la boutique de Wet & Sea AI »), sans identité visuelle
propre.

La ligne applique les mêmes principes de calme, précision, retenue, documentation
et espace négatif. Son adaptation porte sur la densité technique et le sujet, pas
sur un changement de personnalité de marque.

---

## Périmètre

La ligne cyber couvre notamment :

- cybersécurité opérationnelle
- infrastructure internet et routage
- systèmes cloud et datacenters
- agents et systèmes d'intelligence artificielle
- gouvernance technique
- dépendances, incidents, traces et surfaces d'exposition

---

## Ton

- Analytique, précis et légèrement plus tendu que le registre général.
- Centré sur les mécanismes, dépendances et conséquences opérationnelles.
- Jamais militarisé, spectaculaire ou anxiogène par défaut.
- Jamais corporate-polished, gaming ou cyberpunk.

Le modèle narratif canonique reste Observation → Système → Implication.

---

## Adaptation visuelle

Utiliser la palette principale de `design_tokens.yaml`. Elle est la seule.

L'extension `color.extension_wetseatech` a été **retirée le 2026-08-02**. Deux jeux
de tokens coexistants avaient dérivé jusqu'au cyan néon `#00D4FF` (défaut P-01 de
l'audit UX), en contradiction directe avec la règle « no neon » de tous les autres
fichiers. Une densité plus sombre s'obtient par la superposition et le grain, pas
par un second jeu de couleurs.

Le muted cyan canonique reste l'unique accent cyan. Il est utilisé comme signal,
route, trace ou nœud, jamais comme lumière dominante.

---

## Éléments symboliques

Selon le sujet :

- lignes réseau, nœuds, câbles et chemins de routage
- traces, journaux, chronologies et états
- couches d'infrastructure et matrices
- arcs radar, géométrie d'onde et métaphores de profondeur
- zones d'exposition, flux interrompus et dépendances invisibles

Chaque élément doit expliquer une relation réelle. Les HUD décoratifs et la
simulation de complexité sont interdits.

---

## Mouvement

- Couper directement lors d'un changement d'idée.
- Utiliser un zoom discret uniquement pour révéler un détail.
- Alterner diagramme, situation réelle, contraste symbolique et conséquence.
- N'animer que ce qui clarifie un mécanisme.

Éviter les particules, rotations d'icônes, transitions corporate et effets
glitch sans fonction.

---

## Anti-drift

- [ ] Le contenu reste-t-il identifiable comme WetSea Observatory sans le label ?
- [ ] La tension provient-elle du système réel plutôt que d'effets visuels ?
- [ ] Le cyan fonctionne-t-il comme signal ?
- [ ] Les couches techniques expliquent-elles quelque chose ?
- [ ] Le visuel évite-t-il cyberpunk, gaming, stock corporate et clickbait ?
- [ ] L'adaptation respecte-t-elle `brand/forbidden.md` ?

---

<a id="source-brand_guidelines-md"></a>

## 📄 SOURCE: `brand_guidelines.md`

# Wet & Sea AI — Brand Guidelines
<!-- Naming rule 2026-08-02 : "Wet & Sea AI" est la marque publique unique. "WetSea Observatory" est le nom du design system. Source : design_tokens.yaml -->
<!-- LEGACY — Voir brand/core.md pour la version canonique consolidée. -->

## Positioning
A cinematic technical editorial observatory documenting hidden systems between oceans, infrastructures, and signals.

## Naming Consistency
<!-- Source canonique : design_tokens.yaml, bloc canonical_names — ne pas dupliquer -->
- Public brand name, single spelling in every language: **Wet & Sea AI**.
- Canonical domain: **wetandseaai.fr**.
- **WetSea Observatory** names the design system, never the brand. It is internal.
- **WetSeaTech** is the Etsy shop — an endorsed product brand ("WetSeaTech, the Wet & Sea AI shop"). It has no visual identity of its own.
- **WST** is the internal technical layer: wst-tech.org (endorsed watch site), repositories, `wst_` prefixes, Workers, labs. Never shown as a public brand.
- Deprecated, do not use: "Wet & Sea & IA", "WetAndSeaAI", "WST NETWORK", "WST Labs".

## Brand Character
- Calm and precise.
- Sophisticated but readable.
- Documentary, technical, timeless.
- Narrative without spectacle.

## Visual Principles
1. **Strong negative space**: breathable compositions and clear hierarchy.
2. **Subtle technical cues**: routes, annotations, instrumentation markers.
3. **Premium editorial minimalism**: restraint, coherence, typography discipline.
4. **Controlled chroma system**: deep navy, graphite, muted cyan, dark ocean green, off-white, mineral sand (plus brushed aluminum as material cue).

## Forbidden Directions
- Cyberpunk / RGB gaming / aggressive neon.
- Startup SaaS style, YouTube merch look, generic AI aesthetics.
- Crypto/web3 codes or cliché sci-fi tropes.
- Cartoon, kawaii, or hyper-expressive mascots.
- Graphic overload and oversized logos.

## Applications
The system must remain coherent for:
- posters,
- restrained apparel,
- premium mugs,
- minimal stickers,
- podcast covers,
- YouTube thumbnails,
- premium Etsy products,
- desk objects,
- editorial blog visuals.
Image generation
WST PRIORITY RULE
- Prefer omission over invention.
-Negative space is superior to fabricated detail.

---

<a id="source-branding-composition_rules-md"></a>

## 📄 SOURCE: `branding/composition_rules.md`

# Cinematic Composition Rules

## Foundational Grid
- Use 12-column editorial grid for horizontal formats.
- Reserve 25–40% negative space in every key visual.
- Anchor primary subject to thirds or asymmetrical balance points.

## Depth Strategy
1. Base layer: map or infrastructure context.
2. Mid layer: technical object (submarine cable, satellite, buoy, rack, vessel silhouette).
3. Top layer: concise annotations and title.

## Motion & Framing
- Prefer lateral and diagonal lines suggesting route continuity.
- Keep horizon low or absent to emphasize systemic abstraction.
- Use atmospheric grain very subtly (5–12% opacity equivalent).

---

<a id="source-branding-forbidden_styles-md"></a>

## 📄 SOURCE: `branding/forbidden_styles.md`

# Forbidden Aesthetics

## Absolute Prohibitions
- RGB neon glows.
- Cyberpunk city motifs.
- Gaming HUD clutter.
- Startup SaaS gradients and blobs.
- Crypto coins, chains, rockets, meme symbols.
- Childlike mascots or kawaii expressions.
- Generic synthetic AI textures.

## Visual Smells (Avoid)
- Excess lens flares.
- Hyper-sharp overprocessed imagery.
- Irrelevant glitch effects.
- Meme-style uppercase text overload.

---

<a id="source-branding-palettes-md"></a>

## 📄 SOURCE: `branding/palettes.md`

# Palettes
<!-- SOURCE CANONIQUE : design_tokens.yaml section `color` -->
<!-- Ce fichier est conservé pour compatibilité. Ne pas modifier les valeurs hex ici — -->
<!-- éditer uniquement dans design_tokens.yaml. -->

## Primary Palette (Mandatory)
| Token | Hex | Use |
|---|---|---|
| Deep Navy | `#0A1A2B` | Main backgrounds, ocean depth fields |
| Graphite | `#2A2F36` | Panels, typography contrast layers |
| Muted Cyan | `#5E8FA3` | Data highlights, route emphasis |
| Dark Ocean Green | `#1D3A3A` | Secondary depth zones, overlays |
| Off-White | `#F2F1EC` | Body text, light cards |
| Mineral Sand | `#C9BDA8` | Captions, subtle accents |

## Contrast Rules
- Never place muted cyan on mineral sand for small text.
- Maintain AA contrast minimum for interface text.
- Prefer off-white text on deep navy for long-form legibility.

---

<a id="source-channels-etsy-md"></a>

## 📄 SOURCE: `channels/etsy.md`

# WetSea Observatory — Canal Etsy
<!-- Enrichi depuis docs/etsy_branding.md -->

> Palette & typo → `design_tokens.yaml` | Interdits → `brand/forbidden.md`

---

## Familles de produits

| Famille | Format courant | Typographie |
|---|---|---|
| Affiches cartographiques d'archive | A3 / A2 / 18×24 in | Serif (Playfair Display) + Sans annotations |
| Prints d'étude d'infrastructure | A3 / A2 / 24×36 in | Sans technique (IBM Plex Sans) |
| Couvertures de carnets | 148×210 mm (A5), 210×297 mm (A4) | Serif ou Sans selon famille |
| Papeterie et stickers | Variable | Sans, lisible à petite taille |

---

## Formats de fichiers

- **Print haute résolution** : 300 dpi minimum
- **Espace colorimétrique** : CMJN pour impression, RVB pour aperçu numérique
- **Marges de sécurité** : 5 mm de fond perdu + 3 mm de marge intérieure

---

## Règles visuelles des listings

**Image hero :**
- Mockup neutre uniquement (cadre blanc, surface bois clair, fond uni)
- Aucun décor lifestyle (plantes, tasses, accessoires non approuvés)
- Éclairage plat ou légèrement latéral — pas de dramatisation

**Détails :**
- 2–4 images de détail rognées sur les zones d'intérêt (annotations, textures, typographie)
- Superpositions de légendes techniques en muted cyan / off-white

**Fond des mockups :**
- Blanc cassé (#F2F1EC compatible) ou béton clair
- Jamais de fond coloré ni sombre dans les photos produit

---

## Ton des textes listing

- Informatif, précis, non promotionnel
- Décrire le contenu technique et l'intention éditoriale
- Éviter : "magnifique", "incroyable", "parfait pour", langage marketing
- Préférer : "représentation de", "documentation de", "étude de", "carte de"

**Exemple de description :**
> "Archival study of the North Atlantic submarine cable network. Deep navy base with cartographic contour overlays and route annotations. Playfair Display typography. Print-ready at A2."

---

## Palette appliquée aux produits Etsy

| Élément | Token | Hex |
|---|---|---|
| Fond principal (print) | deep-navy | `#0A1A2B` |
| Texte long-form | off-white | `#F2F1EC` |
| Annotations / légendes | mineral-sand | `#C9BDA8` |
| Accents routes/data | muted-cyan | `#5E8FA3` |
| Zones secondaires | dark-ocean-green | `#1D3A3A` |

---

## Typographie Etsy

- **Titres affiches** : Playfair Display, graisse 600, tracking serré
- **Sous-titres / familles** : IBM Plex Sans, graisse 500
- **Annotations / coordonnées** : IBM Plex Mono, graisse 400
- Jamais plus de 2 familles par pièce

---

## Prompt opérationnel

→ `prompts/master_prompt.md`

---

## Interdits spécifiques Etsy

En complément de `brand/forbidden.md` :
- Mockups avec personnes (mains trop visibles, corps partiels en scène)
- Fonds de photos surchargés (bibliothèques, décors complexes)
- Polices décoratives ou fantaisie dans les titres produit
- Textes de description exagérément promotionnels

---

<a id="source-channels-podcast-md"></a>

## 📄 SOURCE: `channels/podcast.md`

# WetSea Observatory — Canal Podcast
<!-- Enrichi depuis docs/podcast_cover_prompts.md -->

> Palette & typo → `design_tokens.yaml` | Interdits → `brand/forbidden.md`

---

## Format technique

- **Dimensions** : 3000×3000 px (carré obligatoire pour les plateformes podcast)
- **Résolution** : 300 dpi
- **Format livrable** : JPEG ou PNG, profil couleur sRVB
- **Taille de fichier** : < 2 MB (contrainte Spotify / Apple Podcasts)

---

## Structure de composition

```
┌─────────────────────────────────┐
│                                 │
│      [espace négatif haut]      │
│                                 │
│    ┌───────────────────────┐    │
│    │   EMBLÈME CENTRAL     │    │
│    │   (sujet principal)   │    │
│    └───────────────────────┘    │
│                                 │
│  [anneau de données périphérique│
│   ou contexte cartographique]   │
│                                 │
│  TITRE · 3–4 MOTS MAX           │
│  sous-label optionnel           │
│                                 │
└─────────────────────────────────┘
```

- Emblème central : sujet fort, géométrique, une seule idée
- Anneau périphérique : lignes de route, cercles radar, marqueurs de données
- Espace négatif : minimum 30% de la surface totale
- Composition peut être légèrement asymétrique

---

## Typographie

- **Titre** : IBM Plex Sans, uppercase, graisse 600, 3–4 mots maximum
- **Nom de l'émission** : Playfair Display ou IBM Plex Sans, taille plus petite que le titre
- **Sous-label** : IBM Plex Mono pour numéros d'épisode, dates, saisons (optionnel)
- Taille lisible à 55×55 px (aperçu mobile dans les apps podcast)

---

## Palette appliquée

| Élément | Token | Hex |
|---|---|---|
| Fond | deep-navy | `#0A1A2B` |
| Emblème principal | off-white ou muted-cyan | `#F2F1EC` / `#5E8FA3` |
| Anneau de données | muted-cyan | `#5E8FA3` (opacité 40–70%) |
| Titre | off-white | `#F2F1EC` |
| Sous-label | mineral-sand | `#C9BDA8` |

---

## Prompt opérationnel

```
"Minimal cinematic podcast cover for WetSea Observatory, oceanic infrastructure motif,
cartographic textures, instrument-style labeling, restrained palette deep navy and muted cyan,
premium editorial finish, timeless design, central emblem with peripheral data ring,
3000x3000 composition, no neon, no cartoon, no gaming aesthetic."
```

→ Voir aussi `prompts/master_prompt.md` pour le template complet.

---

## Variantes par série

Si plusieurs séries coexistent, différencier par :
- Variation de l'emblème central (même ADN, sujet différent)
- Conservation stricte de la palette et du layout
- Sous-label de série en mineral-sand pour identification rapide

---

## Interdits spécifiques podcast

En complément de `brand/forbidden.md` :
- Microphone ou casque comme sujet principal (trop générique)
- Ondes sonores stylisées en vert/rouge (cliché podcast)
- Photo de visage ou portrait en fond
- Titre sur plus de 2 lignes
- Taille de texte illisible à 55 px

---

## Checklist de validation

- [ ] Lisible comme vignette à 55×55 px ?
- [ ] Maximum 4 mots de titre ?
- [ ] Emblème identifiable sans le texte ?
- [ ] Palette respectée (aucun cyan saturé, aucun neon) ?
- [ ] Espace négatif ≥ 30% ?

---

<a id="source-channels-youtube-md"></a>

## 📄 SOURCE: `channels/youtube.md`

# WetSea Observatory — Canal YouTube
<!-- Fusionne youtube/README.md + youtube/thumbnail_rules.md + prompts/youtube_thumbnail_prompt.md -->

> Palette & typo → `design_tokens.yaml` | Interdits → `brand/forbidden.md`

---

## Format technique

- **Ratio** : 16:9
- **Résolution recommandée** : 1280×720 px minimum, 1920×1080 px préféré
- **Marges de sécurité texte** : 5% depuis chaque bord
- **Espace sécurisé mobile** : conserver le sujet principal dans les 80% centraux

---

## Structure de composition

**Règle fondamentale : une seule idée par thumbnail.**

| Couche | Contenu |
|---|---|
| Fond | Contexte cartographique ou infrastructurel (deep navy base) |
| Milieu | Sujet technique principal (topologie réseau, datacenter, câble, satellite) |
| Premier plan | Texte titre (3–6 mots) + sous-label optionnel |

- Composition asymétrique — sujet ancré aux tiers, jamais centré
- Espace négatif délibéré : minimum 25% de surface non chargée
- Profondeur atmosphérique : grain éditorial 5–12% d'opacité

---

## Typographie

- **Fonte principale** : IBM Plex Sans (condensed autorisé pour les titres)
- **Fallback** : Space Grotesk, Inter
- **Titre** : 3–6 mots, uppercase, graisse 600–700
- **Sous-label** : optionnel, 1–2 mots, graisse 400, taille 60% du titre
- Maximum 2 familles de fontes par image
- Éviter les effets d'outline épais, les glows, les ombres dures

---

## Palette (extraite de `design_tokens.yaml`)

| Rôle | Hex | Usage |
|---|---|---|
| Fond | `#0A1A2B` (deep-navy) | Base 85–90% de la surface |
| Accent | `#5E8FA3` (muted-cyan) | Signal, lignes, nœuds — 10% max |
| Texte | `#F2F1EC` (off-white) | Titre principal |
| Secondaire | `#C9BDA8` (mineral-sand) | Sous-label, annotations |

---

## Éléments visuels récurrents

Privilégier selon le sujet. Ces éléments illustrent, ils ne sont pas le sujet :
- Cercles radar / sonar, géométrie de signal
- Grilles d'infrastructure, cartes de réseau, diagrammes d'architecture
- Frontières de confiance, plans de contrôle abstraits
- Lignes de câbles sous-marins, orbites de satellites (sujets occasionnels)
- Voiliers, parapente, plongée, silhouettes de navires, surface de mer, horizon
- Superpositions tactiques et données abstraites

Jamais : ports, terminaux à conteneurs, grues portuaires, routes maritimes,
logistique portuaire.

---

## Ton visuel

- Éditorial documentaire — pas clickbait
- Tension retenue — révèle quelque chose, ne crie pas
- Atmosphérique — grain, brume légère, lumière cinématographique douce
- Lisible en vignette mobile (tester à 120×67 px)

---

## Prompt opérationnel

→ `prompts/youtube_thumbnail_prompt.md`

---

## Interdits spécifiques YouTube

En complément de `brand/forbidden.md` :
- Flèches rouges pointant vers des éléments
- Visages en gros plan ou expressions réactives
- Texte en majuscules criard sur fond blanc
- Vignettes centrées avec sujet isolé sans contexte
- Thumbnails "before/after" avec comparaisons évidentes

---

## Titres

→ Règles complètes et exemples : `channels/youtube_titles.md`

Principes clés :
- 50–65 caractères, sentence case, mot-clé dans les 40 premiers caractères
- Formule privilégiée : fait opérationnel ou paradoxe système
- Interdit : majuscules abusives, formules clickbait, exagération

---

## Descriptions

Template minimal :
```
[Accroche 1–2 lignes — résumé analytique du sujet]
[Corps 3–5 lignes — angle, faits clés, enjeu]

— CHAPITRES —
00:00 Introduction
...

— SOURCES —
[Liens sources primaires]

— TAGS —
#cybersécurité #cloud #agentsIA #[sujet]
```

---

## Scripts

→ Template complet : `prompts/script_template.md`
→ Directives narratives : `notebooklm/directives.md`

Structure en 9 sections : Hook → Réalité observable → Mécanisme → Exemples
→ Contradictions → Conséquences → Limites → Décisions → Conclusion + CTA

---

## CTA approuvés

```
"Si vous voulez aller plus loin : [lien en description]."
"La prochaine vidéo couvre [X]. Vous pouvez vous abonner si ce territoire vous intéresse."
"Question ouverte : [formulation analytique]."
```

Interdit : "like et abonnez-vous", "smash the button", "si vous avez aimé".

---

## Langue de production

Définir explicitement dans chaque vidéo :
- **Français** : audience principale francophone, SEO FR
- **Anglais** : audience internationale, SEO EN
- Les deux langues peuvent coexister sur la chaîne mais chaque vidéo doit avoir
  un titre, une description et des tags cohérents avec sa langue principale.

---

## Anti-drift — questions de validation

- [ ] Miniature lisible à 120 px sur mobile ?
- [ ] Un seul concept principal visible dans la miniature ?
- [ ] Cyan utilisé comme signal, pas comme fond ?
- [ ] Aucun élément clickbait (flèche, visage choqué, rouge) ?
- [ ] Titre : 50–65 chars, sentence case, mot-clé en tête ?
- [ ] Description : chapitres + sources + tags remplis ?
- [ ] Script : 9 sections complètes, filtre anti-AI appliqué ?
- [ ] La composition miniature pourrait-elle s'appliquer à une série ?

---

<a id="source-channels-youtube_titles-md"></a>

## 📄 SOURCE: `channels/youtube_titles.md`

# WetSea Observatory — Règles de Titres YouTube

> Les titres sont aussi importants que les miniatures pour le CTR et le référencement.
> Un titre WetSea Observatory informe sans clickbait, intrigue sans surestimer.

---

## Principes fondamentaux

**Le titre doit :**
- révéler le sujet précis, pas le promettre vaguement
- compléter la miniature (titre ≠ répétition du texte de la miniature)
- fonctionner sans la miniature (accessible, compréhensible seul)
- être indexable : contenir les mots-clés naturels du sujet

**Le titre ne doit pas :**
- exagérer, dramatiser ou promettre l'incroyable
- utiliser des formules clickbait ("Vous ne croirez pas", "La vérité sur")
- utiliser des majuscules abusives (TOUT EN MAJUSCULES = interdit)
- dépasser 70 caractères (troncature YouTube sur mobile)

---

## Formats approuvés

### Format A — Fait opérationnel
Structure : [Sujet concret] + [conséquence ou échelle mesurable]
```
Ce modèle traite 15 millions de requêtes par jour. Sans journal d'audit.
400 câbles sous-marins font tenir l'internet mondial.
Un câble coupé en mer Rouge : ce qui se passe en 48 heures.
```

### Format B — Paradoxe ou tension système
Structure : [Affirmation contre-intuitive] + [précision]
```
Le cloud est physique. Voici où il se trouve vraiment.
Internet n'est pas dans les airs. Il est sous l'eau.
Ces dépendances n'apparaissent dans aucun inventaire. Elles portent toute la chaîne.
```

### Format C — Question analytique (usage modéré)
Structure : [Question concrète sur un système réel]
```
Comment fonctionne un nœud d'échange internet ?
Qui contrôle les câbles sous-marins ?
Pourquoi les datacenters sont-ils tous au bord de l'eau ?
```

### Format D — Incident ou cas réel
Structure : [Événement réel] + [angle analytique]
```
Quand un câble sous-marin se coupe : anatomie d'une coupure réseau.
La panne BGP de 2021 : comment Facebook a disparu d'internet.
xz/liblzma : la porte dérobée qui a failli entrer dans toutes les distributions.
```

---

## Règles SEO

- Placer le mot-clé principal dans les **40 premiers caractères**
- Mots-clés prioritaires WetSea Observatory :
  `cybersécurité · architecture cloud · agents IA · Zero Trust · datacenter · réseau internet · BGP · câbles sous-marins`
- Utiliser les termes techniques précis plutôt que leurs équivalents génériques
  (préférer "câble sous-marin" à "internet" ; "nœud BGP" à "réseau")
- Ne pas utiliser de hashtags dans le titre (les mettre en description)

---

## Longueur et capitalisation

| Règle | Valeur |
|---|---|
| Longueur maximale | 70 caractères |
| Longueur idéale | 50–65 caractères |
| Capitalisation | Première lettre du titre uniquement (sentence case) |
| Majuscules | Autorisées pour les acronymes (BGP, MCP, IETF) et noms propres uniquement |

---

## Relation titre / miniature

| Miniature montre | Titre doit |
|---|---|
| Sujet visuel fort (câble, topologie) | Donner l'angle analytique, pas redécrire l'image |
| Texte court (2–4 mots) | Développer et préciser |
| Sujet abstrait (réseau, données) | Ancrer dans le concret (chiffre, lieu, événement) |

---

## Exemples validés par thème

**Câbles sous-marins**
- `Les 400 câbles qui font tenir internet`
- `Quand un câble sous-marin se coupe : ce qui se passe vraiment`
- `AEConnect-1 : la route secrète entre New York et Dublin`

**Agents IA et gouvernance**
- `Un agent IA avec des droits d'admin : ce que ça ouvre vraiment`
- `MCP : le protocole qui donne des mains aux modèles`
- `Autoriser un projet IA : les 7 points qui bloquent en vrai`

**Cloud et datacenters**
- `Où se trouve vraiment le cloud ? Une géographie physique`
- `Pourquoi tous les datacenters sont au bord de l'eau`
- `Le réseau de câbles qui relie les hyperscalers`

**Cyber et réseaux**
- `BGP : le protocole qui fait tenir internet (et peut tout faire tomber)`
- `Panne Facebook 2021 : anatomie d'une disparition réseau`
- `Ce que révèle une carte des AS (systèmes autonomes)`

---

## Ce qu'il ne faut jamais écrire

```
❌ "La VÉRITÉ sur les câbles sous-marins (CHOQUANT)"
❌ "Ce que PERSONNE ne vous dit sur internet"
❌ "J'ai découvert quelque chose d'INCROYABLE"
❌ "Pourquoi TOUT VA S'EFFONDRER bientôt"
❌ "Le SECRET des datacenters révélé"
```

---

<a id="source-docs-clac_framework-md"></a>

## 📄 SOURCE: `docs/CLAC_FRAMEWORK.md`

# Compatibility Reference — CLAC Framework

**Status:** LEGACY ADAPTER
**Canonical source:** `frameworks/clac.md`

This path is retained temporarily for compatibility. Do not maintain a second
CLAC specification here.

---

<a id="source-docs-wst_repo_audit_prompt-md"></a>

## 📄 SOURCE: `docs/WST_REPO_AUDIT_PROMPT.md`

# WST Repository Audit & Completion Prompt

*For Claude Code / Codex / Gemini CLI*

## Mission

Audit the current repository and transform it into a complete, coherent and maintainable WetSeaTech NotebookLM Knowledge Base.

The objective is not to generate new ideas.

The objective is to:

- identify missing elements,
- remove redundancy,
- normalize structure,
- improve maintainability,
- improve NotebookLM performance,
- preserve WST editorial DNA,
- preserve source fidelity.

---

## Context

The repository contains a collection of: NotebookLM directives, documentary generation rules, video generation prompts, audio generation prompts, CLAC hook framework, WST visual identity, anti-AI language filters, anti-marketing rules, theme discovery systems, retention systems, learning systems, tutorial systems, think tank systems.

The repository evolved organically. The purpose of this audit is to transform it into a coherent production framework.

---

## Phase 1 — Repository Inventory

Analyze the complete repository.

Generate **Existing Assets** — list directives, prompts, templates, frameworks, visual guides, editorial guides.

For each asset identify: purpose — dependencies — overlap — redundancy.

---

## Phase 2 — Redundancy Detection

Identify: duplicate concepts (repeated anti-AI filters, repeated visual identity sections, repeated retention systems, repeated quality gates).

Detect: exact duplicates — semantic duplicates — conflicting versions.

Generate: Keep / Merge / Remove decisions.

---

## Phase 3 — Knowledge Consolidation

Build a canonical architecture.

**Target structure:**

```
/docs
  WST_MASTER_KNOWLEDGE_BASE.md
  01_CORE_PRINCIPLES.md
  02_EDITORIAL_DNA.md
  03_VISUAL_IDENTITY.md
  04_CLAC_FRAMEWORK.md
  05_VIDEO_AUDIO_RULES.md
  06_THEME_DISCOVERY_ENGINE.md
  07_VIDEO_GENERATION_ENGINE.md
  08_TUTORIAL_ENGINE.md
  09_THINK_TANK_ENGINE.md
  10_ANTI_AI_LANGUAGE.md
  11_QUALITY_CONTROL.md
  12_NOTEBOOKLM_QUICK_PROMPTS.md
```

Propose improvements if a better structure exists.

---

## Phase 4 — Gap Analysis

Identify missing capabilities across: NotebookLM (video, audio, source analysis, retention, learning) — Cyber (attack-chain storytelling, governance analysis, infrastructure narratives) — AI (agents, orchestration, model limitations, governance) — Travel (documentary storytelling, field reporting, hidden realities) — Think Tank (contradiction discovery, systems thinking, causal analysis).

Identify: weak areas — missing frameworks — missing prompts.

---

## Phase 5 — NotebookLM Optimization

Review all prompts. Optimize for: NotebookLM behavior — context retrieval — source grounding — instruction following.

Reduce: unnecessary verbosity — duplicated instructions — conflicting directives.

Preserve: WST identity — documentary style — reality-first philosophy.

---

## Phase 6 — Quality of Reasoning

Verify that all systems enforce:

- **Evidence First** — Facts before interpretation.
- **Epistemic Separation** — OBSERVED / INFERRED / HYPOTHETICAL / UNKNOWN.
- **Reflection Breakables** — Challenge consensus assumptions, dominant narratives, politically convenient explanations.
- **Systems Thinking** — Prioritize mechanisms, dependencies, tradeoffs, consequences.

---

## Phase 7 — WST Video System Review

Verify: CLAC Framework — Retention (curiosity loops, re-hooks, progressive reveals) — Learning (mental models, transferable lessons, operational understanding) — Visual Identity (dark navy, black, metallic blue, cyan accents, infrastructure aesthetics, minimalist manga influence, analytical documentary atmosphere).

---

## Phase 8 — Anti-AI Audit

Verify repository contains: Anti-Hype Filter — Anti-Marketing Filter — Anti-NotebookLM Filter — Anti-Repetition Filter — Reality Filter — Quality Gate.

Identify weaknesses. Propose improvements.

---

## Phase 9 — Generate Missing Content

If important components are missing, create them.

Requirements: concise — reusable — maintainable — NotebookLM optimized.

Avoid: unnecessary complexity — prompt bloat.

---

## Phase 10 — Final Deliverables

Generate:

1. **Repository Audit Report** — Strengths / Weaknesses / Gaps / Recommendations
2. **Proposed Final Architecture** — Directory tree / File purposes / Dependencies
3. **Consolidation Plan** — Merge / Remove / Rewrite / Create
4. **Missing Documents** — Full content drafts
5. **Final WST Score** — Score on coherence, maintainability, NotebookLM effectiveness, documentary quality, learning effectiveness, source fidelity, anti-AI robustness. With detailed justification.

---

## Success Criteria

The final repository should function as:

- a documentary production system,
- a NotebookLM operating system,
- a learning framework,
- a think tank framework,
- a tutorial generation framework,

while remaining: compact — maintainable — source-grounded — operational — consistent with WetSeaTech editorial identity.

---

<a id="source-docs-context-md"></a>

## 📄 SOURCE: `docs/context.md`

# Context

## Vision
Build a timeless editorial observatory brand around invisible maritime and digital infrastructures.

## Strategy
- Publish high-trust visuals with documentary authority.
- Translate technical systems into elegant narratives.
- Maintain coherent art direction across all channels.

## Inspirations
Japanese editorial layouts, marine maps, instrument panels, documentary stills, modernist architecture.

## Tone
Measured, technical, contemplative, global.

---

<a id="source-docs-editorial_direction-md"></a>

## 📄 SOURCE: `docs/editorial_direction.md`

# Editorial Direction

## Story Model
1. Observation (what is seen).
2. System (how it functions).
3. Implication (why it matters).

## Visual-Text Balance
- Headlines: concise and analytical.
- Captions: factual, non-sensational.
- Body: structured in technical narrative arcs.

---

<a id="source-docs-etsy_branding-md"></a>

## 📄 SOURCE: `docs/etsy_branding.md`

# Etsy Branding Direction

## Product Families
- Archival map posters.
- Infrastructure study prints.
- Notebook covers and stationeries.

## Listing Visual Rules
- Neutral mockups only.
- One hero image + detail crops.
- Technical caption overlays in muted cyan/off-white.

## Copy Tone
- Informative, precise, non-promotional.

---

<a id="source-docs-illustration_prompts-md"></a>

## 📄 SOURCE: `docs/illustration_prompts.md`

# Illustration Prompts

## Template
- Subject:
- Geographic context:
- Infrastructure type:
- Visual layer stack:
- Annotation style:
- Palette enforcement:
- Negative prompts:

## Example Prompt
"Editorial plate of a cloud infrastructure topology seen as an instrument panel, layered with contour lines, trust boundaries, and restrained instrument marks, deep navy and graphite base with muted cyan highlights, documentary realism, no neon, no cyberpunk, no gaming style."

## Second Example — sujet occasionnel
"Editorial plate of a submarine cable route traced across an abstract sea surface, layered with depth contours and signal paths, deep navy and graphite base with muted cyan highlights, documentary realism, no neon, no cyberpunk, no gaming style."

## Portée des sujets
Sujets principaux : cybersécurité, architectures cloud, agents IA, prospective.
Sujets occasionnels : câbles sous-marins, satellites.
Illustration complémentaire, jamais sujet : voiliers, parapente, plongée,
silhouettes de navires, surface de mer, horizon.
Jamais : ports, grues portuaires, terminaux à conteneurs, routes maritimes,
logistique portuaire.

---

<a id="source-docs-mascot_systems-md"></a>

## 📄 SOURCE: `docs/mascot_systems.md`

# Mascot Systems

## Purpose
Mascots are symbolic navigation entities that orient the audience through technical stories.

## System Types
- **Beacon**: guidance and signal intelligence.
- **Buoy**: maritime grounding and monitoring.
- **Node**: network interconnection.
- **Courier Vessel**: movement across logistics routes.

## Behavior Rules
- Static or minimally expressive.
- Built from geometric primitives.
- Always readable in one-color applications.

---

<a id="source-docs-podcast_cover_prompts-md"></a>

## 📄 SOURCE: `docs/podcast_cover_prompts.md`

# Podcast Cover Prompts

## Format
- 3000x3000 composition.
- Central emblem + peripheral data ring.
- Title maximum 4 words.

## Prompt Core
"Minimal cinematic podcast cover for WetSea Observatory, oceanic infrastructure motif, cartographic textures, instrument-style labeling, restrained palette, premium editorial finish, timeless design."

---

<a id="source-docs-system_prompts-md"></a>

## 📄 SOURCE: `docs/system_prompts.md`

# System Prompt Library
<!-- Fichier restructuré — voir START_HERE.md pour l'arbre de décision complet -->

> Consulter `START_HERE.md` pour la logique de routage complète par canal.

## Ordre de lecture obligatoire (tout agent)

1. `design_tokens.yaml` — palette, typo, espacements (source de vérité)
2. `brand/core.md` — positionnement et ADN
3. `brand/editorial_voice.md` — ton et narration
4. Le fichier de canal ci-dessous selon le livrable visé

## Prompts par canal

| Canal | Fichier de spec | Prompt opérationnel |
|---|---|---|
| YouTube thumbnail | `channels/youtube.md` | `prompts/youtube_thumbnail_prompt.md` |
| Etsy / affiche | `channels/etsy.md` | `prompts/master_prompt.md` |
| Podcast cover | `channels/podcast.md` | `prompts/master_prompt.md` |
| Mascotte | `brand/mascot.md` | `prompts/mascot_prompt.md` |
| Illustration générale | `brand/core.md` | `prompts/master_prompt.md` |
| Script / narration | `notebooklm/directives.md` | `examples/MLpromptsample.md` |
| Contenu WetSeaTech cyber | `brand/wetseatech_program.md` | `prompts/master_prompt.md` |
| Hook CLAC | `frameworks/clac.md` | `notebooklm/directives.md` |

## Prompt de base global

Fichier : `system_prompt.md` — à inclure comme baseline dans tous les contextes
où aucun prompt canal spécifique n'est disponible.

## Règle de priorité en cas de conflit

```
design_tokens.yaml > brand/core.md > fichier canal > system_prompt.md
```

---

<a id="source-docs-typography-md"></a>

## 📄 SOURCE: `docs/typography.md`

# Typography
<!-- Source canonique complétée — design_tokens.yaml section `typography` fait référence -->

## Font Stack

### Primary Serif — Autorité éditoriale
- **Recommandé** : Playfair Display
- **Alternatives** : Libre Baskerville · EB Garamond · Cormorant Garamond
- **Fallback système** : Georgia, 'Times New Roman', serif
- **Usage** : texte long-form (blog, articles), titres H1, affiches, descriptions Etsy premium
- **Mot-clé pour prompts IA** : *"Playfair Display editorial serif, elegant, restrained"*

### Primary Sans — Précision technique
- **Recommandé** : IBM Plex Sans *(open-source, préféré)*
- **Alternatives** : Space Grotesk · Inter · Suisse Int'l
- **Fallback système** : 'Helvetica Neue', Arial, sans-serif
- **Usage** : labels UI, métadonnées, texte de miniatures YouTube, annotations de données, tags courts
- **Mot-clé pour prompts IA** : *"IBM Plex Sans geometric sans, clean technical"*

### Monospace — Données techniques uniquement
- **Recommandé** : IBM Plex Mono
- **Alternatives** : Space Mono · JetBrains Mono
- **Fallback système** : 'Courier New', monospace
- **Usage** : coordonnées GPS, timestamps, IDs de câbles, annotations techniques de précision
- **Note** : usage très limité — élément de détail, jamais fonte principale

## Hierarchy

| Niveau | Famille | Graisse | Espacement | Style |
|---|---|---|---|---|
| H1 | Serif | 600–700 | Tracking serré (–0.02em) | Contraste élevé, autorité éditoriale |
| H2 / H3 | Sans | 500 | Standard (0 à +0.01em) | Structuré, retenu |
| Corps | Serif | 400 | Line-height 1.65 | 55–75 caractères par ligne |
| Légendes / metadata | Sans ou Mono | 400 | Uppercase autorisé | 0.75–0.875em relatif au corps |

## Rules

- Maximum 2 familles de fontes par composition.
- Éviter les fontes fantaisie, futuristes ou gaming.
- Éviter les effets d'outline épais, strokes lourds, glows.
- Longueur de ligne corps : 55–75 caractères.
- Titres courts (3–6 mots) en uppercase pour thumbnails et covers.
- Hiérarchie maximale : 1 titre fort + 1 sous-titre + 1 couche d'annotation.

---

<a id="source-docs-visual_identity-md"></a>

## 📄 SOURCE: `docs/visual_identity.md`

# Visual Identity System

## Identity Statement
Wet & Sea AI visualizes the hidden systems of the modern world through calm cinematic editorial language, using the WetSea Observatory design system.

## Components
- Oceanic cartographic textures.
- Infrastructure subjects (submarine cables, satellites, datacentres, networks).
- Marine and aerial imagery (sailing boats, paragliding, diving, vessel
  silhouettes) as COMPLEMENTARY ILLUSTRATION only — never as subject.
- Signal graphics (vectors, timing marks, IDs).
- Restrained typographic hierarchy.

---

<a id="source-examples-mlpromptsample-md"></a>

## 📄 SOURCE: `examples/MLpromptsample.md`

Use WetSea Observatory master directives as the authoritative reference.

Analyze all uploaded NotebookLM sources before generating the content.

First:
- identify the strongest operational angle,
- detect contradictions,
- identify hidden systems,
- prioritize measurable consequences,
- avoid generic summaries.

Then generate a cinematic editorial documentary script about:

[INSERT TOPIC]

The narrative must feel:
- intelligent,
- restrained,
- technically credible,
- atmospheric,
- cinematic,
- geopolitically aware.

FOCUS ON:
- invisible infrastructures,
- operational realism,
- cybersecurity and attack surface,
- cloud architectures,
- AI agents and their governance,
- forward-looking consequences,
- geopolitical implications,
- human dependency on technical systems.

Occasionally, when the sources call for it: submarine cables, satellites.
Never: ports, shipping lanes, maritime logistics.

NARRATIVE RULES:
- begin with tension or hidden dependency,
- maintain high information density,
- create narrative progression every 5–8 seconds,
- use concise and atmospheric language,
- connect systems together naturally,
- avoid mechanical structure,
- avoid repetitive transitions.

VISUAL THINKING:
The script should naturally suggest:
- cinematic documentary imagery,
- radar and sonar systems,
- technical overlays,
- maps and architecture diagrams,
- infrastructure visuals,
- atmospheric environments (sea surface, horizon, depth).

STYLE REFERENCES:
- NHK documentaries,
- Monocle magazine,
- Japanese editorial design,
- investigative documentary cinema,
- marine cartography,
- scientific instrumentation.

STRICTLY AVOID:
- clickbait YouTube language,
- startup/business tone,
- motivational phrasing,
- hype,
- AI cliché narration,
- exaggerated enthusiasm,
- generic summaries,
- repetitive wording.

FORBIDDEN EXPRESSIONS:
<!-- Liste bilingue — valide pour scripts en français et en anglais -->
EN: “It is important to note” · “In conclusion” · “Game changer” · “Revolutionary”
    “In today’s world” · “Amazing” · “Another important point” · “Moreover” · “Furthermore”
FR: “Il est important de noter” · “En conclusion” · “En résumé” · “De plus”
    “Dans un monde où” · “À l’ère de” · “Incroyable” · “Magique” · “Révolutionnaire”
    “Optimiser” · “Améliorer” · “Renforcer” · “Essentiel” · “Critique” (au sens vague)

REPLACE ABSTRACT LANGUAGE WITH:
- facts,
- operational consequences,
- physical systems,
- measurable impact,
- geopolitical tension.

OUTPUT FORMAT:
- documentary narration,
- cinematic pacing,
- natural spoken rhythm,
- premium editorial tone,
- highly coherent structure,
- minimal filler,
- emotionally restrained narration.

FINAL FEELING:
“A quiet technical investigation into the invisible systems shaping the modern world.”
---

<a id="source-examples-prompt_examples-md"></a>

## 📄 SOURCE: `examples/prompt_examples.md`

Create a premium cinematic YouTube thumbnail for a documentary-style video about:

[INSERT DOCUMENT / VIDEO TOPIC]

The thumbnail must visually represent:
- invisible systems,
- cybersecurity and trust boundaries,
- cloud architectures,
- AI agents and their control planes,
- technical exploration,
- forward-looking analysis,
- signals,
- modern technological ecosystems.

Occasionally (not by default): submarine cables, satellites.

STYLE:
A subtle fusion of:
- Japanese editorial design,
- marine cartography,
- scientific instrumentation,
- radar systems,
- cinematic documentary aesthetics,
- modernist architecture,
- mature manga minimalism.

MOOD:
Calm, intelligent, mysterious, restrained, cinematic, technical, timeless.

COMPOSITION:
- one strong visual subject,
- large negative space,
- asymmetrical editorial balance,
- cinematic framing,
- premium magazine cover aesthetic,
- subtle technical overlays,
- atmospheric depth.

VISUAL ELEMENTS:
Use only elements relevant to the topic. These are ILLUSTRATION, never the subject:
- radar circles,
- sonar geometry,
- datacenters,
- abstract cloud infrastructure,
- network meshes and architecture diagrams,
- submarine cables,
- satellites,
- ocean currents,
- depth contours,
- technical diagrams,
- navigation markers,
- signal geometry,
- sailing boats, paragliding, diving, vessel silhouettes,
- sea surface, horizon.

NEVER: port cranes, container terminals, shipping lanes, maritime logistics.

COLOR PALETTE:
<!-- Source canonique : design_tokens.yaml — ne pas modifier ces valeurs ici -->
- deep navy (#0A1A2B),
- graphite (#2A2F36),
- muted cyan (#5E8FA3),
- dark ocean green (#1D3A3A),
- off-white (#F2F1EC),
- mineral sand (#C9BDA8).

RULE:
90% dark neutral tones.
10% subtle cyan accents.

TEXT:
- minimal text only,
- 2–5 words maximum,
- uppercase preferred,
- elegant editorial typography,
- subtle placement.

TYPOGRAPHY:
Helvetica Now, IBM Plex Sans, Space Grotesk, Suisse Int’l.

TEXTURES:
- fog,
- brushed metal,
- editorial grain,
- marine textures,
- technical paper,
- atmospheric haze.

LIGHTING:
- soft cinematic lighting,
- muted highlights,
- subtle glow only,
- oceanic atmosphere.

ABSOLUTELY AVOID:
- clickbait YouTube style,
- gaming aesthetics,
- cyberpunk,
- RGB neon,
- red arrows,
- shocked faces,
- startup branding,
- generic AI visuals,
- crypto/web3 aesthetics,
- visual overload,
- childish energy.

The final image must feel like:
“A premium editorial documentary investigating the invisible systems shaping the modern world.”

OUTPUT:
16:9
ultra clean
high readability
cinematic documentary quality
premium editorial thumbnail
---

<a id="source-frameworks-clac-md"></a>

## 📄 SOURCE: `frameworks/clac.md`

# WetSea Observatory — CLAC Hook Framework

**Status:** CANONICAL FRAMEWORK
**Scope:** Hooks vidéo, audio, podcast, présentation et documentaire
**Authority:** `brand/editorial_voice.md` pour le ton éditorial
**Dependencies:** `brand/core.md`, `brand/editorial_voice.md`

## Purpose

The CLAC method is a hook architecture designed to maximize attention during the first 10–20 seconds of a video, audio overview, podcast, presentation, or documentary.

Its purpose is not clickbait.

Its purpose is to:

- establish relevance quickly,
- create curiosity,
- challenge assumptions,
- open an information gap,
- create a reason to continue watching.

The viewer should immediately think:

- "This concerns me."
- "I did not expect that."
- "I want to understand why."

---

## CLAC Overview

CLAC stands for:

**C — Context** | **L — Lean In** | **A — Arrest** | **C — Counterdirection**

---

## C — Context

Explain immediately: what the subject is, what system is concerned, what is happening, what the discussion is about.

**Duration:** 3–5 seconds.

**Avoid:** greetings, long introductions, historical context, channel presentation.

| Good | Bad |
|---|---|
| "Most companies believe AI increases productivity." | "Today we are going to discuss artificial intelligence and how it is transforming the world." |


## L — Lean In

Create relevance. The viewer must understand why the topic matters.

**Possible triggers:** hidden risk, hidden cost, hidden dependency, missed opportunity, operational consequence.

The audience should feel: *"This affects me."*

| Good | Bad |
|---|---|
| "The problem is that most of those productivity gains disappear once workflows become complex." | "AI is becoming increasingly important in modern organizations." |

---

## A — Arrest

Interrupt the expected interpretation. Introduce friction. Break a common assumption. Create a contradiction.

**Possible tools:** paradox, surprising evidence, operational failure, hidden mechanism.

The audience should think: *"Wait."*

| Good | Bad |
|---|---|
| "The biggest limitation is not the model." | "However, there are also challenges." |

---

## C — Counterdirection

Reveal a more accurate explanation. Redirect attention toward the real mechanism. Move from symptom to cause. Move from surface narrative to system reality.

| Good | Bad |
|---|---|
| "The real constraint is context management. When context collapses, productivity collapses." | "There are many factors to consider." |

---

## CLAC Structure Template

```
CONTEXT          → What is happening?
LEAN IN          → Why should the audience care?
ARREST           → Which assumption is wrong?
COUNTERDIRECTION → What is the deeper explanation?
```


---

## Examples

### Claude Code

**C** Most developers think Claude Code is primarily a coding tool.
**L** That assumption influences how teams measure productivity gains.
**A** The largest gains often do not come from code generation.
**C** They come from context preservation, repository understanding and workflow orchestration.

### Cybersecurity Governance

**C** Many organizations continue to treat cybersecurity governance as a compliance exercise.
**L** That choice directly affects risk visibility and operational resilience.
**A** The problem is not excessive governance.
**C** The problem is static governance disconnected from operational reality.

### AI Agents

**C** AI agents are becoming increasingly capable of executing multi-step workflows.
**L** Organizations expect automation gains across many business functions.
**A** Capability is not the primary challenge.
**C** Reliability, orchestration and governance become the limiting factors.

---

## WetSea Observatory CLAC Rules

**Always:** start with reality — move quickly — challenge assumptions — reveal mechanisms.

**Prefer:** contradictions — hidden dependencies — operational consequences — measurable effects.

**Avoid:** hype — marketing — emotional amplification — generic introductions.

---

## CLAC Quality Checklist

A CLAC hook is successful if the audience immediately understands:

- ✓ What is being discussed
- ✓ Why it matters
- ✓ Why common understanding is incomplete
- ✓ What deeper mechanism will be revealed

If one of these elements is missing, rewrite the hook.

---

## WetSea Observatory Principle

A good hook does not create artificial suspense.

A good hook creates a legitimate knowledge gap.

The audience stays because understanding is incomplete — not because information is being withheld.

---

<a id="source-identity-brand_core-md"></a>

## 📄 SOURCE: `identity/brand_core.md`

# Compatibility Reference — Brand Core

**Status:** LEGACY ADAPTER
**Canonical source:** `brand/core.md`

This path is retained temporarily so existing notebooks and links do not fail
during the staged migration. Do not add or maintain brand rules here.

---

<a id="source-identity-forbidden-md"></a>

## 📄 SOURCE: `identity/forbidden.md`

# Compatibility Reference — Forbidden Aesthetics

**Status:** LEGACY ADAPTER
**Canonical source:** `brand/forbidden.md`

This path is retained temporarily so existing notebooks and links do not fail
during the staged migration. Do not add or maintain prohibitions here.

---

<a id="source-identity-mascot-md"></a>

## 📄 SOURCE: `identity/mascot.md`

# Compatibility Reference — Mascot System

**Status:** LEGACY ADAPTER
**Canonical source:** `brand/mascot.md`

This path is retained temporarily so existing notebooks and links do not fail
during the staged migration. Do not add or maintain mascot rules here.

---

<a id="source-knowledge-md"></a>

## 📄 SOURCE: `knowledge.md`

# Wet & Sea AI — Knowledge Base

> Marque publique unique : **Wet & Sea AI** (wetandseaai.fr).
> **WetSea Observatory** est le nom du design system, jamais affiché au public.
> **WetSeaTech** est la boutique Etsy endossée. **WST** est la couche technique
> interne (wst-tech.org, dépôts, préfixes `wst_`).
> Source canonique : `design_tokens.yaml`, bloc `canonical_names`.

## IDENTITÉ

Wet & Sea AI explore :
- cybersécurité,
- architectures cloud,
- agents IA et systèmes autonomes,
- prospective technologique,
- infrastructures invisibles,
- systèmes techniques contemporains.

Sujets OCCASIONNELS (traités comme sujet à part entière quand l'actualité le justifie) :
- câbles sous-marins,
- satellites.

Registre d'ILLUSTRATION COMPLÉMENTAIRE — jamais un sujet, seulement une image :
- voiliers, parapente, plongée, silhouettes de navires,
- mer, profondeur, horizon.

La mer est une MÉTAPHORE (profondeur, infrastructure invisible, observation), pas un
programme éditorial. Retirés le 2026-08-02 : ports, routes maritimes, logistique
portuaire, trafic maritime — hors périmètre de la chaîne.

La marque doit évoquer :
- calme,
- précision,
- navigation,
- intelligence discrète,
- observation,
- exploration moderne.

Le ton :
> « explorateur technique du monde contemporain ».

## INTERDIT ABSOLU

NE JAMAIS ressembler à :
- cyberpunk gaming,
- startup SaaS,
- merch YouTube,
- esthétique IA générique,
- crypto/web3,
- science-fiction cliché,
- RGB gaming,
- néons agressifs,
- mascottes kawaii,
- logos énormes,
- surcharge graphique.

## ADN VISUEL

Fusion subtile de :
- cartes marines anciennes,
- design éditorial japonais,
- architecture moderniste,
- instrumentation scientifique,
- signalétique portuaire,
- aviation/naval technique,
- manga adulte minimaliste,
- documentaire contemporain,
- interfaces radar abstraites,
- schémas techniques élégants.

Toujours privilégier :
- espace négatif,
- compositions respirantes,
- détails techniques subtils,
- hiérarchie éditoriale,
- sophistication calme,
- minimalisme narratif.

## PALETTE

Couleurs principales :
- bleu nuit profond,
- graphite,
- cyan discret,
- vert océan sombre,
- aluminium mat,
- blanc cassé,
- sable minéral.

Accent lumineux :
- cyan technique discret uniquement.

Textures :
- papier technique,
- métal brossé,
- brouillard,
- grain éditorial,
- carte marine,
- surface océanique minimaliste.

## MASCOTTES

Les mascottes doivent représenter :
- observation,
- navigation,
- résilience,
- adaptation,
- compréhension des systèmes invisibles.

Préférer :
- pieuvre analytique,
- raie manta abstraite,
- oiseau marin technique,
- navigateur solitaire,
- créatures hybrides infrastructure + vivant.

Elles doivent sembler :
- silencieuses,
- intelligentes,
- contemplatives,
- expérimentées,
- mobiles.

Jamais :
- cartoon,
- enfantines,
- hyper expressives,
- commerciales.

## STYLE D’ILLUSTRATION

Toujours :
- style éditorial premium,
- composition claire,
- lumière douce,
- détails fins,
- lignes techniques discrètes,
- esthétique documentaire,
- influence manga mature subtile,
- rendu intemporel et crédible.

Les visuels doivent sembler :
- haut de gamme,
- éditoriaux,
- culturellement intelligents,
- sobres,
- techniquement cultivés.

## APPLICATIONS

Les designs doivent fonctionner pour :
- affiches,
- vêtements sobres,
- mugs premium,
- stickers minimalistes,
- podcast covers,
- miniatures YouTube,
- Etsy premium,
- objets de bureau,
- blog éditorial.

## SLOGANS

Courts, élégants, contemplatifs.

Exemples :
Baseline canonique (2026-08-02) — source : `design_tokens.yaml` :
- **Reading Invisible Systems** (EN) / **Lire les systèmes invisibles** (FR)

Slogans de campagne, jamais en position de baseline :
- Observe The Current
- Signals Across Oceans
- Between Sea And Signal
- Quiet Systems
- Technical Cartographies
- Routes Beneath The Surface

---

<a id="source-maintenance-migration_map-md"></a>

## 📄 SOURCE: `maintenance/migration_map.md`

# WetSea Observatory — Migration Map

**Status:** MAINTENANCE
**Scope:** Lots A et B — structure, identité canonique, adaptateur WetSeaTech et CLAC
**Baseline commit:** `a454b4b3d78f5d1d45cf6957c89fd49574959e59`
**Deletion policy:** aucun fichier legacy ni asset binaire supprimé dans ces lots

---

## Principes

1. `design_tokens.yaml` reste la source de vérité technique.
2. Les documents sous `brand/` deviennent les sources canoniques d'identité.
3. Les anciens chemins canoniques restent temporairement sous forme de références
   de compatibilité.
4. Les fichiers legacy ne sont pas supprimés avant une validation de contenu.
5. Les assets binaires ne sont ni déplacés, ni renommés, ni modifiés.
6. Les audits et fichiers legacy ne doivent pas être considérés comme canoniques.

---

## Migrations réalisées — Lot A

| Source | Cible | Traitement |
|---|---|---|
| `identity/brand_core.md` | `brand/core.md` | Déplacé et enrichi avec le contenu unique des résumés legacy |
| `identity/forbidden.md` | `brand/forbidden.md` | Déplacé ; reste la liste normative unique |
| `identity/mascot.md` | `brand/mascot.md` | Déplacé ; conserve les archétypes et contraintes |
| `references/visual_references.md` | `brand/visual_references.md` | Déplacé et classé comme référence canonique |
| `docs/editorial_direction.md` | `brand/editorial_voice.md` | Modèle narratif consolidé dans un nouveau document canonique |
| `docs/context.md` | `brand/core.md` | Vision et stratégie intégrées |
| `docs/visual_identity.md` | `brand/core.md` | Déclaration et composants déjà couverts, vérifiés |
| `branding/composition_rules.md` | `brand/core.md` | Grille, profondeur et cadrage intégrés |
| `brand_guidelines.md` | `brand/core.md` | Positionnement et priorité omission/invention intégrés |
| `knowledge.md` | `brand/core.md`, `brand/editorial_voice.md`, `brand/mascot.md` | Contenu unique réparti ; fichier conservé en legacy |

---

## Migrations réalisées — Lot B

| Source | Cible | Traitement |
|---|---|---|
| `notebooklm/WetSeaTech_Graphic_Identity_NotebookLM.md` | `brand/wetseatech_program.md` | Règles de programme consolidées sans créer une marque concurrente |
| `docs/CLAC_FRAMEWORK.md` | `frameworks/clac.md` | Déplacé et déclaré framework canonique |
| `notebooklm/clap.md` | `frameworks/clac.md` | Vérifié comme duplication sémantique ; ancien chemin converti en référence de compatibilité |

---

## Références de compatibilité

Les chemins suivants sont conservés temporairement et ne doivent plus recevoir
de règles :

- `identity/brand_core.md`
- `identity/forbidden.md`
- `identity/mascot.md`
- `references/visual_references.md`
- `docs/CLAC_FRAMEWORK.md`
- `notebooklm/clap.md`
- `notebooklm/WetSeaTech_Graphic_Identity_NotebookLM.md`

---

## Fichiers legacy conservés pour les lots suivants

- `brand_guidelines.md`
- `knowledge.md`
- `docs/context.md`
- `docs/editorial_direction.md`
- `docs/visual_identity.md`
- `docs/mascot_systems.md`
- `branding/composition_rules.md`
- `branding/forbidden_styles.md`
- `branding/palettes.md`
- `docs/typography.md`
- fichiers legacy de canal et de prompts

Leur suppression éventuelle nécessite une nouvelle validation après migration
des canaux, prompts, templates et du pipeline NotebookLM.

---

## Assets binaires

Les six fichiers PNG/MP4 existants restent inchangés. Leur rôle, provenance,
licence et statut d'approbation demeurent `[UNKNOWN]`.

---

## Étapes non incluses

- manifeste NotebookLM
- nouveau build généré
- prompts article, tutoriel, learning notes et think tank
- canaux website, WordPress et LinkedIn
- suppression des doublons legacy
- déplacement ou classification des assets binaires

Le fichier legacy `MASTER_DIRECTIVES.md` est seulement régénéré avec le script
existant afin de rester cohérent avec les sources Markdown de ce lot. Son
remplacement par un pack sélectif piloté par manifeste reste hors périmètre.

---

<a id="source-notebooklm-readme-md"></a>

## 📄 SOURCE: `notebooklm/README.md`

# NotebookLM Brand Kit

This folder contains temporary NotebookLM adapters for WetSea Observatory.
Canonical identity now lives under `brand/`.

## Files
- `../brand/wetseatech_program.md`: canonical WetSeaTech program adapter.
- `../frameworks/clac.md`: canonical CLAC hook framework.
- `directives.md`: current editorial and production directives pending the later
  NotebookLM prompt migration.
- `WetSeaTech_Graphic_Identity_NotebookLM.md`: compatibility reference only.

## Quick usage
1. Upload `../brand/core.md`, `../brand/editorial_voice.md` and the relevant
   channel or program adapter.
2. Add `../brand/wetseatech_program.md` only for cyber/tech/security work.
3. Add `../frameworks/clac.md` when hooks are required.
4. Add topic-specific sources and representative examples.

---

<a id="source-notebooklm-wetseatech_graphic_identity_notebooklm-md"></a>

## 📄 SOURCE: `notebooklm/WetSeaTech_Graphic_Identity_NotebookLM.md`

# Compatibility Reference — WetSeaTech Visual Adapter

**Status:** LEGACY ADAPTER
**Canonical source:** `brand/wetseatech_program.md`

The WetSeaTech visual rules now live in the canonical program adapter and inherit
from:

1. `design_tokens.yaml`
2. `brand/core.md`
3. `brand/editorial_voice.md`
4. `brand/forbidden.md`

Use `brand/wetseatech_program.md` in new NotebookLM projects. This path remains
temporarily available so existing notebooks do not fail.

---

<a id="source-notebooklm-clap-md"></a>

## 📄 SOURCE: `notebooklm/clap.md`

# Compatibility Reference — CLAC Framework

**Status:** LEGACY ADAPTER
**Canonical source:** `frameworks/clac.md`

The former content of this file duplicated the CLAC specification. It has been
consolidated into the canonical framework. Keep this file only for temporary
NotebookLM and link compatibility; do not maintain a second CLAC version here.

---

<a id="source-notebooklm-directives-md"></a>

## 📄 SOURCE: `notebooklm/directives.md`

# WetSeaTech — Complete NotebookLM Master Directives

Unified master configuration for NotebookLM.

## Purpose
Maintain editorial, analytical, visual, and audio consistency across video, podcast, PPT, and long-form content production.

> Canonical identity note: WetSeaTech directives operate under the WetSea Observatory brand system.

## ROLE
You are an independent operational analyst and technical educator.

Analyze:
- structures,
- incentives,
- contradictions,
- operational consequences.

Avoid:
- ideology,
- empty rhetoric,
- corporate filler,
- artificial AI tone.

## OBJECTIVE
Generate:
- high-density video scripts,
- natural audio narration,
- analytical content,
- operationally useful explanations.

Output must:
- remain grounded,
- stay fluid,
- avoid repetition,
- preserve WetSeaTech identity.

## CORE METHOD
1. Identify multiple possible angles.
2. Select the strongest demonstrable angle.
3. Prefer operational reality over narrative.
4. Preserve complexity when necessary.
5. Separate facts from interpretation.

## SCIENTIFIC RIGOR
Separate explicitly:
- `[OBSERVED]`: measurable facts.
- `[INFERRED]`: logical extrapolations.
- `[HYPOTHETICAL]`: plausible but unproven ideas.
- `[IDEOLOGICAL]`: politically/emotionally framed claims.

Consensus alone is not evidence.

## ANTI-AI LANGUAGE FILTER
Forbidden expressions:
- il est important de noter,
- en conclusion,
- en résumé,
- de plus,
- dans un monde où,
- à l’ère de,
- incroyable,
- magique,
- révolutionnaire,
- moreover,
- furthermore,
- game changer,
- in conclusion.

Avoid vague words:
- important,
- essentiel,
- critique,
- optimiser,
- améliorer,
- renforcer.

Prefer:
- measurable effects,
- direct consequences,
- concrete examples.

## ANTI-REPETITION RULES
- Avoid repetitive paragraph openings.
- Avoid rephrasing the same point with different words.
- Use uneven rhythm.
- Use direct cuts instead of mechanical transitions.
- Remove any sentence that could apply to any topic.

## STYLE DIRECTIVE
Tone:
- calm,
- analytical,
- sharp,
- restrained irony allowed.

Humor:
- subtle,
- reality-based,
- never cartoonish.

Examples:
- "Tout fonctionne. Sur le papier."
- "Le problème apparaît ici."
- "Le système tient. Jusqu’au moment où il devient réel."

## VIDEO STRUCTURE
1. Hook
2. Observable reality
3. Mechanism explanation
4. Concrete examples
5. Contradictions
6. Consequences
7. Limits
8. Decisions
9. Ending + CTA

Each section must add value, reveal something, or enable action.

## AUDIO RULES
- Natural spoken rhythm.
- Short-to-medium sentences.
- Breathing space allowed.
- No academic overload.
- No nested explanations.

## VIDEO DYNAMICS
- New idea every 5–8 seconds.
- No recap blocks.
- No decorative transitions.
- Prefer diagrams and symbolic contrasts.

## VISUAL CONTINUITY
Maintain:
- technical documentary style,
- cyber-infrastructure aesthetics,
- restrained manga-inspired framing,
- analytical atmosphere,
- cinematic tension with restraint.

## COLOR PALETTE
<!-- Source canonique : design_tokens.yaml — valeurs hex ci-dessous -->
Prefer:
- deep navy `#0A1A2B` (main background)
- graphite `#2A2F36` (secondary panels)
- muted cyan `#5E8FA3` (accent only — 10% max, never dominant)
- off-white `#F2F1EC` (text on dark)

Avoid:
- oversaturated colors,
- random palettes,
- aggressive neon (`#00D4FF` or any cyan with saturation > 80% — forbidden),
- deep black as sole background (prefer deep navy for editorial warmth).

## TYPOGRAPHY
- geometric sans serif,
- condensed styles,
- high readability,
- minimal effects.

Avoid:
- gaming/cartoon fonts,
- heavy glow effects.

## FRAMING
Prefer:
- asymmetrical compositions,
- layered depth,
- close technical details,
- deliberate negative space.

Avoid:
- static centered layouts,
- cluttered compositions.

## VISUAL ELEMENTS
Recurring elements:
- grids,
- maps,
- wave/radar metaphors,
- infrastructure overlays,
- tactical UI layers,
- diagrams,
- layered systems.

## EDITING STYLE
- Direct cuts.
- Minimal transitions.
- Visual contrast between scenes.
- No decorative animations.

## VISUAL HUMOR
Allowed:
- subtle absurdity,
- symbolic mismatch,
- understated irony.

Forbidden:
- exaggerated memes,
- cartoon reactions,
- slapstick humor.

## VISUAL FILTER
Reject visuals if they:
- look like generic stock footage,
- feel like mainstream clickbait thumbnails,
- break palette rules,
- overuse effects.

## SMART CTA RULES
CTA must:
- remain short,
- stay natural,
- avoid marketing language.

Forbidden:
- "like and subscribe",
- "smash the button".

Preferred:
- practical action,
- reflective observation.

## QUALITY FILTER
Reject output if:
- transitions feel mechanical,
- examples are generic,
- argument could apply to any topic,
- text sounds like consultancy filler,
- visuals feel generic.

## EXECUTION TEMPLATE
Use WetSeaTech master directives as authoritative reference.
Generate:
- video script,
- audio narration.

Focus on:
- strongest demonstrable angle,
- operational realism,
- visual continuity,
- concrete examples.

## Recommended usage
1. Upload this document into NotebookLM.
2. Keep it permanently inside the notebook.
3. Use short execution prompts in chat.
4. Add representative WetSeaTech scripts and visuals as references.

---

<a id="source-prompts-mascot_prompt-md"></a>

## 📄 SOURCE: `prompts/mascot_prompt.md`

# Mascot System Prompt

Create mascots as **editorial symbolic entities**, not cartoon characters.

## Mascot Direction
- Archetypes: beacon, buoy, vessel silhouette, signal node, seabird glyph.
- Expression: neutral, observant, intelligent.
- Geometry: minimal, architectonic, print-ready.

## Rules
- No childish eyes, chibi proportions, or toy-like rendering.
- No bright candy colors.
- Must work in monochrome, duotone, and primary palette.

---

<a id="source-prompts-master_prompt-md"></a>

## 📄 SOURCE: `prompts/master_prompt.md`

# Wet & Sea AI — Prompt Maître
<!-- Naming rule 2026-08-02. Couleurs alignées sur design_tokens.yaml. -->

Create a premium editorial illustration for **Wet & Sea AI**, following the WetSea Observatory design system.

## STYLE
Japanese editorial design, marine cartography, scientific instrumentation, modernist architecture, documentary aesthetics, mature manga minimalism, elegant technical diagrams.

## MOOD
Calm, intelligent, contemplative, cinematic, timeless.

## VISUAL LANGUAGE
Strong negative space, restrained composition, subtle technical annotations, elegant line systems, quiet cyan highlights, minimal but emotionally deep.

## COLORS
<!-- Source canonique : design_tokens.yaml — valeurs hex obligatoires pour outils IA image -->
Deep navy #0A1A2B · Graphite #2A2F36 · Muted cyan #5E8FA3
Dark ocean green #1D3A3A · Off-white #F2F1EC · Mineral sand #C9BDA8
Rule: 90% dark neutral tones, 10% muted cyan accents maximum.

## SUBJECT
[INSERT SUBJECT]
<!-- Exemples de sujets adaptés — le SUJET vient du périmètre éditorial de la
     chaîne : cybersecurity, cloud architecture, AI agents, technology foresight.
  - "Autonomous agent escaping its sandbox — abstract containment diagram"
  - "BGP routing failure cascade — abstract network diagram"
  - "Hyperscaler datacenter geography — Atlantic coast"
  - "Identity federation across cloud providers — trust boundary map"
  - "Agentic loop as a self-correction device — iteration timeline"
  - "Technical debt accumulating without a line of code changing"

     Sujets OCCASIONNELS, admis quand l'actualité le justifie :
  - "North Atlantic submarine cable network — abstract route topology"
  - "Low-earth-orbit satellite constellation — coverage geometry"

     JAMAIS un sujet : ports, routes maritimes, logistique portuaire, trafic
     maritime. Retirés le 2026-08-02 — hors périmètre de la chaîne.
-->

## OPTIONAL ELEMENTS
Use only elements relevant to the subject. These are ILLUSTRATION, never the subject:
Sonar circles · radar geometry · navigation markers · coordinate grids · depth contours
signal paths · ocean currents · underwater cables · satellite orbits
abstract cloud infrastructure · network meshes · architecture diagrams
sailing boats · paragliding · diving · vessel silhouettes · sea surface · horizon
NEVER: port cranes, container terminals, shipping lanes, maritime logistics.

## NEGATIVE PROMPT
<!-- Inclure dans les outils qui supportent les negative prompts (Midjourney, Flux, SD) -->
→ See `prompts/negative_prompt_standard.md` for the full list.
Summary: neon, cyberpunk, gaming, RGB, glitch, startup branding, cartoon, kawaii, clickbait,
shocked face, red arrows, stock photography, corporate aesthetic, saturated gradients.

## MASCOT CONSTRAINTS (if mascot is used)
→ See `brand/mascot.md` for full specification.
Summary: silent, intelligent, symbolic, restrained, observant, non-cartoon, geometric primitives.

## OUTPUT FORMAT
- Follow the destination channel spec:
  - YouTube thumbnails: `channels/youtube.md` (16:9, safe margins)
  - Etsy / print: `channels/etsy.md` (300dpi, CMYK)
  - Podcast cover: `channels/podcast.md` (3000×3000px)
- Transparent background only when explicitly required.
- Print-ready export when the deliverable is intended for print.

## TOOL-SPECIFIC PARAMETERS
### Midjourney
```
[your prompt above] --ar 16:9 --style raw --v 6.1 --no neon cyberpunk gaming RGB
```
### DALL-E / GPT-4o
Use the full prose prompt above. Specify aspect ratio in the request.
### Flux / Stable Diffusion
Add negative prompt from `prompts/negative_prompt_standard.md`.
### Ideogram / Recraft
Specify font family: IBM Plex Sans for any text elements.

---

<a id="source-prompts-negative_prompt_standard-md"></a>

## 📄 SOURCE: `prompts/negative_prompt_standard.md`

# WetSea Observatory — Negative Prompt Standard
<!-- Source unique pour tous les prompts IA image utilisant un champ negative prompt -->
<!-- Compatible : Midjourney (--no), Flux, Stable Diffusion, Ideogram, Recraft, etc. -->

## Negative Prompt Complet

```
neon, cyberpunk, gaming, RGB lighting, RGB neon glow, glitch effect, lens flare,
startup branding, SaaS aesthetic, gradient blob, tech startup visuals,
stock photography, corporate aesthetic, office setting, generic business visuals,
cartoon, kawaii, chibi, anime action lines, hyper expressive mascot,
hyper saturated colors, vivid primary colors, rainbow palette, random color scheme,
crypto symbols, bitcoin, blockchain, web3 aesthetic, rocket, moon, meme symbols,
futuristic fonts, gaming fonts, cyberpunk fonts, heavy glow text, outlined text,
clickbait, shocked face, reaction face, red arrows, yellow circles, text overload,
overprocessed HDR, over-sharpened, excessive contrast, noise artifacts,
sci-fi cliché, spaceship, hologram, laser beam, tron grid,
generic AI texture, synthetic material texture, plastic look,
centered symmetrical layout, static centered composition,
childlike illustration, toy-like rendering, candy colors,
comic book panels, sequential art panels, manga action lines,
slapstick humor, exaggerated expression, meme format,
logo-heavy layout, oversized brand elements, watermark-style text,
blurry background bokeh cliché, sunset over water cliché
```

## Version courte (pour `--no` Midjourney)

```
--no neon cyberpunk gaming RGB glitch startup cartoon kawaii crypto clickbait
shocked reaction stock-photo corporate overprocessed saturated generic-ai
```

## Version Flux / SD (champ négatif structuré)

```
neon, cyberpunk, gaming aesthetic, RGB, glitch, lens flare, startup SaaS,
stock photo, cartoon, kawaii, chibi, clickbait, red arrows, shocked face,
saturated colors, rainbow palette, crypto, web3, futuristic fonts, heavy glow,
overprocessed HDR, generic AI texture, centered static layout, corporate aesthetic
```

## Usage dans les fichiers prompts

Chaque fichier prompt du repo doit référencer ce fichier ainsi :
```
## NEGATIVE PROMPT
→ See prompts/negative_prompt_standard.md for the full list.
Summary: neon, cyberpunk, gaming, cartoon, clickbait, stock photography, corporate.
```

## Mise à jour

Pour ajouter un nouvel élément interdit : modifier ce fichier uniquement.
Mentionner le changement dans `brand/forbidden.md` si c'est un interdit visuel général.

---

<a id="source-prompts-script_template-md"></a>

## 📄 SOURCE: `prompts/script_template.md`

# WetSea Observatory — Template de Script Vidéo
<!-- Structure en 9 sections · Durée indicative pour format long (8–12 min) -->
<!-- Pour Shorts (< 60 sec) : voir section "Format Court" en bas de ce fichier -->

---

## MÉTADONNÉES (à remplir avant la rédaction)

```
Titre :
Sujet principal :
Angle retenu :
Durée cible :
Langue :
Sources principales :
Miniature — concept visuel :
```

---

## STRUCTURE NARRATIVE

### 1. HOOK (0:00 – 0:15 · ~30 mots)

> Commencer par une tension, une dépendance cachée, ou un fait contre-intuitif.
> Pas de présentation de soi, pas de "dans cette vidéo je vais vous montrer".

```
[HOOK ICI]
```

---

### 2. RÉALITÉ OBSERVABLE (0:15 – 1:00 · ~100 mots)

> Ce qui est visible et mesurable. Faits concrets, chiffres, lieux.
> Poser le système tel qu'il existe, sans encore expliquer.

```
[RÉALITÉ OBSERVABLE ICI]
```

---

### 3. MÉCANISME (1:00 – 3:00 · ~200 mots)

> Comment ça fonctionne. Structure interne du système.
> Préférer les diagrammes et métaphores techniques aux explications abstraites.

```
[MÉCANISME ICI]
```

---

### 4. EXEMPLES CONCRETS (3:00 – 5:00 · ~200 mots)

> 2–3 cas réels qui illustrent le mécanisme.
> Nommer les acteurs, les lieux, les dates quand possible.

```
[EXEMPLES ICI]
```

---

### 5. CONTRADICTIONS (5:00 – 6:30 · ~150 mots)

> Ce qui ne fonctionne pas comme prévu. Les points de friction.
> Ce que le système prétend faire vs ce qu'il fait réellement.

```
[CONTRADICTIONS ICI]
```

---

### 6. CONSÉQUENCES (6:30 – 8:00 · ~150 mots)

> Ce que ça implique. Impacts opérationnels, géopolitiques, économiques.
> Rester factuel — [OBSERVED] vs [INFERRED] vs [HYPOTHETICAL].

```
[CONSÉQUENCES ICI]
```

---

### 7. LIMITES (8:00 – 9:00 · ~100 mots)

> Ce qu'on ne sait pas encore. Ce qui est incertain.
> Honnêteté intellectuelle — pas de certitudes là où il n'y en a pas.

```
[LIMITES ICI]
```

---

### 8. DÉCISIONS (9:00 – 10:30 · ~150 mots)

> Qui décide, comment, sur quelle base.
> Gouvernance, acteurs, intérêts en présence.

```
[DÉCISIONS ICI]
```

---

### 9. CONCLUSION + CTA (10:30 – fin · ~80 mots)

> Pas de résumé mécanique. Ouvrir sur une question ou une implication.
> CTA : lien vers source, invitation à explorer, question ouverte.

**Formulations CTA approuvées :**
```
"Si vous voulez aller plus loin : [lien vers source primaire en description]."
"La prochaine vidéo couvre [X]. Vous pouvez vous abonner si ce territoire vous intéresse."
"Question ouverte : [formulation analytique du problème traité]."
"Ce cas est documenté dans [rapport/publication]. Lien en description."
```

**Formulations interdites :**
```
❌ "N'oubliez pas de liker et vous abonner"
❌ "Smash the like button"
❌ "Si vous avez aimé cette vidéo"
```

```
[CONCLUSION + CTA ICI]
```

---

## DESCRIPTION YOUTUBE (template)

```
[Accroche 1–2 lignes — résumé analytique du sujet]

[Corps 3–5 lignes — angle développé, 2–3 faits clés, enjeu]

— CHAPITRES —
00:00 Introduction
xx:xx [Section 2]
xx:xx [Section 3]
...

— SOURCES —
[Liens vers sources primaires]

— TAGS —
#submarinecables #maritime #infrastructure #internet #[sujet spécifique]
```

---

## FORMAT COURT — YouTube Short (< 60 secondes)

> Structure différente : un seul point, rythme 3x plus rapide, format vertical 9:16.

```
## HOOK SHORT (0–3 sec)
[Un fait ou image immédiatement frappant — pas d'intro]

## DÉVELOPPEMENT (3–45 sec)
[Un seul mécanisme, expliqué simplement, avec 1–2 exemples visuels]

## SORTIE (45–60 sec)
[Une conséquence ou question ouverte — pas de CTA classique]
```

**Contraintes Short :**
- Format 9:16 (vertical) — adapter les visuels en conséquence
- Sous-titres obligatoires (auto-générés à vérifier)
- Miniature carrée optimisée pour l'aperçu Shorts
- Titre : même règles que format long, 50 chars max

---

<a id="source-prompts-youtube_thumbnail_prompt-md"></a>

## 📄 SOURCE: `prompts/youtube_thumbnail_prompt.md`

# WetSea Observatory — YouTube Thumbnail Prompt
<!-- Ce fichier est un wrapper. Le prompt complet est dans examples/prompt_examples.md -->
<!-- Pour la spec de canal complète : channels/youtube.md -->

## Usage rapide

Copier le prompt complet depuis `examples/prompt_examples.md` et remplacer
`[INSERT DOCUMENT / VIDEO TOPIC]` par le sujet de la vidéo.

## Rappel des paramètres essentiels

- **Format** : 16:9 · marges sécurisées 5% depuis les bords
- **Sujet** : 1 seul concept, composition asymétrique
- **Texte** : 3–6 mots maximum, IBM Plex Sans uppercase
- **Palette** : deep navy #0A1A2B base · muted cyan #5E8FA3 accent 10% max
- **Negative prompt** → `prompts/negative_prompt_standard.md`

## Paramètres Midjourney

```
[prompt depuis examples/prompt_examples.md] --ar 16:9 --style raw --v 6.1
--no neon cyberpunk gaming RGB clickbait shocked-face red-arrows stock-photo
```

## Checklist avant livraison

- [ ] Lisible à 120 px sur mobile ?
- [ ] Un seul concept visible ?
- [ ] Cyan utilisé comme signal, pas comme fond ?
- [ ] Aucun élément clickbait ?
- [ ] Anti-drift checklist passée → `brand/forbidden.md`

---

<a id="source-references-visual_references-md"></a>

## 📄 SOURCE: `references/visual_references.md`

# Compatibility Reference — Visual References

**Status:** LEGACY ADAPTER
**Canonical source:** `brand/visual_references.md`

This path is retained temporarily for compatibility. Do not maintain visual
reference rules here.

---

<a id="source-system_prompt-md"></a>

## 📄 SOURCE: `system_prompt.md`

# Wet & Sea AI — System Prompt
<!-- Naming rule 2026-08-02 : marque publique "Wet & Sea AI" ; "WetSea Observatory" = design system. Source : design_tokens.yaml -->

You are the editorial brand system engine for **Wet & Sea AI**, operating the **WetSea Observatory** design system.

## Objective
Create premium, coherent visual and textual assets that communicate oceans, invisible infrastructures, and technical networks with calm cinematic intelligence.

## Naming Rule
- **Wet & Sea AI** is the only brand name in public outputs. One spelling, every language.
- **WetSea Observatory** is the design system name. Internal use only.
- **WetSeaTech** appears only as the endorsed Etsy shop.
- Never emit "Wet & Sea & IA", "WetAndSeaAI", "WST NETWORK" or "WST Labs".

## Mandatory Constraints
1. Preserve a restrained, intelligent, timeless editorial mood.
2. Use the approved palette and subtle cyan accents only.
3. Integrate technical cues with purpose (routes, markers, instrumentation).
4. Prioritize negative space, hierarchy, and compositional breathing room.
5. Reject flashy, synthetic, trend-heavy, or cartoon aesthetics.

## Forbidden Directions
- cyberpunk neon / RGB gaming,
- startup SaaS visuals,
- generic AI-art look,
- crypto/web3 cues,
- kawaii or childish mascots,
- clickbait visual language.

## Output Format
- Structured markdown.
- Clear separation: mandatory vs optional.
- Production-ready prompts and reusable guidance.

---

<a id="source-youtube-readme-md"></a>

## 📄 SOURCE: `youtube/README.md`

# YouTube Brand Kit

Contains thumbnail direction and production constraints for WetSea Observatory video publishing.

---

<a id="source-youtube-thumbnail_rules-md"></a>

## 📄 SOURCE: `youtube/thumbnail_rules.md`

# YouTube Thumbnail Rules

## Composition
- 16:9 frame with safe text margins.
- Single focal subject.
- One short title line and optional coded subtitle.

## Typography
- High legibility at mobile size.
- Avoid outline-heavy effects.
- Keep to 1–2 font families.

## Visual Discipline
- Subtle contrast, no oversaturation.
- Editorial tone over algorithmic clickbait.

WST PRIORITY RULE
Prefer omission over invention.
Negative space is superior to fabricated detail.
---
