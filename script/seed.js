'use strict'

const db = require('../server/db/')
const genreSeed = require('../server/db/seeds/genreSeed')
const productSeed = require('../server/db/seeds/productSeed')
const userSeed = require('../server/db/seeds/userSeed')

const seed = async () => {
  await db.sync({force: true})
  await userSeed()
  await genreSeed()
  await productSeed()
  db.close()
}

seed()


// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed