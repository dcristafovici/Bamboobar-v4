const mongoose = require('mongoose')
const {Types} = require('mongoose')
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
    type: Types.ObjectId,
    ref: "Category",
    required: [true, "Product category is required"]
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Product', ProductSchema)
