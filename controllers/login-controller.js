const { checkLogin } = require("../models/login-model");
const bycrpt = require("bcrypt");

exports.postLogin = (req, res, next) => {
  checkLogin(req.body).then(([login]) => {
    bycrpt.compare(req.body.password, login.password_hash).then(result => {
        if(result) {
            res.status(201).send({auth: true, token: null})
        } else {
            res.status(401).send({auth: false, token: null})
        }
    });
  });
};
