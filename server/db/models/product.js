const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false
  },
  summary: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  totalRating: {
    type: Sequelize.DECIMAL,
    allowNull: true
  },
  price: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },
  inventory: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  images: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isUrl: true
    }
  },
  videos: {
    type: Sequelize.STRING,
    allowNull: true
  }
})

module.exports = Product
