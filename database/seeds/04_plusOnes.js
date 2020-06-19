const { plusOnesData } = require("../data/plusOnesData")

exports.seed = function(knex, Promise) {
  return knex("plus_ones").del().then(() => {
    return knex("plus_ones").insert(plusOnesData)
  })
}