const { connection } = require("../connection");

exports.fetchPhotos = () => {
  return connection("photo").returning("*");
}