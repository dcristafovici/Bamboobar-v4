const {addCategory} = require('../controller/category')
const { Router } = require('express')
const router = Router()

router.post('/create', addCategory)

module.exports = router
