const router = require('express').Router()
const {Address} = require('../db/models')

router.get('/', async (req, res, next) => {
  try {
    const adresses = await Address.findAll()
    res.json(adresses)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const adress = await Address.findById(req.params.id)
    res.json(adress)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const newAdress = await Address.create(req.body)
    if (newAdress) {
      res.json(newAdress)
    } else {
      res.sendStatus(400)
    }
  } catch (err) {
    next(err)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const deletedAdress = await Address.destroy({
      wehre: {
        id: req.params.id
      }
    })
    if (deletedAdress) {
      res.sendStatus(204)
    }
  } catch (err) {
    next(err)
  }
})

router.put('/:id', async (req, res, next) => {
  const [, affectedRows] = await Address.update(req.body, {
    where: {
      id: req.params.id
    },
    returning: true
  })
  res.json(affectedRows[0])
})

module.exports = router
