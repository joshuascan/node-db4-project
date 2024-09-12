exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("ingredients").insert([
        { ingredient_name: "Butter" },
        { ingredient_name: "Bread" },
        { ingredient_name: "American cheese" },
        { ingredient_name: "Lettuce" },
        { ingredient_name: "Caesar dressing" },
        { ingredient_name: "Parmesan cheese" },
        { ingredient_name: "Ground pepper" },
        { ingredient_name: "White rice" },
        { ingredient_name: "Oil" },
      ]);
    });
};
