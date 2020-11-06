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


module.exports = {
  addCategory
}
