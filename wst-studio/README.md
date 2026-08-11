# WST Studio

Console d'**autonomie** au-dessus du pipeline `wetsea-packaging`. Elle décide ce
qui a le droit de sortir (échelle L0→L9), explique les blocages, et imprime la
commande exacte à lancer. **Elle ne publie rien elle-même** — donc elle tourne
sans aucun secret.

La doctrine complète est dans [`SPEC.md`](./SPEC.md).

## Prérequis

Node 22+, et les dépendances du pipeline installées (le Studio réutilise son
canon éditorial, il ne le recopie pas) :

```sh
cd wetsea-packaging && npm ci      # fournit zod au canon importé
cd ../wst-studio     && npm install
npm run typecheck                  # tsc --noEmit -> exit 0
```

## Usage

```sh
npm run build                      # esbuild -> dist/studio.mjs

node dist/studio.mjs levels                 # l'échelle L0->L9 + invariants
node dist/studio.mjs explain L6             # décideur, rayon, retour arrière, prérequis
node dist/studio.mjs check --kits ../wetsea-packaging/examples/pilot_kits.json
```

### Le gate — « ai-je le droit ? »

```sh
# refusé : niveau trop bas + secrets absents + flag non armé
node dist/studio.mjs gate --level L3 --action youtube_metadata \
  --kits ../wetsea-packaging/examples/pilot_kits.json

# autorisé : niveau suffisant, secrets déclarés, flag armé, canon respecté
node dist/studio.mjs gate --level L6 --action youtube_metadata \
  --kits ../wetsea-packaging/examples/pilot_kits.json \
  --secrets YT_CLIENT_ID,YT_CLIENT_SECRET,YT_REFRESH_TOKEN --flags YT_PUBLISH
```

Sortie : `AUTORISÉ` / `REFUSÉ` + tous les blocages d'un coup. Code de sortie
`0` autorisé, `1` refusé, `2` usage — utilisable en CI.

`--ledger <fichier.jsonl>` journalise la décision (invariant 3).

### Le plan — « qu'est-ce que ça publierait ? »

```sh
node dist/studio.mjs plan --level L6 \
  --kits ../wetsea-packaging/examples/pilot_kits.json \
  --secrets GITHUB_TOKEN,NOTION_TOKEN --flags NOTION_PUBLISH
```

Donne, sans rien lancer : les kits conformes, les **sorties effectives**
(`commit_hugo, notion_draft`), ce qui manque pour le reste
(`YT_CLIENT_ID…, flag YT_PUBLISH`) et les commandes à exécuter.

## Ce que le gate garantit

Le canon prime sur le niveau. Au niveau maximal, tous secrets présents et flag
armé, un kit contenant une phrase interdite est **refusé** :

```
REFUSÉ  youtube_metadata @ L6
  ✗ canon: forbidden phrase "révolutionnaire" appears in the kit (brand canon bans it)
```

## Agents

Le skill [`run-wst-studio`](./.claude/skills/run-wst-studio/) lance et vérifie
tout ça d'une commande :
`node .claude/skills/run-wst-studio/driver.mjs`.
