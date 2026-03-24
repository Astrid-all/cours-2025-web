# Cours 06 — Support détaillé

Ce document accompagne les slides et le live coding. L'idée n'est pas de tout faire d'un coup, mais de construire progressivement l'intuition suivante :

> Un backend, c'est juste un programme qui écoute sur un port, reçoit des requêtes, puis renvoie des réponses.

---

## 1. Le vocabulaire minimal

- **client** : le programme qui envoie une requête
- **serveur** : le programme qui attend des requêtes
- **adresse IP** : l'adresse d'une machine sur un réseau
- **port** : le numéro qui désigne une application sur cette machine
- **protocole** : les règles communes pour que deux programmes se comprennent

Exemple concret :

```text
https://example.com:443/contact
│      │           │    └── chemin
│      │           └────── port
│      └────────────────── domaine
└───────────────────────── protocole
```

---

## 2. Pourquoi un backend ?

Si on n'a que du frontend :
- les données restent dans le navigateur
- deux utilisateurs ne partagent rien
- impossible de centraliser proprement des soumissions
- impossible de protéger certains secrets

Avec un backend :
- tous les navigateurs parlent au même programme
- le serveur peut valider, stocker, transformer, filtrer
- le serveur peut renvoyer soit du HTML, soit du JSON

---

## 3. Le pattern central de Bun

En Bun, on démarre souvent un serveur comme ça :

```javascript
Bun.serve({
    port: 3000,
    fetch(request) {
        return new Response("Bonjour")
    },
})
```

La fonction `fetch(request)` :
- reçoit l'objet `Request`
- peut lire l'URL, la méthode, les headers, le body
- doit renvoyer un objet `Response`

---

## 4. Les fichiers du dossier `cours/`

### `01-first-server.js`

Le plus petit serveur possible.

### `02-routes-methods.js`

On commence à répondre différemment selon l'URL et la méthode HTTP.

### `03-query-params.js`

On lit des paramètres dans l'URL, par exemple `/hello?name=Ada`.

### `04-html-form.js`

Le serveur renvoie une vraie page HTML contenant un formulaire.

### `05-post-body.js`

On reçoit ce formulaire avec `POST` et on affiche une page de réponse.

### `06-save-submissions.js`

On stocke les soumissions dans un fichier JSON local.

### `07-json-api.js`

Même logique, mais cette fois le serveur répond en JSON.

### `08-udp-server.js`

Hors HTTP : un socket UDP qui reçoit des datagrammes envoyés avec `nc`.

---

## 5. HTML ou JSON ?

Deux grands styles de réponse côté serveur :

### Réponse HTML

Le serveur fabrique directement une page :

```javascript
return new Response("<h1>Merci !</h1>", {
    headers: { "Content-Type": "text/html; charset=utf-8" },
})
```

Pratique pour comprendre le modèle requête/réponse sans ajouter de frontend compliqué.

### Réponse JSON

Le serveur renvoie des données structurées :

```javascript
return Response.json({ ok: true, count: 3 })
```

Pratique quand le client est du JS, une app mobile, ou un autre serveur.

---

## 6. Lire les données envoyées

### Query params

Pour une URL comme :

```text
/search?q=backend&limit=10
```

on lit les paramètres avec `new URL(request.url)`.

### Form body

Pour un formulaire HTML classique :

```javascript
const formData = await request.formData()
const name = formData.get("name")
```

### JSON body

Pour une API :

```javascript
const body = await request.json()
console.log(body.message)
```

---

## 7. Sauvegarder des données

Pour le cours, on reste volontairement simple : un fichier JSON local suffit.

Ce n'est pas la solution la plus robuste en production, mais c'est parfait pour comprendre :
- sérialisation JSON
- lecture / écriture de fichier
- persistance minimale

Avec Bun :

```javascript
await Bun.write("submissions.json", JSON.stringify(data, null, 2))
```

---

## 8. Tester un backend

Trois façons de tester :

1. **Navigateur** — pratique pour voir le HTML
2. **`curl`** — pratique pour contrôler exactement la requête
3. **`nc`** — pratique pour montrer qu'en UDP on n'est plus dans HTTP

Exemples :

```bash
curl http://localhost:3000/hello?name=Ada
curl -X POST http://localhost:3000/api/submissions \
  -H "Content-Type: application/json" \
  -d '{"name":"Ada","message":"Bonjour"}'
echo "ping" | nc -u -w1 127.0.0.1 4001
```

---

## 9. Fil conducteur pédagogique

Le cours suit toujours la même montée en abstraction :

1. le réseau transporte des messages
2. TCP/UDP choisissent une stratégie de transport
3. HTTP définit une forme de dialogue
4. Bun permet d'écrire le programme serveur
5. le serveur peut ensuite servir un formulaire, recevoir les données, les stocker et les exposer

Si ce fil est clair, le reste du backend devient beaucoup plus facile à comprendre.
