
exports.up = function(knex) {
  return knex.schema.createTable("songs", songsTable => {
      songsTable.string("song_name");
      songsTable.increments("guest_id").references("guests.guest_id");
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("songs");
};
