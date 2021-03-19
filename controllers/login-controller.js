const { checkLogin } = require("../models/login-model");
const bycrpt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.postLogin = (req, res, next) => {
  checkLogin(req.body).then(([login]) => {
    bycrpt
      .compare(req.body.password, login.password_hash)
      .then(result => {
        if (result) {
          const token = jwt.sign(
            { id: login.username },
            process.env.JWT_SECRET,
            {
              expiresIn: 7200
            }
          );
          res.status(201).send({ auth: true, token });
        } else {
          res.status(401).send({ auth: false, token: null });
        }
      })
      .catch(err => {
        console.log(err + "error in login");
      });
  });
};
