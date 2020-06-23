const { guestsData } = require("../data/guestsData")

exports.seed = function(knex, Promise) {
  return knex("guests").del().then(() => {
    return knex("guests").insert(guestsData)
  })
}