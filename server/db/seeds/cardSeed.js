const faker = require('faker')
const db = require('../db')
const {Card} = require('../models')

const cards = [
  {
    name: faker.name.findName(),
    number: '4648064324630900',
    CVV: '123',
    exp: '03/20',
    userId: 1
  },
  {
    name: faker.name.findName(),
    number: '4008254898113060',
    CVV: '123',
    exp: '03/20',
    userId: 2
  },
  {
    name: faker.name.findName(),
    number: '4737352741532144',
    CVV: '123',
    exp: '03/20',
    userId: 3
  },
  {
    name: faker.name.findName(),
    number: '4642697750745803',
    CVV: '123',
    exp: '03/20',
    userId: 4
  },
  {
    name: faker.name.findName(),
    number: '4951806619857478',
    CVV: '123',
    exp: '03/20',
    userId: 5
  },
  {
    name: faker.name.findName(),
    number: '4685053665418755',
    CVV: '123',
    exp: '03/20',
    userId: 6
  },
  {
    name: faker.name.findName(),
    number: '4488666891472616',
    CVV: '123',
    exp: '03/20',
    userId: 7
  },
  {
    name: faker.name.findName(),
    number: '4848062552258269',
    CVV: '123',
    exp: '03/20',
    userId: 8
  }
]

const cardSeed = async () => {
  try {
    await Card.bulkCreate(cards, {returning: true})
    console.log('[SUCCESS]: Database synced successfully.')
  } catch (err) {
    console.log('[ERROR]: Database not synced successfully.')
    console.error(err)
  } finally {
    console.log('Shutting genre connection')
  }
}

module.exports = cardSeed
