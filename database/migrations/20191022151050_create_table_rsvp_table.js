exports.up = function(knex) {
  return knex.schema.createTable("rsvp", rsvpTable => {
    rsvpTable.increments("rsvp_id").primary();
    rsvpTable.string("name").notNullable();
    rsvpTable.boolean("attendance").notNullable();
    rsvpTable.string("meal").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("rsvp");
};
