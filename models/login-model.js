const { connection } = require("../connection");

exports.checkLogin = () => {
  return connection("user").select("*");
};
