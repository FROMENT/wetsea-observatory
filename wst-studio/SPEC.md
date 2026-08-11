# WST Studio — spécification L3 → L9

**WST Studio** est la *console d'autonomie* posée au-dessus du pipeline
`wetsea-packaging`. Il ne publie rien lui-même : il **décide** ce qui a le droit
de sortir, **explique** pourquoi, et **imprime la commande exacte** à lancer. La
sortie reste au pipeline.

Il existe parce que le pipeline a des interrupteurs (`YT_PUBLISH`,
`NOTION_PUBLISH`, `GITHUB_TOKEN`) mais aucune doctrine : rien ne dit *quand* on a
le droit de les basculer, ni ce qu'on casse si on les bascule trop tôt. L'échelle
L0→L9 est cette doctrine, et le `gate` en est la version exécutable.

---

## 1. Ce qu'un « niveau » veut dire

Un niveau n'est pas une permission technique de plus. C'est un **contrat
d'exploitation** qui répond à trois questions :

| Question | Pourquoi elle est structurante |
|---|---|
| **Qui décide ?** | Le passage machine-propose → machine-décide est le vrai seuil, pas le volume automatisé. |
| **Quel rayon de souffle ?** | Ce qui change dans le monde réel : un fichier versionné, un brouillon, une page publique. |
| **Comment on revient ?** | Un niveau sans marche arrière crédible ne doit pas exister. C'est le critère qui a fixé l'ordre des crans. |

L'ordre des niveaux suit la **réversibilité décroissante**, pas la difficulté
technique. C'est pour ça que le commit Hugo (L4, annulable par `git revert`)
précède le brouillon Notion (L5), qui précède le write-back YouTube (L6,
première écriture visible du public).

---

## 2. Invariants — vrais à tous les niveaux, y compris L9

Ils ne se relâchent jamais. Le `gate` les applique **avant** de regarder le niveau.

1. Le canon éditorial est vérifié par `validateKit()` — règles dures **et**
   phrases interdites — avant toute sortie, quel que soit le niveau.
2. Aucune écriture externe n'est possible sans le secret correspondant : un
   niveau armé sans secret reste **inerte**, il n'échoue pas silencieusement.
3. Toute écriture externe est journalisée (ledger) avec de quoi revenir en arrière.
4. Le Studio ne fusionne jamais lui-même une modification de son propre canon.
5. Un niveau ne s'arme que si le précédent a tenu — **pas de saut de palier**.

> Vérifié en pratique : à L6, tous secrets présents et `YT_PUBLISH` armé, un kit
> contenant « révolutionnaire » est **refusé**. Le canon prime sur le niveau.

---

## 3. L'échelle

L0–L2 sont rappelés pour situer le point de départ ; la spec demandée porte sur
**L3 → L9**.

| | Niveau | Décideur | Accorde | Retour arrière |
|---|---|---|---|---|
| L0 | Manuel | Humain, pour tout | — | sans objet |
| L1 | Assistance | Humain | — | sans objet |
| L2 | Génération à la demande | Humain déclenche et publie | `generate` | jeter le kit |

### L3 — Génération autonome, sorties nulles ← *état actuel du pipeline*

- **Décideur** : la machine génère, l'humain publie.
- **Rayon** : le cron génère et valide des kits sans humain. **Rien ne sort** :
  YouTube et Notion composent leur payload puis retournent sans appel réseau.
- **Retour arrière** : aucun besoin — aucune écriture externe.
- **Prérequis** : validateur vert sur un lot pilote ; `/WetSea` partagé au service account.
- **Réglage** : `YT_PUBLISH="false"`, `NOTION_PUBLISH="false"` (défaut).

C'est le palier de confiance : on laisse la machine produire en continu et on
mesure la qualité **sans risque**, aussi longtemps qu'il faut.

### L4 — Publication réversible par git

- **Décideur** : la machine publie, sur une surface versionnée.
- **Rayon** : commit de `data/packaging/<id>.json` dans le dépôt site → build Hugo.
- **Retour arrière** : `git revert` ; le site se reconstruit.
- **Prérequis** : `GITHUB_TOKEN` restreint à `Contents:write` sur `wetandseaai-site` ; L3 tenu sur un cycle complet.
- **Accorde** : `commit_hugo`.

Premier cran où la machine écrit — délibérément sur la seule surface dont
l'annulation est un `git revert`.

### L5 — Brouillon Notion automatique

- **Décideur** : la machine prépare, l'humain promeut.
- **Rayon** : page créée dans la base Chroniques au statut `📝 Brouillon`. **Rien n'est public** : le publisher WordPress ne prend que ce qu'un humain promeut.
- **Retour arrière** : supprimer la page Notion (rien n'a atteint WordPress).
- **Prérequis** : `NOTION_TOKEN` ; idempotence vérifiée (`ID_Episode`).
- **Réglage** : `NOTION_PUBLISH="true"`. **Accorde** : `notion_draft`.

### L6 — Write-back YouTube

- **Décideur** : la machine écrit sur une **surface publique**.
- **Rayon** : titre, description et chapitres remplacés sur une vidéo en ligne. Première action visible par le public sans relecture.
- **Retour arrière** : restaurer le snippet capturé avant écriture. `videos.list` est déjà appelé pour la fusion — **le Studio exige qu'il soit journalisé** au ledger, sinon le retour arrière est théorique.
- **Prérequis** : `YT_REFRESH_TOKEN` (scope `youtube.force-ssl`, propriétaire de la chaîne) ; L5 tenu.
- **Réglage** : `YT_PUBLISH="true"`. **Accorde** : `youtube_metadata`.

Le seuil le plus important de l'échelle : au-dessus, une erreur est vue avant
d'être corrigée.

### L7 — Batch autonome

- **Décideur** : la machine, sur un lot **borné**.
- **Rayon** : N vidéos en une commande (rattrapage rétroactif, ~40 vidéos). L'erreur n'est plus unitaire, elle est **systémique**.
- **Retour arrière** : arrêt au premier échec de canon (**fail-closed**) + revert par lot via le ledger.
- **Prérequis** : quota explicite (`maxBatch`) et budget de tokens ; L6 tenu sur au moins 3 vidéos unitaires.
- **Accorde** : `batch_fanout`. Le gate **refuse** un `batch_fanout` sans quota défini.

### L8 — Boucle fermée

- **Décideur** : la machine de bout en bout ; l'humain **par exception**.
- **Rayon** : le cron découvre, génère et publie jusqu'au niveau armé, sans humain par item. L'humain ne voit que les alertes.
- **Retour arrière** : désarmement immédiat (retour L3) + revert des sorties du cycle via le ledger.
- **Prérequis** : alerting sur échec **et sur silence** — un cron muet est un cron mort ; L7 tenu sans intervention sur un cycle complet.
- **Accorde** : `autonomous_discovery`.

### L9 — Auto-ajustement supervisé

- **Décideur** : la machine propose, l'humain fusionne — **toujours**.
- **Rayon** : le Studio propose des modifications de ses propres réglages et prompts à partir des métriques observées.
- **Retour arrière** : fermer la PR. Rien n'est appliqué sans fusion humaine.
- **Prérequis** : métriques de **qualité**, pas seulement d'audience ; interdiction d'auto-merge vérifiée par la protection de branche.
- **Accorde** : `self_modify`. Jamais d'écriture directe sur le canon.

L9 n'est **pas** « la machine se modifie ». C'est « la machine argumente son
propre réglage, sous revue ». L'invariant 4 le borne définitivement.

---

## 4. Modèle d'autorisation

`authorize(action, ctx)` part d'un **refus** et n'accorde que si tout est réuni.
Ordre des contrôles, du plus structurel au plus conjoncturel :

1. le niveau accorde-t-il l'action ? (sinon : niveau minimal requis)
2. le canon est-il respecté ? *(invariant — jamais relaxable)*
3. les secrets sont-ils présents ?
4. les flags sont-ils armés ? *(sinon : dry-run, l'action ne sort pas)*
5. les quotas sont-ils tenus ? *(L7)*

Tous les blocages sont rapportés **d'un coup** — on ne veut pas d'un
diagnostic en pelure d'oignon lors d'une montée de palier.

| Action | Niveau min | Secrets | Flag |
|---|---|---|---|
| `generate` | L2 | `ANTHROPIC_API_KEY` | — |
| `commit_hugo` | L4 | `GITHUB_TOKEN` | — |
| `notion_draft` | L5 | `NOTION_TOKEN` | `NOTION_PUBLISH` |
| `youtube_metadata` | L6 | `YT_CLIENT_ID`, `YT_CLIENT_SECRET`, `YT_REFRESH_TOKEN` | `YT_PUBLISH` |
| `batch_fanout` | L7 | — | — (quota `maxBatch`) |
| `autonomous_discovery` | L8 | — | — |
| `self_modify` | L9 | — | — |

---

## 5. Implémentation

| Fichier | Rôle |
|---|---|
| `src/levels.ts` | l'échelle comme **donnée** (décideur, rayon, retour arrière, prérequis, réglage) + invariants |
| `src/gate.ts` | `authorize()` — fail-closed, réutilise `validateKit()` du pipeline |
| `src/plan.ts` | plan d'exécution : ce qui sortirait, ce qui manque, les commandes |
| `src/ledger.ts` | journal append-only JSONL (invariant 3) |
| `src/cli.ts` | la console : `levels`, `explain`, `gate`, `plan`, `check` |

Le canon n'est **pas recopié** : `gate.ts` importe `validateKit` depuis
`../../wetsea-packaging/src/validator`. Une règle ajoutée au pipeline s'applique
au Studio sans synchronisation.

Voir [`README.md`](./README.md) pour l'usage vérifié.

## 6. Périmètre livré

Implémenté et exécuté : l'échelle complète, le gate, le plan, le ledger, la
console. Tout est **dry-run par construction** — le Studio décide, il ne publie
pas ; aucun secret n'est nécessaire pour le faire tourner.

Non implémenté (dépend de l'exploitation, pas du code) : le snapshot YouTube
journalisé exigé par L6, l'alerting L8, et la génération de PR L9. Ils sont
spécifiés ici et refusés par le gate tant qu'ils ne sont pas réunis — ce qui est
le comportement voulu, pas un manque.
