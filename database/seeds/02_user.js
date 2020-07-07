const bcrypt = require("bcrypt");
const saltRounds = 10;
const { user_login } = require("../../credentials");

const hash = bcrypt.hashSync(user_login, saltRounds);

exports.seed = function(knex, Promise) {
    return knex("user").del().then(() => {
        return knex("user").insert({username: "Guest", password_hash: hash})
    })
}