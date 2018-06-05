'use strict';

const User = require('./user')
//const Cart = require('./cart')
//const CartItems = require('./cartItems');

const Genre = require('./genre');
const Product = require('./product');
const db = require('../db');

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

Product.belongsToMany(Genre, { through: 'productgenre' })
Genre.belongsToMany(Product, { through: 'productgenre' })
//Cart.belongsTo(User);
// User.hasMany(Cart);
// CartItems.belongsTo(Cart);
//Cart.hasMany(CartItems);

module.exports = {
  db,
  User,
  Product,
  Genre,
  //Cart,
 // CartItems
};
