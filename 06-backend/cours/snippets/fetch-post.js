// Faire une requête POST avec fetch

const response = await fetch("http://localhost:3000/contact", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "Ada", message: "Bonjour" }),
})
const result = await response.json()
console.log(result)