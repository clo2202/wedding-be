const { photoData } = require('../data/photoData');

exports.seed = function(knex, Promise) {
    return knex("photo").del().then(() => {
        return knex("photo").insert(photoData)
    })
}