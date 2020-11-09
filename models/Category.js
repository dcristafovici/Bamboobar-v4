const mongoose = require("mongoose")
const {Types} = require('mongoose')
const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Category name is required"]
  },
  createdAt:{
    type: Date,
    default: Date.now
  },
  owner: [{
    type: Types.ObjectId,
    ref: "Product"
  }]
})

module.exports = mongoose.model('Category', CategorySchema)
