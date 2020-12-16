const {
  registerController,
  authController,
  deleteController,
  tokenIsValid,
  getUser
} = require('../controller/auth.controller')
const { Router } = require('express')
const auth = require('../middleware/auth')
const router = Router()


router.post('/register', registerController)
router.post('/login', authController)
router.delete('/delete', auth, deleteController)
router.post('/tokenIsValid', tokenIsValid)
router.get('/', auth, getUser)
module.exports = router
