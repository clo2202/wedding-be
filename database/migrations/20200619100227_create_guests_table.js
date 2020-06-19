
exports.up = function(knex) {
  return knex.schema.createTable("guests", guestsTable => {
      guestsTable.increments("guest_id").primary();
      guestsTable.string("name").notNullable();
      guestsTable.boolean("rsvp").notNullable();
      guestsTable.integer("meal_id").references("meals.meal_id").notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("guests");
};
