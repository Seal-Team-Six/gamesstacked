const router = require('express').Router()
const {Product} = require('../db/models')

router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll()
    res.json(products)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id)
    res.json(product)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const newProduct = await Product.create(req.body)
    if (newProduct) {
      res.json(newProduct)
    } else {
      res.sendStatus(400)
    }
  } catch (err) {
    next(err)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const deletedProduct = await Product.destroy({
      wehre: {
        id: req.params.id
      }
    })
    if (deletedProduct) {
      res.sendStatus(204)
    }
  } catch (err) {
    next(err)
  }
})

router.put('/:id', async (req, res, next) => {
  const [, affectedRows] = await Product.update(req.body, {
    where: {
      id: req.params.id
    },
    returning: true
  })
  res.json(affectedRows[0])
})

module.exports = router
