const router = require('express').Router()
const {Card} = require('../db/models')

module.exports = router

// api/cards
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
    const createdCard = await Card.create(req.body)
    if (createdCard) {
      res.send(createdCard)
    }
  } catch (err) {
    next(err)
  }
})

router.put('/:cardId', async (req, res, next) => {
  try {
    const updatedCard = await Card.update(req.body, {
      where: {
        id: req.params.cardId
      }
    })
    if (updatedCard) {
      res.send(updatedCard)
    }
  } catch (err) {
    next(err)
  }
})

router.delete('/:cardId', async (req, res, next) => {
  try {
    const deletedCard = await Card.destroy({
      where: {
        id: req.params.cardId
      }
    })
    res.send(deletedCard)
  } catch (err) {
    next(err)
  }
})
