const router = require('express').Router()
const {User, Address} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  User.findAll({
    // explicitly select only the id and email fields - even though
    // users' passwords are encrypted, it won't help if we just
    // send everything to anyone who asks!
    attributes: ['id', 'email'],
    include: [
      {
        model: Address
      }
    ]
  })
    .then(users => res.json(users))
    .catch(next)
})

router.put('/:id', function(req, res, next) {
  User.update(req.body, {
    where: {
      id: req.params.id
    },
    returning: true
  })
    .then(test => res.status(201).json(test[1][0]))
    .catch(next)
})
