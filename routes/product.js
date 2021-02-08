const {createProduct, findByCategoriesId, getById, getAll} = require('../controller/product')
const {Router} = require('express')
const router = Router()

router.get('/findById/:ID', findByCategoriesId)
router.get('/getAll', getAll)
router.post('/create', createProduct)
router.post('/getById', getById)

module.exports = router;
