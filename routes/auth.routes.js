const { generateCode, authController, checkToken } = require('../controller/auth.controller')
const { Router } = require('express')
const router = Router()

router.post('/generate/', generateCode)
router.post('/auth/', authController)
router.post('/check', checkToken)
module.exports = router
