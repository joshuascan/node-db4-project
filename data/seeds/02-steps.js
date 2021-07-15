exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("steps")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("steps").insert([
        { step_number: 1, instructions: "Heat butter in pan", recipe_id: 1 },
        { step_number: 2, instructions: "Add bread and cheese", recipe_id: 1 },
        { step_number: 3, instructions: "Saute for 8 minutes", recipe_id: 1 },
        { step_number: 1, instructions: "Chop lettuce", recipe_id: 2 },
        {
          step_number: 2,
          instructions: "Mix lettuce, dressing, and cheese in bowl",
          recipe_id: 2,
        },
        {
          step_number: 3,
          instructions: "Add ground pepper to taste",
          recipe_id: 2,
        },
        { step_number: 1, instructions: "Steam white rice", recipe_id: 3 },
        { step_number: 2, instructions: "Heat oil in pan", recipe_id: 3 },
        {
          step_number: 3,
          instructions: "Saute rice until browned",
          recipe_id: 3,
        },
        { step_number: 4, instructions: "Serve while hot", recipe_id: 3 },
      ]);
    });
};
