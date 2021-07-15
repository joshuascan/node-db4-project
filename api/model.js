const db = require("../data/db-config");

async function getRecipeById(recipe_id) {
  const rows = await db("recipes as r")
    .leftJoin("steps as s", "r.recipe_id", "s.recipe_id")
    .leftJoin("step_ingredients as st", "s.step_id", "st.step_id")
    .leftJoin("ingredients as i", "st.ingredient_id", "i.ingredient_id")
    .select("r.recipe_name", "r.created_at", "s.*", "st.quantity", "i.*");

  return rows;
}

module.exports = {
  getRecipeById,
};
