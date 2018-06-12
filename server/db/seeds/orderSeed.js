const {Order, OrderItem} = require('../models')

const floor = function(random) {
  return Math.floor(random)
}

const random = function(min = 0, max) {
  return Math.random() * (max - min + 1) + min
}

const orderSeed = async () => {
  const orderData = []
  const orderStatus = ['shipped', 'paid', 'error']

  for (let i = 0; i < 10; i++) {
    orderData.push({
      orderStatus: orderStatus[floor(random(0, orderStatus.length - 1))],
      subTotal: Number(random(10, 200).toFixed(2)),
      userId: floor(random(1, 10))
    })
  }

  await Order.bulkCreate(orderData, {returning: true})

  for (let i = 0; i < 20; i++) {
    await OrderItem.create({
      orderId: floor(random(1, 10)),
      quantity: floor(random(1, 5)),
      productId: floor(random(1, 10))
    })
  }
}

module.exports = orderSeed
