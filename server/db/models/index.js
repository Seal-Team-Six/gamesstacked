'use strict'

const User = require('./user')
const Cart = require('./Cart')
const CartItems = require('./CartItems')
const Address = require('./address')
const Genre = require('./genre')
const Product = require('./product')
const Order = require('./order')
const OrderItem = require('./orderItems')
const db = require('../db')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */

// This is a comment to test travis

Cart.belongsTo(User)
User.hasMany(Cart)

CartItems.belongsTo(Cart, {onDelete: 'cascade'})
Cart.hasMany(CartItems)

CartItems.belongsTo(Product)
Product.hasMany(CartItems)

CartItems.belongsTo(User)
User.hasMany(CartItems)

Product.belongsToMany(Genre, {through: 'productgenre'})
Genre.belongsToMany(Product, {through: 'productgenre'})

User.hasMany(Address)
Address.belongsTo(User)

User.hasMany(Order)
Order.belongsTo(User)

Order.hasMany(OrderItem)
OrderItem.belongsTo(Order)

OrderItem.belongsTo(Product)
Product.hasMany(OrderItem)

module.exports = {
  db,
  User,
  Product,
  Genre,
  Cart,
  CartItems,
  Address,
  Order,
  OrderItem
}
