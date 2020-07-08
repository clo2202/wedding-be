const { checkLogin } = require("../models/login-model");
const bycrpt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.postLogin = (req, res, next) => {
  checkLogin(req.body).then(([login]) => {
    bycrpt.compare(req.body.password, login.password_hash).then(result => {
        if(result) {
            const  token = jwt.sign({ id: login.username }, process.env.JWT_SECRET, {
                expiresIn: 86400
              });
            res.status(201).send({auth: true, token})
        } else {
            res.status(401).send({auth: false, token: null})
        }
    });
  }).next((err) => {
      res.status(400).send(`${err}, there has been an error`)
  })
};
