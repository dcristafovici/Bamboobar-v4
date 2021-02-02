const { generateCode, authController, checkToken, getCode, updateAccount } = require('../controller/auth.controller')
const { Router } = require('express')
const router = Router()

router.post('/generate/', generateCode)
router.post('/auth/', authController)
router.post('/check', checkToken)
router.post('/getCode', getCode)
router.post('/update', updateAccount)
module.exports = router
