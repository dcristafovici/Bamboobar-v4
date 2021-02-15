const {findController} = require('../controller/find.controller')
const { Router } = require('express')
const router = Router()

router.post('/route', findController)

module.exports  = router
