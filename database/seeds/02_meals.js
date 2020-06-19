const { mealsData } = require("../data/mealsData")

exports.seed = function(knex, Promise) {
  return knex("meals").del().then(() => {
    return knex("meals").insert(mealsData)
  })
}