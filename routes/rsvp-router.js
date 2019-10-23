const express = require("express");
const rsvpRouter = express.Router();
const { postRsvp } = require("../controllers/rsvp-controller");

rsvpRouter.route("/").post(postRsvp);

module.exports = { rsvpRouter };
