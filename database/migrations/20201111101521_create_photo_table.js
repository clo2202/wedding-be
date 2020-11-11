
exports.up = function(knex) {
  return knex.schema.createTable("photo", photoTable => {
      photoTable.increments("photo_id").primary();
      photoTable.string("photo_url");
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("photo")
};
