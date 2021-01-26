const {createOrder, getOrderByUser, payOrder} = require('../controller/order.controller')
const { Router } = require('express')
const router = Router()


router.post('/create', createOrder)
router.post('/byUser', getOrderByUser)
router.post('/pay', payOrder)

module.exports = router
