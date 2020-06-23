const { connection } = require("../connection");

exports.addRsvp = guest => {
  return connection("guests")
    .insert(guest)
    .returning("*");
};

exports.fetchRsvps = () => {
  return connection("guests").returning("*");
}
