const express = require("express");
const app = express();
const port = 3000;

// Middleware pour gérer les requêtes JSON (si besoin)
app.use(express.json());

// Route principale
app.get("/", (req, res) => {
  res.send("Bienvenue sur lapplication de gestion de recettes!");
});

// Route pour afficher les recettes
app.get("/recettes", (req, res) => {
  const recettes = [
    {
      id: 1,
      nom: "Tarte aux pommes",
      description:
        "Une tarte délicieuse garnie de tranches de pommes fraîches, légèrement sucrée avec un soupçon de cannelle.",
    },
    {
      id: 2,
      nom: "Spaghetti Bolognaise",
      description:
        "Un plat classique italien avec des spaghettis al dente et une sauce riche à base de viande hachée, tomates, et épices.",
    },
    {
      id: 3,
      nom: "Poulet Tandoori",
      description:
        "Du poulet mariné dans un mélange d'épices tandoori et de yaourt, grillé à la perfection pour un goût épicé et fumé.",
    },
    {
      id: 4,
      nom: "Salade César",
      description:
        "Une salade croquante avec des feuilles de romaine, du poulet grillé, des croûtons, et une sauce César crémeuse.",
    },
    {
      id: 5,
      nom: "Brownies au chocolat",
      description:
        "Des brownies moelleux et riches, parfaits pour les amateurs de chocolat, avec une texture fondante à l'intérieur.",
    },
  ];

  res.json(recettes);
});

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
