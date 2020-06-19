
exports.up = function(knex) {
  return knex.schema.createTable("guests", guestsTable => {
      guestsTable.increments("guest_id").primary();
      guestsTable.string("name").notNullable();
      guestsTable.boolean("rsvp").notNullable();
      guestsTable.integer("plus_one_id").references("plus_ones.plus_one_id");
      guestsTable.integer("meal_id").references("meals.meal_id").notNullable();
      guestsTable.integer("song_id").references("songs.song_id")
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("guests");
};
