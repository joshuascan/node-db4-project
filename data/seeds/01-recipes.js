exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("recipes")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("recipes").insert([
        { recipe_name: "Grilled Cheese Sandwich" },
        { recipe_name: "Caesar Salad" },
        { recipe_name: "Fried Rice" },
      ]);
    });
};
