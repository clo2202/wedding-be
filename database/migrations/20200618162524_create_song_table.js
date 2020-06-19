
exports.up = function(knex) {
  return knex.schema.createTable("songs", songsTable => {
      songsTable.increments("song_id").primary();
      songsTable.string("song_name");
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("songs");
};
