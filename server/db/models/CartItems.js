const Sequelize = require('sequelize');
const db = require('../db');

const CartItems = db.define('cartItem', {});

module.exports = CartItems;
