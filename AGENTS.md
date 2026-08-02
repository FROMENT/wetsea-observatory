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
