const {User} = require('../models')
const db = require('../')

const faker = require('faker')

// Helpers functions
const floor = function(random) {
  return Math.floor(random)
}

const random = function(min = 0, max) {
  return Math.random() * (max - min + 1) + min
}

// Database seed

const userSeed = async () => {
  try {
    const UserData = [
      {
        firstName: 'team6',
        lastName: 'team6',
        email: 'team6@6.com',
        password: 'password',
        imageUrl:
          'https://pbs.twimg.com/profile_images/1431161157/guy-fawkes_400x400.jpeg',
        admin: true
      }
    ]

    // Create Silly Name Universities and Faker addresses
    for (let i = 0; i < 10; i++) {
      UserData.push({
        firstName: `${faker.name.firstName()}`,
        lastName: `${faker.name.lastName()}`,
        email: `${faker.internet.email()}`,
        // imageUrl: `${faker.image.imageUrl()}`,
        // phone: `${faker.phone.phoneNumber()}`,
        password: `password`
      })
    }

    await User.bulkCreate(UserData, {returning: true})
    console.log('[SUCCESS]: Database synced successfully.')
  } catch (err) {
    console.log('[ERROR]: Database not synced successfully.')
    console.log(err)
  } finally {
    console.log('Shutting genre connection')
    console.log('Genre db closed')
  }
}

module.exports = userSeed
