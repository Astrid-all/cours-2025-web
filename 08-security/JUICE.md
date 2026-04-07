# Juice Shop 🍹

**Objectif** : découvrir une application web volontairement vulnérable, observer son comportement, puis résoudre quelques challenges simples sans sortir du cadre du cours.

---

## 🎯 Ce qu'il faut retenir

- on travaille sur une **application prévue pour l'entraînement**
- on observe d'abord, on teste ensuite
- une bonne piste vient souvent d'un **détail visible** : bouton, message, requête, champ, URL, erreur
- le but n'est pas de “tout casser”, mais de **comprendre pourquoi ça marche**

---

## 🚦 Cadre de la séance

- on utilise **uniquement** l'instance du cours
- on ne reproduit rien sur un vrai site sans autorisation explicite
- on avance par hypothèses simples
- on garde une trace de ce qu'on a essayé

URL du cours : https://secu.web-groupe1.info-mines.paris/balancer/

---

## ▶️ Démarrage

1. Ouvrez l'URL du cours.
2. Choisissez un **nom d'équipe** avec votre binôme.
3. Cliquez sur **Create / Join Team**.
4. Attendez que le bouton **Start Hacking** apparaisse.
5. Cliquez dessus pour ouvrir votre instance de Juice Shop.

Chaque équipe a sa propre instance.

---

## 🔎 Comment chercher efficacement

Commencez par regarder :

- la page d'accueil
- le menu
- les formulaires
- la recherche
- les messages affichés à l'écran
- les URLs

Puis ouvrez les DevTools du navigateur :

- **Network** pour voir les requêtes
- **Console** pour repérer des erreurs ou du JavaScript intéressant
- **Application / Storage** pour voir cookies et stockage local

Méthode simple :

1. faire une hypothèse
2. tester une seule chose
3. observer ce qui change
4. recommencer

---

## 💡 Conseils utiles

- cliquez partout, mais **en observant**
- lisez vraiment les messages d'erreur
- comparez une action “normale” et une action “bizarre”
- testez les champs de recherche, de connexion, de formulaire et les paramètres d'URL
- regardez si le frontend envoie une requête intéressante au serveur
- si vous êtes bloqués, revenez à quelque chose de visible et simple

---

## 🧪 Idées de premières pistes

- chercher un produit ou un mot étrange
- essayer de trier, filtrer, naviguer dans le catalogue
- observer ce qui se passe quand on se connecte ou quand on échoue à se connecter
- repérer les éléments visibles qui donnent une piste : bannière d'accueil, bouton 🎓, labels, noms de pages, messages
- ouvrir le scoreboard quand il devient accessible : Juice Shop l'utilise comme point d'entrée vers les challenges et leurs hints

---

## 🧩 Si vous êtes bloqués

### Indice 1

Dans Juice Shop, beaucoup de premiers indices sont déjà visibles dans l'application elle-même.

<details>
<summary>Voir l'indice</summary>

Regardez d'abord ce qui est mis en avant : bannière d'accueil, bouton 🎓, menu, page de connexion, scoreboard et boutons de hint quand ils apparaissent.

</details>

### Indice 2

Quand une entrée utilisateur existe, on peut souvent apprendre beaucoup en changeant légèrement ce qu'on envoie.

<details>
<summary>Voir l'indice</summary>

Testez une variation à la fois, puis observez **Network** : mot inhabituel, caractère spécial, valeur vide, valeur très longue, ordre différent.

</details>

---

## 🏁 Si vous finissez vite

- essayez d'expliquer à un autre binôme **comment vous avez trouvé**, pas seulement **ce qu'il fallait faire**
- notez les indices qui vous ont aidés
- cherchez une deuxième manière de confirmer votre hypothèse

---

## ✅ Règle d'or

> Observer → formuler une hypothèse → tester proprement → comprendre la cause.
