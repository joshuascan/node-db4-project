const db = require("../data/db-config");

async function getRecipeById(recipe_id) {
  const rows = await db("recipes as r")
    .leftJoin("steps as s", "r.recipe_id", "s.recipe_id")
    .leftJoin("step_ingredients as st", "s.step_id", "st.step_id")
    .leftJoin("ingredients as i", "st.ingredient_id", "i.ingredient_id")
    .select("r.recipe_name", "r.created_at", "s.*", "st.quantity", "i.*")
    .where("r.recipe_id", recipe_id)
    .orderBy("s.step_number");

  const result = {
    recipe_id: rows[0].recipe_id,
    recipe_name: rows[0].recipe_name,
    created_at: rows[0].created_at,
    steps: [],
  };

  rows.forEach((row) => {
    result.steps.push({
      step_id: row.step_id,
      step_number: row.step_number,
      instructions: row.instructions,
      ingredients: createIngredients(),
    });
  });

  const createIngredients = () => {
    return rows.forEach((row) => {
      if (row.ingredient_id) {
        result.steps.ingredients.push({
          ingredient_id: row.steps.ingredient_id,
          ingredient_name: row.steps.ingredient_name,
          quantity: row.steps.quantity,
        });
      }
    });
  };

  return result;
}

module.exports = {
  getRecipeById,
};
