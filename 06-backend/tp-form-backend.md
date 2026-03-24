# TP — Mini backend de formulaires avec Bun

Objectif : construire un petit serveur qui :

1. affiche un formulaire HTML
2. reçoit les données envoyées avec `POST`
3. stocke les soumissions dans un fichier JSON
4. expose une route API qui renvoie ces données

---

## Étape 0 — Préparer le fichier

Créez un fichier dans `06-backend/perso/`, par exemple :

```bash
mkdir -p 06-backend/perso
touch 06-backend/perso/tp-form-backend.js
```

Lancez-le avec :

```bash
bun run 06-backend/perso/tp-form-backend.js
```

---

## Étape 1 — Premier serveur

Affichez une page HTML simple sur `http://localhost:3000`.

Attendu minimum :
- un titre
- un petit texte
- un lien ou un bouton vers le formulaire

---

## Étape 2 — Afficher un formulaire HTML

Ajoutez une route qui renvoie un formulaire avec :

- un champ `name`
- un champ `email`
- un champ `message`
- un bouton "Envoyer"

Le formulaire doit envoyer en `POST`.

Indice :

```html
<form method="POST" action="/submit">
```

---

## Étape 3 — Recevoir le `POST`

Dans la route `/submit`, lisez les données envoyées.

Indice :

```javascript
const formData = await request.formData()
```

Attendu :
- récupérer les valeurs
- renvoyer une page HTML de confirmation

---

## Étape 4 — Sauvegarder les soumissions

Stockez les données dans un fichier `submissions.json`.

💡 Conseil pratique : créez ce fichier à côté de votre script, par exemple avec :

```javascript
const dataFile = new URL("./submissions.json", import.meta.url)
```

Comme ça, le JSON ne part pas se perdre à la racine du repo.

Format conseillé :

```json
[
  {
    "name": "Ada",
    "email": "ada@example.com",
    "message": "Bonjour",
    "createdAt": "2026-03-24T14:00:00.000Z"
  }
]
```

Conseil :
- si le fichier n'existe pas encore, commencez avec `[]`
- lisez l'ancien contenu, ajoutez la nouvelle entrée, puis réécrivez le fichier

---

## Étape 5 — Ajouter une route API

Ajoutez une route :

```text
GET /api/submissions
```

Elle doit renvoyer la liste des soumissions en JSON.

Indice :

```javascript
return Response.json(submissions)
```

---

## Étape 6 — Validation côté serveur

Avant de sauvegarder :

- vérifiez que `name` n'est pas vide
- vérifiez que `message` n'est pas vide
- optionnel : vérifiez que `email` contient `@`

Si ce n'est pas valide, renvoyez une erreur avec un code HTTP adapté.

---

## Bonus

- ajouter un champ `type` (`contact`, `feedback`, `inscription`)
- filtrer les soumissions avec `GET /api/submissions?type=feedback`
- ajouter une page `/submissions` qui affiche les données en HTML
- compter le nombre total de messages
- ajouter un bouton pour vider les soumissions *(bonus avancé)*

---

## Tests manuels

### Depuis le navigateur

- ouvrir le formulaire
- envoyer une soumission
- vérifier la page de confirmation

### Depuis `curl`

```bash
curl http://localhost:3000/api/submissions
```

### Depuis le fichier JSON

Vérifiez que `submissions.json` contient bien les nouvelles entrées.

---

## Objectif minimum / normal / bonus

### Minimum
- serveur lancé
- formulaire affiché
- soumission reçue

### Normal
- sauvegarde JSON
- route API JSON

### Bonus
- validation propre
- filtres
- affichage HTML des soumissions
