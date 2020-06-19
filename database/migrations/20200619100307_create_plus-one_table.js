
exports.up = function(knex) {
  return knex.schema.createTable("plus_ones", plusOneTable => {
      plusOneTable.increments("plus_one_id").primary();
      plusOneTable.string("plus_one_name");
      plusOneTable.integer("meal_id").references("meals.meal_id");
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("plus_ones");
};
