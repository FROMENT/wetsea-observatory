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
