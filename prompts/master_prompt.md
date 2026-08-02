# WetSea Observatory — Prompt Maître
<!-- Naming rule appliquée. Couleurs alignées sur design_tokens.yaml. -->

Create a premium editorial illustration for **WetSea Observatory**.

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
