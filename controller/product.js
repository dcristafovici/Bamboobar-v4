const Product = require('../models/Product')

const createProduct = async (req,res )=>{
  try{
    const data = req.body
    const product =  new Product({
      ...data
    })
    await product.save()
    res.status(200).send({message: 'Продукт создан'})

  } catch (e) {
    res.status(401).json({
      message: e.message
    })
  }

}

module.exports = {
  createProduct
}
