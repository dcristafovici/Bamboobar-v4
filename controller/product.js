const Product = require('../models/Product')
const path = require('path')

const createProduct = async (req,res )=>{
  try{
    const file = req.files['file']
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const fileName = `photo${uniqueSuffix}${path.parse(file.name).ext}`;

    const jsonData = req.body['form']
    const data = JSON.parse(jsonData)
    const product =  new Product({
      ...data,
      productImage: `uploads/product/${fileName}`
    })
    await product.save()
    file.mv(`uploads/product/${fileName}`, async (err) => {
      if (err) throw err;
      res.status(200).send({message: 'Продукт создан'})
    });


  } catch (e) {
    res.status(401).json({
      message: e.message
    })
  }

}

module.exports = {
  createProduct
}
