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

<!-- claude-md-opus5:begin v3 -->
## Règles opérationnelles Opus 5

Source : doc officielle « Prompting Claude Opus 5 » et « Prompting best
practices », citées mot pour mot et vérifiées le 2026-08-02.
Bloc généré — ne pas éditer à la main, éditer `tools/apply_opus5_v3.py`.

### Style de réponse
- Réponses ciblées, brèves et concises. Avertissements et réserves courts ;
  l'essentiel du texte porte sur la réponse.
- Ajuster la longueur des livrables écrits au besoin réel : couvrir le fond,
  sans sections de remplissage, résumés redondants ni boilerplate.
- Le modèle produit spontanément des réponses plus longues que les modèles
  antérieurs. La concision se demande explicitement : elle ne découle pas des
  réglages de coût. Le paramètre `effort` règle le volume de réflexion, pas la
  longueur de la réponse.

### Périmètre
- Livrer ce qui est demandé, au périmètre demandé. Trancher seul les arbitrages
  de routine ; ne revenir vers l'utilisateur que si deux lectures de la demande
  conduisent à des travaux matériellement différents.
- Ne faire que les changements demandés ou clairement nécessaires. Pas de
  fonctionnalité, de refactorisation, de documentation ni de code défensif
  au-delà de la demande.
- Écrire des solutions générales et correctes. Ne jamais contourner un test
  pour le faire passer.
- Ne jamais spéculer sur du code non ouvert : si un fichier est en cause, le
  lire avant de conclure.
- Nettoyer en fin de tâche les fichiers temporaires créés pour itérer.
- Actions locales et réversibles : procéder. Actions destructrices — suppression,
  `git push --force`, publication externe — : demander avant.

### Restitution de l'avancement
- Avant le premier appel d'outil, annoncer en une phrase ce qui va être fait.
  Pendant le travail, ne signaler qu'un résultat important ou un changement de
  direction. Commencer le message final par le résultat ; les détails ensuite.
- Ne corriger une affirmation antérieure que si l'erreur change le code, les
  conclusions ou les décisions de l'utilisateur. Énoncer alors la correction
  simplement et brièvement, puis poursuivre.

### Outils et délégation
- Appels d'outils sans dépendance entre eux : les lancer dans le même message,
  en parallèle. Lire trois fichiers d'un coup, pas l'un après l'autre.
- Implémenter plutôt que se contenter de suggérer. Utiliser les outils pour
  découvrir ce qui manque au lieu de le deviner.
- Ne déléguer à un sous-agent que pour un travail large, réellement indépendant
  et parallélisable, ou nécessitant un contexte isolé. Ne pas déléguer ce qui
  tient en quelques appels d'outils. Ne pas confier à un sous-agent la
  vérification de son propre travail — une revue par un agent distinct du
  rédacteur reste un patron valide.

### Vérification — lire les deux points ensemble
- Le modèle s'auto-vérifie. Ne pas ajouter de consignes de relecture redondantes
  du type « ajoute une étape de vérification finale » ou « fais relire par un
  sous-agent » : elles provoquent de la sur-vérification et consomment des
  tokens sans gain de qualité.
- **Cela ne dispense d'AUCUNE vérification outillée exigée par le projet** :
  tests, gates, lint, build, hooks. Ces règles-là priment sur le paragraphe
  ci-dessus. Le point précédent vise l'échafaudage textuel, jamais la mesure.

### Vision
- Pour les tâches visuelles — graphiques, documents, diagrammes, interfaces —
  fournir un outil de recadrage ou de zoom permettant de cibler les régions
  pertinentes de l'image.

### Réglages d'intégration (l'appelant, pas l'agent)
Ces valeurs se règlent dans la configuration ou l'appel d'API, pas depuis ce
fichier. Consignées ici pour mémoire.
- Cinq niveaux d'effort : `low`, `medium`, `high` (défaut sur l'API et sur
  Claude Code), `xhigh`, `max`.
- Partir du défaut `high`. Utiliser `low` et `medium` largement, comme levier
  principal de coût et de latence partout où la qualité tient ; monter à
  `xhigh` pour le code et les boucles agentiques exigeants.
- L'allocation de tokens derrière chaque niveau a changé : rejouer un balayage
  d'effort sur ses propres évaluations plutôt que de reprendre un réglage calé
  sur un modèle antérieur.
- La réflexion est activée par défaut et ne peut être désactivée qu'à effort
  `high` ou moins. Un effort plus bas avec réflexion activée donne généralement
  un meilleur résultat que la réflexion désactivée, à coût comparable.
- Si la réflexion doit être désactivée, coller l'instruction combinée
  **complète** dans le prompt système, sans la paraphraser : « When you use a
  tool, you may say a brief sentence first. If no tool can express what the user
  asked for, say so instead of guessing. Do not include internal or system XML
  tags in your response. »
<!-- claude-md-opus5:end -->
