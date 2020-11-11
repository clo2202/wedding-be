const express = require("express");
const photoRouter = express.Router();
const { getPhotos } = require("../controllers/photo-controller");

photoRouter
  .route("/")
  .get(getPhotos)

module.exports = { photoRouter };