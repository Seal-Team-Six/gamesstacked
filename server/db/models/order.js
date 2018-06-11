const Sequelize = require('sequelize')
const db = require('../db')

const Cart = require('./Cart')
const CartItem = require('./CartItems')
const OrderItem = require('./orderItems')

// Order Schema Setup
const Order = db.define('order', {
  orderStatus: Sequelize.ENUM('shipped', 'paid', 'error'),
  subTotal: Sequelize.FLOAT
})

// Creates order items and destroys cart and cart items after order is created
Order.afterCreate(async order => {
  const {userId, id} = order

  const cartItems = await CartItem.findAll({where: {userId}})

  cartItems.forEach(item => {
    const {productId, quantity} = item

    OrderItem.createAfterOrder({productId, orderId: id, userId, quantity})
  })

  Cart.destroy({where: {userId}})
})

module.exports = Order
