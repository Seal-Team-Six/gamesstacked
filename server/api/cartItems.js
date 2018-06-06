const router = require('express').Router()
const { Cart, CartItems, Product } = require('../db/models')
module.exports = router

router.post('/', (req, res, next) => {
	CartItems
		.create(req.body)
		.then(item => {
			CartItems
				.findOne({
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

