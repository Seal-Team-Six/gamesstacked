const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const Card = db.define('card', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  number: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isCreditCard: true
    },
    get() {
      return () => this.getDataValue('number')
    }
  },
  CVV: {
    type: Sequelize.STRING,
    allowNull: false,
    get() {
      return () => this.getDataValue('CVV')
    }
  },
  salt: {
    type: Sequelize.STRING,
    get() {
      return () => this.getDataValue('salt')
    }
  },
  exp: {
    type: Sequelize.STRING,
    allowNull: false
  },
  display: {
    type: Sequelize.STRING
  }
})

module.exports = Card

Card.prototype.correctNumber = function(candidateNumber) {
  return Card.encryptNumberCVV(candidateNumber, this.salt()) === this.number()
}

Card.prototype.correctCVV = function(candidateCVV) {
  return Card.encryptNumberCVV(candidateCVV, this.salt()) === this.CVV()
}

Card.generateSalt = function() {
  return crypto.randomBytes(16).toString('base64')
}

Card.encryptNumberCVV = function(plainText, salt) {
  return crypto
    .createHash('RSA-SHA256')
    .update(plainText)
    .update(salt)
    .digest('hex')
}

const setSaltNumberCVV = cards => {
  if (Array.isArray(cards)) {
    cards.forEach(card => {
      if (card.changed('number') || card.changed('CVV')) {
        card.salt = Card.generateSalt()
        card.display = card.number().slice(-4)
        card.number = Card.encryptNumberCVV(card.number(), card.salt())
        card.CVV = Card.encryptNumberCVV(card.CVV(), card.salt())
      }
    })
  } else if (cards.changed('number') || cards.changed('CVV')) {
    cards.salt = Card.generateSalt()
    cards.display = cards.number().slice(-4)
    cards.number = Card.encryptNumberCVV(cards.number(), cards.salt())
    cards.CVV = Card.encryptNumberCVV(cards.CVV(), cards.salt())
  }
}

Card.beforeCreate(setSaltNumberCVV)
Card.beforeBulkCreate(setSaltNumberCVV)
Card.beforeUpdate(setSaltNumberCVV)
