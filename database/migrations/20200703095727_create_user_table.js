exports.up = function(knex) {
  return knex.schema.createTable("user", userTable => {
    userTable.increments("user_id").primary();
    userTable.string("username");
    userTable.string("password_hash", 1000);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("user");
};
