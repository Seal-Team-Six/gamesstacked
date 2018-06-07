const router = require('express').Router()
const {Cart, CartItems, Product} = require('../db/models')
module.exports = router

router.post('/', (req, res, next) => {
  CartItems.create(req.body)
    .then(item => {
      CartItems.findOne({
        where: {
          id: item.id
        },
        include: [
          {
            model: Product
          }
        ]
      }).then(newItem => {
        res.send(newItem)
      })
    })
    .catch(err => {
      next(err)
    })
})

router.delete('/:id', (req, res, next) => {
  CartItems.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(item => {
      res.status(204).end()
    })
    .catch(err => {
      next(err)
    })
})

router.put('/:id', (req, res, next) => {
  CartItems.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Product
      }
    ]
  })
    .then(item => {
      item.update(req.body)
      res.send({message: 'Item updated.', item})
    })
    .catch(err => {
      return next(err)
    })
})
