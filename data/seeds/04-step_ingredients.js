exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("step_ingredients")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("step_ingredients").insert([
        { quantity: "2 tbsp", step_id: 1, ingredient_id: 1 },
        { quantity: "2 slices", step_id: 2, ingredient_id: 2 },
        { quantity: "4 slices", step_id: 2, ingredient_id: 3 },
        { quantity: "1 head", step_id: 1, ingredient_id: 4 },
        { step_id: 2, ingredient_id: 4 },
        { quantity: "1/4 cup", step_id: 2, ingredient_id: 5 },
        { quantity: "3 tbsp", step_id: 2, ingredient_id: 6 },
        { step_id: 3, ingredient_id: 7 },
        { quantity: "2 cups", step_id: 1, ingredient_id: 8 },
        { quantity: "2 tbsp", step_id: 2, ingredient_id: 9 },
        { step_id: 3, ingredient_id: 8 },
      ]);
    });
};
