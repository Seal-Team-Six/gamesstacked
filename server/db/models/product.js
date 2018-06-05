const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  summary: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  totalRating: {
    type: Sequelize.DECIMAL,
    allowNull: true,
  },
  price: {
    type: Sequelize.DECIMAL,
    allowNull: false,
  },
  inventory: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  screenshots: {
    type: Sequelize.ARRAY(Sequelize.JSONB),
  },
  videos: {
    type: Sequelize.JSONB,
    allowNull: true,
  },
  cover: {
    type: Sequelize.JSONB,
  },
})

module.exports = Product
