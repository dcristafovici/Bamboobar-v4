const {createOrder, getOrderByUser} = require('../controller/order.controller')
const { Router } = require('express')
const router = Router()


router.post('/create', createOrder)
router.post('/byUser', getOrderByUser)


module.exports = router
