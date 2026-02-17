// ============================================
// 08 — Arguments CLI, prompt et modules
// Exécuter avec : bun run cours/08-prompt-modules.js
// ============================================

// ------------------------------------------
// 1. Arguments de la ligne de commande
// ------------------------------------------

console.log("--- Arguments CLI ---");

// Bun.argv contient les arguments (comme sys.argv en Python)
// Bun.argv[0] = chemin vers bun
// Bun.argv[1] = chemin vers le script
// Bun.argv[2+] = arguments passés par l'utilisateur
console.log("Tous les arguments :", Bun.argv);
console.log("Arguments utilisateur :", Bun.argv.slice(2));

// Essayer : bun run cours/08-prompt-modules.js hello world
if (Bun.argv.length > 2) {
    console.log(`Premier argument : ${Bun.argv[2]}`);
} else {
    console.log("(Essayez : bun run cours/08-prompt-modules.js hello world)");
}


// ------------------------------------------
// 2. Lire l'entrée utilisateur (stdin)
// ------------------------------------------

console.log("\n--- Entrée utilisateur ---");

// La fonction prompt() est disponible dans Bun (pas dans Node !)
// Elle bloque l'exécution en attendant l'input de l'utilisateur
const reponse = prompt("Comment vous appelez-vous ?");
console.log(`Bonjour ${reponse} !`);

const age = prompt("Quel âge avez-vous ?");
console.log(`Vous avez ${age} ans, né·e vers ${new Date().getFullYear() - Number(age)}`);


// ------------------------------------------
// 3. Modules : import / export
// ------------------------------------------

console.log("\n--- Modules (ES Modules) ---");

// En JavaScript moderne, on utilise import/export
// Créons un petit module dans la foulée :

const moduleCode = `
// fichier : perso-math.js
export function addition(a, b) {
    return a + b;
}

export function factorielle(n) {
    if (n <= 1) return 1;
    return n * factorielle(n - 1);
}

export const PI = 3.14159265;
`;

await Bun.write("perso-math.js", moduleCode);
console.log("Module perso-math.js créé !");

// Importer dynamiquement le module qu'on vient de créer
const math = await import("./perso-math.js");
console.log(`addition(3, 4) = ${math.addition(3, 4)}`);
console.log(`factorielle(6) = ${math.factorielle(6)}`);
console.log(`PI = ${math.PI}`);

// En temps normal, on écrit l'import en haut du fichier :
// import { addition, factorielle } from "./perso-math.js";
