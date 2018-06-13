const {User} = require('../models')

const faker = require('faker')

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
