const router = require('express').Router()
const { Cart, CartItems } = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
	Cart
		.findById( parseInt(req.query.id) )
		.then(cart => {
			res.send(cart)
		})
		.catch(err => {
			next(err)
		})
})

router.post('/', (req, res, next) => {
	Cart
		.findOrCreate({
			where: {
				userId: req.user.id,
			},
			include: [
				{
					model: CartItems
				}
			]
		})
		.then(cart => {
			res.send(cart)
		})
		.catch(err => {
			next(err)
		})
})

