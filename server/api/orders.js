const router = require('express').Router()
const {Order, OrderItem, Product, User} = require('../db/models')

module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const orders = await Order.findAll({
      include: [
        {
          model: OrderItem,
          include: [
            {
              model: Product
            }
          ]
        }
      ]
    })
    res.send(orders)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const order = await Order.findOne({
      where: {
        id: req.params.id
      },
      include: [
        {
          model: User
        },
        {
          model: OrderItem,
          include: [
            {
              model: Product
            }
          ]
        }
      ]
    })

    res.send(order)
  } catch (err) {
    next(err)
  }
})

router.get('/:userId', async (req, res, next) => {
  try {
    const orders = await Order.findAll({
      where: {
        userId: req.params.userId
      },
      include: [
        {
          model: OrderItem,
          include: [
            {
              model: Product
            }
          ]
        }
      ]
    })
    res.send(orders)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const order = await Order.create(req.body)
    res.send(order)
  } catch (err) {
    next(err)
  }
})

router.put('/:orderId', async (req, res, next) => {
  try {
    await Order.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    res.sendStatus(201)
  } catch (err) {
    next(err)
  }
})
