const express = require("express");
const apiRouter = express.Router();
const { rsvpRouter } = require("./rsvp-router");

apiRouter.use("/rsvp", rsvpRouter);

module.exports = { apiRouter };
