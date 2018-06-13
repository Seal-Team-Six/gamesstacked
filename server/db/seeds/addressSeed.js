const {Address} = require('../models')

const addresses = [
  {
    firstName: 'John',
    lastName: 'Smith',
    addressOne: '21 Jump Street',
    addressTwo: '',
    city: 'New York',
    state: 'New York',
    zip: '10001',
    userId: 1
  },
  {
    firstName: 'Jane',
    lastName: 'Doe',
    addressOne: '23 Jump Street',
    addressTwo: '',
    city: 'Newark',
    state: 'New Jersey',
    zip: '10002',
    userId: 2
  },
  {
    firstName: 'R.',
    lastName: 'Kelly',
    addressOne: '23 Jump Street',
    addressTwo: '',
    city: 'Bridgeport',
    state: 'Connecticut',
    zip: '10003',
    userId: 3
  },
  {
    firstName: 'O.J.',
    lastName: 'Simpson',
    addressOne: '24 Jump Street',
    addressTwo: '',
    city: 'Katona',
    state: 'New York',
    zip: '10004',
    userId: 4
  },
  {
    firstName: 'Kenneth',
    lastName: 'Zhu',
    addressOne: '25 Jump Street',
    addressTwo: '',
    city: 'Brooklyn',
    state: 'New York',
    zip: '10005',
    userId: 5
  },
  {
    firstName: 'Ian',
    lastName: 'Wang',
    addressOne: '26 Jump Street',
    addressTwo: '',
    city: 'Queens',
    state: 'New York',
    zip: '10006',
    userId: 6
  },
  {
    firstName: 'Michael',
    lastName: 'Mcdowal',
    addressOne: '27 Jump Street',
    addressTwo: '',
    city: 'Hartsdale',
    state: 'New York',
    zip: '10007',
    userId: 7
  },
  {
    firstName: 'Yeshi',
    lastName: 'Boutan',
    addressOne: '28 Jump Street',
    addressTwo: '',
    city: 'Some City',
    state: 'New York',
    zip: '10008',
    userId: 8
  },
  {
    firstName: 'Kurt',
    lastName: 'Kobain',
    addressOne: '29 Jump Street',
    addressTwo: '',
    city: 'Seattle',
    state: 'Washington',
    zip: '10009',
    userId: 9
  },
  {
    firstName: 'Billy',
    lastName: 'Corgan',
    addressOne: '30 Jump Street',
    addressTwo: '',
    city: 'Portland',
    state: 'Oregon',
    zip: '10010',
    userId: 10
  }
]

const addressSeed = async () => {
  try {
    console.log('syncing db')
    await Address.bulkCreate(addresses, {returning: true})
  } catch (err) {
    console.error(err)
  } finally {
    console.log('shutting db down')
  }
}

module.exports = addressSeed
