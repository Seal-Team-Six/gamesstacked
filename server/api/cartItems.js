const router = require('express').Router()
const { Cart, CartItems, Product } = require('../db/models')
module.exports = router

router.post('/', (req, res, next) => {
	CartItems
		.create(req.body)
		.then(item => {
			res.send(item)
		})
		.catch(err => {
			next(err)
		})
})

