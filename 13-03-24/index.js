const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3123;

// array di ricette
let recipes = [
  {
    id: 1,
    name: "Pasta al Pomodoro",
    ingredients: ["pasta", "pomodoro", "olio d'oliva", "aglio", "basilico"],
    instructions:
      "Cuocere la pasta, fare un sugo con pomodoro, olio, aglio e basilico, condire la pasta con il sugo.",
  },
];

app.use(express.json());
app.use(cors());

// Endpoint per ottenere tutte le ricette
app.get("/recipes", (req, res, next) => {
  res.json(recipes);
});

// Endpoint per aggiungere una nuova ricetta
app.post("/recipes", (req, res, next) => {
  const body = req.body;

  if (body.id && body.name && body.ingredients && body.instructions) {
    recipes.push(body);
    res.status(201).send("La ricetta è stata correttamente aggiunta");
  } else {
    res.status(400).send(`La struttura dell'oggetto non è valida`);
  }
});

// Endpoint per eliminare una ricetta
app.delete("/recipes/:id", (req, res, next) => {
  const id = Number(req.params.id);

  recipes = recipes.filter((recipe) => recipe.id !== id);
  res.send("La ricetta è stata rimossa!");
});

// Endpoint per aggiornare una ricetta esistente
app.put("/recipes/:id", (req, res, next) => {
  const id = Number(req.params.id);
  const body = req.body;
  const index = recipes.findIndex((recipe) => recipe.id === id);

  // Verifica se l'ID specificato corrisponde a una ricetta esistente
  if (index === -1) {
    res.status(400).send("Non ho trovato la ricetta");
  } else {
    recipes[index] = body;
    res.send("La ricetta è stata modificata!");
  }
});

app.listen(PORT, () => {
  console.log(PORT);
});
