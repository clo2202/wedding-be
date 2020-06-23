const { addRsvp, fetchRsvps } = require("../models/rsvp-model");

exports.postRsvp = (req, res, next) => {
  addRsvp(req.body).then(([rsvp]) => {
    res.status(201).send({ rsvp });
  });
};

exports.getRsvps = (req, res, next) => {
  fetchRsvps().then(rsvps => {
    res.status(200).send({ rsvps });
  });
};
