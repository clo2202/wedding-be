const express = require("express");
const rsvpRouter = express.Router();
const { postRsvp, getRsvps } = require("../controllers/rsvp-controller");

rsvpRouter
  .route("/")
  .post(postRsvp)
  .get(getRsvps);

module.exports = { rsvpRouter };
