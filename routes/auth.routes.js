const {checkRegisterController ,registerController, loginController, checkToken, getUser, generateCode} = require('../controller/auth.controller')
const auth = require('../middleware/auth')
const { Router } = require('express')
const router = Router()


router.post('/register/', registerController)
router.post('/checkRegister', checkRegisterController)
router.post('/login/', loginController)
router.post('/check/', checkToken)
router.post('/generate', generateCode)
router.get('/get/', auth, getUser)
module.exports = router
