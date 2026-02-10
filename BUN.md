# Bun — Guide d'installation

[Bun](https://bun.sh) est un runtime JavaScript ultra-rapide. On l'utilise tout au long du cours comme outil principal.

## Installation

### macOS / Linux

```bash
curl -fsSL https://bun.sh/install | bash
```

### Windows (Git Bash)

```bash
curl -fsSL https://bun.sh/install | bash
```

> Après l'installation, **redémarrer le terminal** pour que la commande `bun` soit disponible.

### Vérifier

```bash
bun --version
```

---

## Commandes essentielles

### Servir un fichier HTML

```bash
bun index.html
```

Lance un serveur de développement sur http://localhost:3000 avec rechargement automatique.

### Servir plusieurs fichiers HTML

```bash
bun ./**/*.html
```

### Exécuter un fichier JavaScript / TypeScript

```bash
bun run script.js
bun run script.ts
```

### Initialiser un projet

```bash
bun init
```

Crée un `package.json` et la structure de base.

### Installer des dépendances

```bash
bun install              # installe tout depuis package.json
bun add express          # ajoute un package
bun add -d vitest        # ajoute un package de dev
bun remove express       # supprime un package
```

### Lancer un script du package.json

```bash
bun run dev
bun run test
```

---

## Pourquoi Bun ?

- **Rapide** : démarrage quasi-instantané
- **Tout-en-un** : runtime + bundler + gestionnaire de packages + serveur de dev
- **Compatible** : exécute du JavaScript, TypeScript et JSX sans config
- **Simple** : `bun fichier.html` et c'est parti

---

## Ressources

- [Documentation officielle](https://bun.sh/docs)
- [HTML & sites statiques](https://bun.sh/docs/bundler/html-static)
