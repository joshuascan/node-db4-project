const express = require("express");
const Recipe = require("./model");
const router = express.Router();

router.get("/:id", (req, res, next) => {
  const { recipe_id } = req.params;

  Recipe.getRecipeById(recipe_id)
    .then((recipe) => {
      res.status(400).json(recipe);
    })
    .catch(next);
});

module.exports = router;
