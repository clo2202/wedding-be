const { connection } = require("../connection");

exports.addRsvp = rsvp => {
  return connection("rsvp")
    .insert(rsvp)
    .returning("*");
};
