const express = require("express");
const apiRouter = express.Router();
const { rsvpRouter } = require("./rsvp-router");
const { loginRouter } = require("./login-router");
const { photoRouter } = require("./photo-router");


apiRouter.use("/rsvp", rsvpRouter);
apiRouter.use("/login", loginRouter);
apiRouter.use("/photos", photoRouter);


module.exports = { apiRouter };
