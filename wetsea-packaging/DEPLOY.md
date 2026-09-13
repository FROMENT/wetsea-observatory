# Déploiement — runbook

Objectif : mettre le Worker en ligne **au palier L3** (génération autonome,
aucune sortie externe), et rendre ce palier **observable** pour pouvoir armer L4
ensuite.

Le déploiement demande une authentification Cloudflare : c'est un geste
**opérateur**, il ne peut pas être fait depuis une session agent.

---

## 0. Préflight (aucune auth requise)

```sh
cd wetsea-packaging
npm ci
npm run preflight
```

Doit finir sur `PREFLIGHT OK`. Il vérifie le typecheck, valide la configuration
et le bundle (`wrangler deploy --dry-run`), confirme que l'observabilité est
active, et **refuse tout secret en clair** dans `wrangler.toml`.

## 1. Pourquoi ce déploiement est sans effet de bord

Trois raisons cumulatives — c'est ce qui rend l'étape sûre :

| Garde-fou | Effet |
|---|---|
| `YT_PUBLISH="false"`, `NOTION_PUBLISH="false"` | YouTube et Notion composent leur payload et retournent **sans appel réseau** |
| `DRIVE_ROOT_FOLDER_ID=""` | la découverte cron s'arrête immédiatement (`warn` + `return`) : **rien n'est généré** tant que le dossier n'est pas renseigné |
| Aucun `GITHUB_TOKEN` | le commit Hugo est impossible — le palier L4 n'est pas armé |

Le cron tourne donc à vide à 06:00 UTC, ce qui est exactement le comportement
attendu tant que la source n'est pas branchée.

## 2. Authentification

```sh
npx wrangler login          # ouvre le navigateur
npx wrangler whoami         # vérifier le compte
```

Si le compte est multiple, wrangler demande lequel utiliser. Pour éviter toute
ambiguïté (et en CI) :

```sh
export CLOUDFLARE_ACCOUNT_ID=<id du compte>   # visible dans l'URL du dashboard
```

## 3. Secrets du palier L3

Trois secrets, et trois seulement, sont nécessaires pour L3 :

```sh
npx wrangler secret put ANTHROPIC_API_KEY    # clé Anthropic
npx wrangler secret put GCP_SA_EMAIL         # e-mail du service account
npx wrangler secret put GCP_SA_PRIVATE_KEY   # PEM PKCS8, bloc BEGIN/END complet
```

Ne pose **pas** `GITHUB_TOKEN`, `NOTION_TOKEN` ni les `YT_*` maintenant : ils
appartiennent aux paliers L4, L5 et L6. Un secret posé en avance est une sortie
qu'on a oublié qu'on avait armée.

## 4. Déploiement

```sh
npx wrangler deploy
```

Puis vérifier :

```sh
npm run preflight -- --post          # secrets réellement posés, par palier
curl -s https://wetsea-packaging.<sous-domaine>.workers.dev/
# -> wetsea-packaging — POST /run { … } | POST /publish { … }
```

## 5. Tenir L3, puis armer L4

C'est l'étape qu'on ne peut pas sauter (invariant 5).

```sh
# brancher la source : DRIVE_ROOT_FOLDER_ID dans [vars] = id Drive de /WetSea
# partager /WetSea en lecture avec GCP_SA_EMAIL, puis redéployer
npx wrangler deploy

# laisser le cron passer, ou déclencher à la main :
curl -X POST https://wetsea-packaging.<sous-domaine>.workers.dev/run \
  -H 'content-type: application/json' \
  -d '{"videoId":"<slug>","folderId":"<drive-folder-id>","sujet":"<sujet>"}'
```

Observer un cycle complet : Cloudflare → Workers → `wetsea-packaging` → **Logs**
et **Workflows** (instances `PACKAGING`, étape par étape). C'est pour cela que
`[observability]` est activé.

Quand un cycle a produit des kits conformes sans intervention :

```sh
npx wrangler secret put GITHUB_TOKEN         # fine-grained, Contents:write sur
                                             # wetandseaai-site UNIQUEMENT
cd ../wst-studio
node dist/studio.mjs arm L4 --attest GITHUB_TOKEN --motif "L3 tenu sur un cycle"
git commit -am "Studio: armement L4"
```

## Pannes probables

| Symptôme | Cause / correctif |
|---|---|
| `workflows … not supported on your plan` | les Workflows exigent un plan **Workers payant**. C'est la panne la plus probable au premier déploiement. |
| wrangler demande de choisir un compte | `export CLOUDFLARE_ACCOUNT_ID=<id>` |
| `You are not authenticated` | `npx wrangler login` |
| Cron muet, aucun kit généré | attendu si `DRIVE_ROOT_FOLDER_ID` est vide — voir §1 |
| `videos.list … not found or not owned` | palier L6, pas L3 : le refresh token n'appartient pas au propriétaire de la chaîne |
