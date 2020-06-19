
exports.up = function(knex) {
  return knex.schema.createTable("meals", mealsTable => {
      mealsTable.increments("meal_id").primary();
      mealsTable.string("meal_type");
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("meals")
};
