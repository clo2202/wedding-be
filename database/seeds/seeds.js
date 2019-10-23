const { rsvpData } = require("../data/rsvpData");

exports.seed = function(knex, Promise) {
  return knex.migrate
    .rollback()
    .then(() => knex.migrate.latest())
    .then(() => {
      return knex.insert(rsvpData).into("rsvp");
    });
};
