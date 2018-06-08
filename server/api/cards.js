const router = require('express').Router()
const {Card} = require('../db/models')

module.exports = router

router.get('/:userId', async (req, res, next) => {
  try {
    const cards = await Card.findAll({
      where: {
        userId: req.params.userId
      }
    })
    res.send(cards)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    await Card.create(req.body)
    res.end()
  } catch (err) {
    next(err)
  }
})
