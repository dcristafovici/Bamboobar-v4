const {createOrder} = require('../controller/order.controller')
const { Router } = require('express')
const router = Router()


router.post('/create', createOrder)

module.exports = router
