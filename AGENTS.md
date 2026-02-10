# AGENTS.md - Coding Agent Guidelines

Repository de cours Web pour les élèves ingénieurs 1A des Mines de Paris.

## Quick Reference

```bash
# Servir un fichier HTML (dev server avec hot reload)
bun perdu.html
bun ./**/*.html

# Exécuter du JS/TS
bun run script.js

# Installer des dépendances
bun install
bun add <pkg>

# Lire un fichier markdown
glow README.md

# Lancer les tests (quand applicable)
bun test
bun test chemin/vers/fichier.test.ts
```

Pas de build step sauf si un framework l'exige.

## Repository Overview

- **Langues** : documentation/commentaires en français, noms de variables en anglais
- **Runtime** : Bun (pas Node, pas npm)
- **Test framework** : vitest via bun (quand applicable)
- **Markdown** : glow pour le rendu terminal

### Structure

```
.
├── README.md              # Infos pratiques, calendrier, install
├── BUN.md                 # Guide Bun
├── GIT.md                 # Guide Git minimum vital
├── 01-introduction/       # Cours 1
│   ├── programme.md       # Déroulé de la séance
│   ├── perdu.html         # HTML brut (copie de perdu.com)
│   ├── perdu_css.html     # Même HTML + CSS commenté
│   └── perdu_js.html      # Même HTML + JS commenté
├── 02-html-css/
├── ...
└── 09-conclusion/
```

## Code Style

### File Naming

- Cours : `programme.md`, `td-*.md`, `*-tp.md`
- Corrections : `correction-*.*` (gitignored)
- Fichiers élèves : préfixe `perso*` (gitignored)
- HTML : kebab-case (`mon-exercice.html`)
- CSS/JS : `style.css`, `script.js`, kebab-case

### HTML

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Titre</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <script src="script.js"></script>
</body>
</html>
```

### CSS

```css
:root {
    --color-primary: #3498db;
    --color-text: #333;
}

.card-container {
    display: flex;
    gap: 1rem;
}
```

### JavaScript

```javascript
const API_URL = "https://api.example.com";
let count = 0;

document.addEventListener("click", (event) => {
    console.log(event.target);
});

async function fetchData(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
    }
    return response.json();
}
```

### Imports (ES Modules)

```javascript
import { createApp } from "vue";
import express from "express";
```

## Git

### Never Commit

- `perso*`, `**/perso/` — fichiers élèves
- `correction-*.*` — corrections au tableau
- `Trombi.pdf`, `presences.csv` — confidentiel
- `node_modules/`, `.env`

### Commit Messages

Bref, verbe en premier, pas d'articles :
- `Add fetch TP instructions`
- `Fix CSS grid example`

## Agent Notes

### Contexte pédagogique

Ce repo est un support de cours. Les fichiers doivent être :
- **Lisibles** par des débutants en web (mais pas en prog — ils connaissent Python/C++)
- **Modifiables** — les élèves expérimentent en cassant/modifiant le code
- **Autonomes** — chaque fichier HTML fonctionne seul (CSS/JS inline ou même dossier)

### Préparer un cours

1. Lire `XX-nom/programme.md` pour le déroulé
2. Les fichiers de démo sont dans le même dossier
3. Pattern courant : HTML de base + variante CSS commentée + variante JS commentée
4. Les élèves décommentent les blocs `<style>` ou `<script>` pour voir l'effet

### Écrire du code

- HTML : balises sémantiques, `lang="fr"`, charset UTF-8
- CSS : flexbox/grid, responsive, animations pour les démos
- JS : `const`/`let`, `querySelector`, `addEventListener`, async/await
- Pas de frameworks sauf si le cours l'exige

### Patterns courants

```javascript
document.querySelector(".element")
document.querySelectorAll(".items")
element.addEventListener("event", handler)
const data = await fetch(url).then(r => r.json())
```

### Bun — pas Node

```bash
bun index.html           # serveur de dev
bun run script.ts        # exécuter
bun init                 # init projet
bun add express          # ajouter un package
bun test                 # lancer les tests
```
