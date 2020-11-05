const Product = require('../models/Product')

const createProduct = async (req,res )=>{
  try{
    const data = req.body
    console.log(req.body)
    const product = await new Product({
      ...data
    })
    res.status(200).send({message: 'Продукт создан'})
    product.save()

  } catch (e) {
    res.status(200).send({message: e})
  }

}

module.exports = {
  createProduct
}
