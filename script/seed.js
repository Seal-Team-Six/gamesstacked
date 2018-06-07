const db = require('../server/db/')
const genreSeed = require('../server/db/seeds/genreSeed')
const productSeed = require('../server/db/seeds/productSeed')
const userSeed = require('../server/db/seeds/userSeed')
const addressSeed = require('../server/db/seeds/addressSeed')
const cardSeed = require('../server/db/seeds/cardSeed')


const seed = async () => {
  await db.sync({force: true})
  await userSeed()
  await addressSeed()
  await cardSeed()
  await genreSeed()
  await productSeed()
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  seed()
    .catch(err => {
      console.error(err)
      process.exitCode = 1
    })
    .finally(() => {
      // `finally` is like then + catch. It runs no matter what.
      console.log('closing db connection')
      db.close()
      console.log('db connection closed')
    })
  /*
   * note: everything outside of the async function is totally synchronous
   * The console.log below will occur before any of the logs that occur inside
   * of the async function
   */
  console.log('seeding...')
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
