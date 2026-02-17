// ============================================
// 06 — Map, Set et pièges classiques
// Exécuter avec : bun run cours/06-map-set.js
// ============================================

// ------------------------------------------
// Map — équivalent de dict en Python
// ------------------------------------------

console.log("--- Map ---");

const scores = new Map();
scores.set("Alice", 95);
scores.set("Bob", 87);
scores.set("Charlie", 92);

console.log(`Score d'Alice : ${scores.get("Alice")}`);
console.log(`Bob existe ? ${scores.has("Bob")}`);

for (const [nom, score] of scores) {
    console.log(`  ${nom}: ${score}`);
}

// ------------------------------------------
// Set — pas de doublons
// ------------------------------------------

console.log("\n--- Set ---");

const unique = new Set([1, 2, 3, 2, 1, 4]);
console.log(`Set: ${[...unique]}`);  // [1, 2, 3, 4]
unique.add(5);
console.log(`Contient 3 ? ${unique.has(3)}`);


// ------------------------------------------
// Quelques pièges classiques
// ------------------------------------------

console.log("\n--- Pièges ---");

// typeof null
console.log(`typeof null = "${typeof null}"`);  // "object" — bug historique

// NaN
console.log(`3 * "abc" = ${3 * "abc"}`);  // NaN
console.log(`NaN === NaN ? ${NaN === NaN}`);  // false !
console.log(`isNaN(NaN) ? ${isNaN(NaN)}`);   // true — utiliser isNaN()

// Coercion de type
console.log(`"5" + 3 = "${"5" + 3}"`);    // "53" (concaténation)
console.log(`"5" - 3 = ${"5" - 3}`);       // 2 (conversion en nombre)
// Morale : toujours utiliser === et être explicite sur les types
