const { connection } = require("../connection");

exports.checkLogin = () => {
  return connection("user")
    .select("*")
    .catch(err => {
      console.log("login error: " + err);
    });
};
