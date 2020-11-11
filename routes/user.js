const {login, register, tokenIsValid, displayUser} = require('../controller/user')
const {Router} = require('express')
const router = Router()


router.post('/login', login)
router.post('/register', register)
router.post('/tokenIsValid', tokenIsValid)
router.get('/getUser', displayUser)

module.exports = router
