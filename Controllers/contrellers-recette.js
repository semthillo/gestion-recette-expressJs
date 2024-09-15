let recettes = []; // Base de données temporaire

// Obtenir toutes les recettes
export function getAllRecipes(req, res) {
  res.json(recettes);
}

// Obtenir une recette par ID
export function getRecipeById(req, res) {
  const recette = recettes.find((r) => r.id === parseInt(req.params.id));
  if (!recette) {
    return res.status(404).json({ message: "Recette non trouvée" });
  }
  res.json(recette);
}

// Créer une nouvelle recette
export function createRecipe(req, res) {
  const nouvelleRecette = {
    id: recettes.length + 1,
    titre: req.body.titre,
    ingredient: req.body.ingredient,
    type: req.body.type,
  };
  recettes.push(nouvelleRecette);
  res.status(201).json(nouvelleRecette);
}

// Mettre à jour une recette par ID
export function updateRecipe(req, res) {
  const recette = recettes.find((r) => r.id === parseInt(req.params.id));
  if (!recette) {
    return res.status(404).json({ message: "Recette non trouvée" });
  }

  // Mettre à jour les champs avec les données fournies
  recette.titre = req.body.titre || recette.titre;
  recette.ingredient = req.body.ingredient || recette.ingredient;
  recette.description = req.body.description || recette.description;
  recette.type = req.body.type || recette.type;

  res.json(recette);
}

// Supprimer une recette par ID
export function deleteRecipe(req, res) {
  const index = recettes.findIndex((r) => r.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({ message: "Recette non trouvée" });
  }

  recettes.splice(index, 1);
  res.status(204).send();
}
