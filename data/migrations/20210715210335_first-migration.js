exports.up = async function (knex) {
  await knex.schema
    .createTable("recipes", (table) => {
      table.increments("recipe_id");
      table.string("recipe_name", 100).notNullable().unique();
      table.timestamp("created_at").defaultTo(knex.fn.now());
    })
    .createTable("steps", (table) => {
      table.increments("step_id");
      table.integer("step_number").unsigned().notNullable();
      table.text("instructions", 250).notNullable();
      table
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("recipe_id")
        .inTable("recipes")
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT");
    })
    .createTable("ingredients", (table) => {
      table.increments("ingredient_id");
      table.string("ingredient_name", 50);
    })
    .createTable("step_ingredients", (table) => {
      table.increments("step_ingredient_id");
      table.string("quantity", 25);
      table
        .integer("step_id")
        .unsigned()
        .notNullable()
        .references("step_id")
        .inTable("steps")
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT");
      table
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("ingredient_id")
        .inTable("ingredients")
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT");
    });
};

exports.down = async function (knex) {
  await knex.schema
    .dropTableIfExists("step_ingredients")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("steps")
    .dropTableIfExists("recipes");
};
