const {findAddress} = require('../controller/data.controller')
const { Router } = require('express')
const router = Router()

router.post('/find', findAddress)

module.exports = router
