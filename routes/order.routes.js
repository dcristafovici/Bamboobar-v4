const {createOrder, getOrderByUser, payOrder, updateOrder} = require('../controller/order.controller')
const { Router } = require('express')
const router = Router()


router.post('/create', createOrder)
router.post('/byUser', getOrderByUser)
router.post('/pay', payOrder)
router.post('/update', updateOrder)

module.exports = router
