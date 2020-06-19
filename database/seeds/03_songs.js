const { songsData } = require("../data/songsData")

exports.seed = function(knex, Promise) {
  return knex("songs").del().then(() => {
    return knex("songs").insert(songsData)
  })
}
