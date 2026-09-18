# Prestige Transfert — Site vitrine

Site vitrine statique (HTML/CSS/JS, aucune installation nécessaire) pour Prestige Transfert (JL VTC Line).

## Structure

```
index.html            page unique du site
mentions-legales.html page mentions légales & confidentialité (voir section dédiée ci-dessous)
robots.txt            autorise l'exploration par les moteurs de recherche, référence le sitemap
sitemap.xml           liste des pages à indexer (pour Google Search Console)
css/styles.css        styles (thème noir/or)
js/main.js            menu mobile + envoi du formulaire
img/                  photos utilisées sur le site
```

## Étape indispensable avant mise en ligne : brancher le formulaire de contact

Le formulaire de contact utilise **[Web3Forms](https://web3forms.com)** pour recevoir les demandes par email (le site étant statique, il n'a pas de serveur pour envoyer les emails lui-même). Gratuit, envois illimités, aucun compte obligatoire.

1. Allez sur https://web3forms.com, entrez l'adresse email qui doit recevoir les demandes (`jlvtcline@gmail.com`) : une clé d'accès (`access_key`) est envoyée instantanément par email, aucune inscription nécessaire.
2. Ouvrez `index.html`, cherchez la ligne suivante (section formulaire de contact) :
   ```html
   <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY">
   ```
3. Remplacez `YOUR_WEB3FORMS_ACCESS_KEY` par votre clé reçue par email.
4. Testez le formulaire une fois en ligne — l'email doit arriver dans la boîte `jlvtcline@gmail.com` (pensez à vérifier les spams la première fois).

Tant que `YOUR_WEB3FORMS_ACCESS_KEY` n'est pas remplacée, le formulaire ne fonctionnera pas.

Note : la clé d'accès Web3Forms est conçue pour être visible côté client (elle apparaît dans le code source de la page), ce n'est pas un problème de sécurité — c'est le fonctionnement normal du service.

## Aperçu en local

Ouvrez simplement `index.html` dans un navigateur, ou lancez un petit serveur local :

```bash
cd site-mounir
python3 -m http.server 8000
```

Puis ouvrez http://localhost:8000

## Mise en ligne

Le site est 100% statique : il suffit d'héberger `index.html`, `css/`, `js/` et `img/` sur n'importe quel hébergement (mutualisé classique, Netlify, GitHub Pages, etc.), sans build ni configuration serveur.

## Étape restante avant mise en ligne : mentions légales

Le nom de domaine (`prestigetransfert.com`) et la zone d'intervention (Grenoble et périphérie) sont déjà intégrés partout (SEO, contenu, données structurées).

Reste **`mentions-legales.html`** : cette page est **obligatoire légalement** (loi LCEN, article 6-III — s'applique à tout site professionnel, y compris pour une entreprise individuelle/auto-entrepreneur, sans exception de taille). Elle contient des champs en surbrillance `[à compléter]` que nous ne pouvons pas deviner :
- Raison sociale et forme juridique (ex : EI, EURL...)
- Numéro SIRET (disponible sur votre extrait Insee / avis de situation Sirene, ou recherchable sur [annuaire-entreprises.data.gouv.fr](https://annuaire-entreprises.data.gouv.fr))
- Adresse du siège (numéro et rue — la ville Grenoble est déjà renseignée)
- Nom du directeur de publication
- Numéro d'inscription au registre des VTC

Le site fonctionne sans, mais publier une page mentions légales incomplète expose à un risque (contrôle DGCCRF, litige client) — à compléter avant la mise en ligne définitive si possible.

## Référencement Google

Le site est techniquement prêt pour l'exploration par Google (HTML statique donc rien à "rendre" en JavaScript, title/description uniques, URL canonique, données structurées `TaxiService`, `robots.txt` + `sitemap.xml`). Une fois le site en ligne sur `prestigetransfert.com`, une dernière étape reste à faire de votre côté (nécessite un compte Google, je ne peux pas le faire à votre place) :

1. Allez sur [Google Search Console](https://search.google.com/search-console), ajoutez la propriété `prestigetransfert.com`.
2. Validez la propriété (méthode la plus simple : ajouter un enregistrement DNS TXT fourni par Google, ou déposer un fichier HTML qu'ils vous donnent).
3. Une fois validé, soumettez `https://prestigetransfert.com/sitemap.xml` dans l'onglet "Sitemaps".
4. Utilisez l'outil "Inspection de l'URL" sur `https://prestigetransfert.com/` et cliquez sur "Demander une indexation" pour accélérer la première indexation (sinon Google la trouve seul en quelques jours à quelques semaines).

Cela ne garantit pas un bon classement (ça dépend surtout du contenu, des avis clients et des liens externes avec le temps), mais ça garantit que Google trouve et comprend correctement le site dès sa mise en ligne.

## Personnalisation possible plus tard

- **Photos réelles** : le site utilise actuellement des photos libres de droits (Pexels, licence gratuite y compris usage commercial, sans attribution requise) dans `img/` pour le fond de la section "Accueil", la section "Véhicule" et la section "Galerie". Dès que vous avez de vraies photos de votre propre Mercedes Classe V (et du chauffeur), remplacez simplement les fichiers dans `img/` en gardant les mêmes noms pour un rendu 100% personnel — c'est toujours préférable à des photos génériques.
- **Réservation en ligne** : non incluse (site vitrine sans réservation, comme demandé). Le formulaire actuel sert à recueillir une demande que vous confirmez ensuite par téléphone/email.
