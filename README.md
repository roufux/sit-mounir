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

Le formulaire de contact utilise **Formspree** pour recevoir les demandes par email (le site étant statique, il n'a pas de serveur pour envoyer les emails lui-même).

1. Créez un compte gratuit sur https://formspree.io (jusqu'à 50 soumissions/mois gratuites).
2. Créez un nouveau formulaire, associez-lui l'adresse email qui doit recevoir les demandes (ex: `Jlvtcline@gmail.com`).
3. Formspree vous donne une URL du type `https://formspree.io/f/abcd1234`.
4. Ouvrez `index.html`, cherchez la ligne suivante (section formulaire de contact) :
   ```html
   <form class="contact-form" id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
5. Remplacez `YOUR_FORM_ID` par votre propre identifiant Formspree.
6. Testez le formulaire une fois en ligne : Formspree demande de confirmer le premier envoi par email.

Tant que `YOUR_FORM_ID` n'est pas remplacé, le formulaire ne fonctionnera pas.

## Aperçu en local

Ouvrez simplement `index.html` dans un navigateur, ou lancez un petit serveur local :

```bash
cd site-mounir
python3 -m http.server 8000
```

Puis ouvrez http://localhost:8000

## Mise en ligne

Le site est 100% statique : il suffit d'héberger les 3 fichiers/dossiers (`index.html`, `css/`, `js/`) sur n'importe quel hébergement (mutualisé classique, Netlify, GitHub Pages, etc.), sans build ni configuration serveur.

## Personnalisation possible plus tard

- **Zone d'intervention / ville** : non précisée pour l'instant, à ajouter dans la section "À propos" si vous voulez afficher une zone géographique.
- **Photos réelles** : le site utilise actuellement des photos libres de droits (Pexels, licence gratuite y compris usage commercial, sans attribution requise) dans `img/` pour le fond de la section "Accueil", la section "Véhicule" et la nouvelle section "Galerie". Dès que vous avez de vraies photos de votre propre Mercedes Classe V (et du chauffeur), remplacez simplement les fichiers dans `img/` en gardant les mêmes noms pour un rendu 100% personnel — c'est toujours préférable à des photos génériques.
- **Réservation en ligne** : non incluse (site vitrine sans réservation, comme demandé). Le formulaire actuel sert à recueillir une demande que vous confirmez ensuite par téléphone/email.
