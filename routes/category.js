const {addCategory, getCategories} = require('../controller/category')
const { Router } = require('express')
const router = Router()

router.post('/create', addCategory)
router.get('/categories', getCategories)

module.exports = router
