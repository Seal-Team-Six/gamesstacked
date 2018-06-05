const router = require('express').Router()
const {Product} = require('../db/models')
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

router.post('/new', (req, res, next) => {
	Cart
		.findOrCreate({
			where: {
				userId: req.user.id,
			}
		})
		.then(cart => {
			res.send(cart)
		})
		.catch(err => {
			next(err)
		})
})

