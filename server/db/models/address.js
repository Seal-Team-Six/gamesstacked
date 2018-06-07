const Sequelize = require('sequelize')
const db = require('../db')

const Address = db.define('address', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  addressOne: {
    type: Sequelize.STRING,
    allowNull: false
  },
  addressTwo: {
    type: Sequelize.STRING
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false
  },
  state: {
    type: Sequelize.STRING,
    allowNull: false
  },
  zip: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Address
