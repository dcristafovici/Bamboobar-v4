const { createProduct, findByCategoriesId} = require('../controller/product')
const {Router} = require('express')
const router = Router()

router.post('/create', createProduct)
router.get('/findById/:ID', findByCategoriesId)
module.exports = router;
