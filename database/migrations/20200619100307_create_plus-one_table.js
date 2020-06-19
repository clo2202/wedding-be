
exports.up = function(knex) {
  return knex.schema.createTable("plus_ones", plusOneTable => {
      plusOneTable.string("plus_one_name");
      plusOneTable.integer("guest_id").references("guests.guest_id");
      plusOneTable.integer("meal_id").references("meals.meal_id");
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("plus_ones");
};
