const Product = require('../models/Product')
const mongoose = require('mongoose')
const path = require('path')

const createProduct = async (req,res )=>{
  try{
    const file = req.files['file']
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const fileName = `photo${uniqueSuffix}${path.parse(file.name).ext}`;

    const jsonData = req.body['form']

    const {name, price, weight} = JSON.parse(jsonData)
    const {category} = JSON.parse(jsonData)
    console.log(name)
    console.log(price)
    console.log(weight)
    console.log(category)
    const product =  new Product({
      name: name,
      price: price,
      weight: weight,
      category: mongoose.Types.ObjectId(category),
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


const findByCategoriesId = async (req, res) => {
  try{
    const dataID = req.params.ID
    const products = await Product.find({category: dataID })
    return res.status(201).send({products: products})
  } catch (e) {
    res.status(401).send({message: e.message})
  }
}


module.exports = {
  createProduct,
  findByCategoriesId
}
