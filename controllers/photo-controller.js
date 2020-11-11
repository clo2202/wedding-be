const { fetchPhotos } = require("../models/photo-model");

exports.getPhotos = (req, res, next) => {
    fetchPhotos().then(photos => {
      res.status(200).send({ photos });
    });
  };