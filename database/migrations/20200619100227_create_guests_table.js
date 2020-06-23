
exports.up = function(knex) {
  return knex.schema.createTable("guests", guestsTable => {
      guestsTable.increments("guest_id").primary();
      guestsTable.string("name").notNullable();
      guestsTable.boolean("rsvp").notNullable();
      guestsTable.string("meal");
      guestsTable.string("song_suggestion");
      guestsTable.string("plus_one_name");
      guestsTable.string("plus_one_meal");
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("guests");
};
