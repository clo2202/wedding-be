const { addRsvp } = require("../models/rsvp-model");

exports.postRsvp = (req, res, next) => {
  addRsvp(req.body).then(([rsvp]) => {
    res.status(201).send({ rsvp });
  });
};
