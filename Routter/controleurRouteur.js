import express from "express";
import { createRecipe } from "./controllers/contrellers-recette.js";
const router = express.Router();

router.post("/recipes", createRecipe);

router.get("/recipes", recipeController.getAllRecipes);
router.post("/recipes", recipeController.createRecipe);
router.get("/recipes/:id", recipeController.getRecipeById);
router.put("/recipes/:id", recipeController.updateRecipe);
router.delete("/recipes/:id", recipeController.deleteRecipe);

export default router;
