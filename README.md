# Prestige Transfert — Site vitrine

Site vitrine statique (HTML/CSS/JS, aucune installation nécessaire) pour Prestige Transfert (JL VTC Line).

## Structure

```
index.html        page unique du site
css/styles.css    styles (thème noir/or)
js/main.js        menu mobile + envoi du formulaire
img/              photos utilisées sur le site
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

## Personnalisation possible plus tard

- **Zone d'intervention / ville** : non précisée pour l'instant, à ajouter dans la section "À propos" si vous voulez afficher une zone géographique.
- **Photos réelles** : le site utilise actuellement des photos libres de droits (Pexels, licence gratuite y compris usage commercial, sans attribution requise) dans `img/` pour le fond de la section "Accueil", la section "Véhicule" et la nouvelle section "Galerie". Dès que vous avez de vraies photos de votre propre Mercedes Classe V (et du chauffeur), remplacez simplement les fichiers dans `img/` en gardant les mêmes noms pour un rendu 100% personnel — c'est toujours préférable à des photos génériques.
- **Réservation en ligne** : non incluse (site vitrine sans réservation, comme demandé). Le formulaire actuel sert à recueillir une demande que vous confirmez ensuite par téléphone/email.
