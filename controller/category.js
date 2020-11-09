const Category = require('../models/Category')

const addCategory = async(req,res) =>{
  try{
    const data = req.body
    const category = new Category({
      ...data
    })
    await category.save()
    res.status(201).send({message: "Категория создана"})
  } catch (e) {
    res.status(401).send({message: e.message})
  }
}


const getCategories = async(req, res) => {
  try{
    const categories = await Category.find()
    res.status(201).send({data: categories, message: "Categories all"})
  } catch (e) {
    res.status(401).send({message: e.message})
  }
}


module.exports = {
  addCategory,
  getCategories
}
