const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Product name is required' ]
  },
  price: {
    type: Number,
    required: [true, "Product price is required"]
  },
  weight: {
    type: String,
    required: [true, "Product weight is required"]
  },
  productImage: {
    type: String,
    required: [true, "Product image is required"]
  },
  category: {
    type: String,
    required: [true, "Product category is required"]
  }
})

module.exports = mongoose.model('Product', ProductSchema)
