const {registerController, authController} = require('../controller/auth.controller')
const { Router } = require('express')
const router = Router()


router.post('/register', registerController)
router.post('/login', authController)


module.exports = router
