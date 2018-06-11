const Sequelize = require('sequelize')
const db = require('../db')

const OrderItem = db.define('orderItem', {
  quantity: {type: Sequelize.INTEGER, defaultValue: 1}
})

OrderItem.createAfterOrder = options => {
  OrderItem.create(options)
    .then(item => {
      console.log(item)
    })
    .catch(err => {
      console.log(err)
    })
}

module.exports = OrderItem
