const express = require("express");
const apiRouter = express.Router();
const { rsvpRouter } = require("./rsvp-router");
const { loginRouter } = require("./login-router");

apiRouter.use("/rsvp", rsvpRouter);
apiRouter.use("/login", loginRouter);

module.exports = { apiRouter };
