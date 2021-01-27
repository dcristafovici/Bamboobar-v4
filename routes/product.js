const { createProduct, findByCategoriesId, getById} = require('../controller/product')
const {Router} = require('express')
const router = Router()

router.post('/create', createProduct)
router.get('/findById/:ID', findByCategoriesId)
router.post('/getById', getById)
module.exports = router;
