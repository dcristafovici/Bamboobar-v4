const {registerController, loginController, checkToken, getUser} = require('../controller/auth.controller')
const auth = require('../middleware/auth')
const { Router } = require('express')
const router = Router()


router.post('/register/', registerController)
router.post('/login/', loginController)
router.post('/check/', checkToken)
router.get('/get/', auth, getUser)
module.exports = router
