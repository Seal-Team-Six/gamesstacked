const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/products', require('./products'))
router.use('/cart', require('./carts'))
router.use('/cart_items', require('./cartItems'))
router.use('/stripe', require('./stripe'))
router.use('/address', require('./address'))
router.use('/orders', require('./orders'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
