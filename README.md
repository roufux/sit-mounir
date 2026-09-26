# Prestige Transfert — Site vitrine

Site vitrine statique (HTML/CSS/JS, aucune installation ni build) pour Prestige Transfert (JL VTC Line),
chauffeur privé VTC à Grenoble et sa périphérie.

En ligne sur **https://prestigetransfert.com** (GitHub Pages).

## Structure

```
index.html            page unique du site
mentions-legales.html mentions légales & confidentialité (à compléter, voir ci-dessous)
CNAME                 nom de domaine personnalisé pour GitHub Pages
robots.txt            autorise l'exploration par les moteurs, référence le sitemap
sitemap.xml           liste des pages à indexer (pour Google Search Console)
css/styles.css        styles (thème noir/or)
js/main.js            menu mobile + envoi du formulaire
img/                  images du site (WebP) + l'image de partage réseaux sociaux (JPEG)
_source/              fichiers de travail non publiés (ignorés par git)
```

## Aperçu en local

Ouvrez `index.html` dans un navigateur, ou lancez un petit serveur local :

```bash
cd site-mounir
python3 -m http.server 8000
```

Puis ouvrez http://localhost:8000

## Mise en ligne

Le site est hébergé par **GitHub Pages** : il n'y a rien à téléverser à la main, un simple push
publie la nouvelle version (comptez une à deux minutes avant qu'elle soit visible).

```bash
git add -A
git commit -m "Description de la modification"
git push
```

Le fichier `CNAME` maintient le domaine `prestigetransfert.com` — ne le supprimez pas.

## Formulaire de contact

Le formulaire est branché sur **[Web3Forms](https://web3forms.com)** (le site étant statique, il n'a pas
de serveur pour envoyer les emails lui-même). La clé d'accès est déjà configurée dans `index.html` et les
demandes arrivent sur `jlvtcline@gmail.com`.

La clé est visible dans le code source de la page : c'est normal et voulu par le service, ce n'est pas une
faille. En cas de spam, Web3Forms permet d'activer un captcha depuis leur tableau de bord (un champ
« honeypot » anti-robot est déjà présent dans le formulaire).

## Images

Les images affichées sont en **WebP** (format supporté par tous les navigateurs depuis 2020), pré-recadrées
au format exact de leur emplacement, pour un total d'environ 330 Ko au lieu de 1,3 Mo en JPEG.

`img/mercedes-classe-v.jpg` est conservé **uniquement** comme image de partage sur les réseaux sociaux
(`og:image` / `twitter:image` / données structurées) : Facebook, LinkedIn et WhatsApp gèrent mal le WebP.
Il n'est jamais chargé par la page elle-même.

Pour remplacer une image par une vraie photo (toujours préférable à une photo de banque d'images) :

```bash
# Tuiles de la section Services (cadre 16/10)
convert votre-photo.jpg -resize 800x500^ -gravity center -extent 800x500 \
  -strip -quality 72 img/transfert-aeroport.webp

# Section Véhicules (cadre 4/3)
convert votre-photo.jpg -resize 900x675^ -gravity center -extent 900x675 \
  -strip -quality 75 img/flotte-vehicules.webp

# Fond de la section Accueil (pleine largeur, très assombri par un dégradé)
convert votre-photo.jpg -resize 1600x1067 -strip -quality 45 img/mercedes-classe-v.webp
```

Gardez les mêmes noms de fichiers : le HTML n'a alors rien à changer. Si vous changez les proportions
d'une image, pensez à mettre à jour ses attributs `width`/`height` dans `index.html`.

Les photos JPEG d'origine (résolution supérieure, avant recadrage) restent récupérables dans
l'historique git, au commit `feb0f23` :

```bash
git show feb0f23:img/station-de-ski.jpg > station-de-ski-original.jpg
```

## Étape restante : compléter les mentions légales

`mentions-legales.html` est **obligatoire légalement** (loi LCEN, article 6-III — s'applique à tout site
professionnel, y compris une entreprise individuelle ou un auto-entrepreneur, sans exception de taille).
La page contient des champs en surbrillance `[à compléter]` qui ne peuvent pas être devinés :

- Raison sociale et forme juridique (ex : EI, EURL...)
- Numéro SIRET (sur votre avis de situation Sirene, ou recherchable sur
  [annuaire-entreprises.data.gouv.fr](https://annuaire-entreprises.data.gouv.fr))
- Adresse du siège (numéro et rue — la ville Grenoble est déjà renseignée)
- Nom du directeur de publication
- Numéro d'inscription au registre des VTC

Le site fonctionne sans, mais publier une page mentions légales visiblement incomplète expose à un risque
(contrôle DGCCRF, litige client) et nuit à la crédibilité auprès d'une clientèle professionnelle.

## Référencement Google

Le site est techniquement prêt pour l'exploration (HTML statique donc rien à « rendre » en JavaScript,
title/description uniques, URL canonique, données structurées `TaxiService`, `robots.txt` + `sitemap.xml`).
Une dernière étape reste à faire de votre côté (nécessite un compte Google) :

1. Allez sur [Google Search Console](https://search.google.com/search-console), ajoutez la propriété
   `prestigetransfert.com`.
2. Validez la propriété (le plus simple : ajouter l'enregistrement DNS TXT fourni par Google).
3. Soumettez `https://prestigetransfert.com/sitemap.xml` dans l'onglet « Sitemaps ».
4. Utilisez « Inspection de l'URL » sur `https://prestigetransfert.com/` puis « Demander une indexation »
   pour accélérer la première indexation.

Cela ne garantit pas un bon classement (ça dépend surtout du contenu, des avis clients et des liens
externes) mais garantit que Google trouve et comprend correctement le site.

## Pistes d'amélioration identifiées, non encore faites

- **Fiche Google Business Profile et avis clients** : pour du local, ils pèsent plus lourd dans le pack
  local que le site lui-même. C'est le levier le plus rentable.
- **Tarifs indicatifs** : « Grenoble → Lyon-Saint Exupéry à partir de X € » sur trois ou quatre trajets
  classiques. C'est la première information que cherche un visiteur.
- **Pages dédiées par trajet ou destination** : une seule page ne peut pas bien se classer à la fois sur
  « VTC Grenoble », « transfert aéroport Lyon Saint-Exupéry » et « taxi Alpe d'Huez ».
- **Cohérence de contenu** : le formulaire propose « Déplacement professionnel » comme type de trajet,
  mais la section Services n'a plus de tuile correspondante.
- **Réservation en ligne** : non incluse (site vitrine, comme demandé). Le formulaire recueille une
  demande que vous confirmez ensuite par téléphone ou email.
