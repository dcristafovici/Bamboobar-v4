const {registerController} = require('../controller/auth.controller')
const { Router } = require('express')
const router = Router()


router.post('/register', registerController)


module.exports = router
