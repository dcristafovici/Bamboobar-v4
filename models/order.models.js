const mongoose  = require('mongoose')

const CartItemSchema = new mongoose.Schema({
  product: {type: mongoose.Schema.ObjectId, ref: 'Product'},
  quantity: Number,
  priceItem: Number,
  priceGroup: Number,
  priceWithSale: Number,
  priceGroupWithSale: Number,
  name: String,
})

const CartItem = mongoose.model('CartItem', CartItemSchema)

const orderSchema = new mongoose.Schema({
  products: [CartItemSchema],
  customer_name: {
    type: String,
    trim: true,
  },
  customer_phone: {
    type: String,
    required: true
  },
  customer_email: {
    type: String,
    trim: true,
    match: [/.+\@.+\..+/, 'Please fill a valid email address'],
  },
  address: {type: String},
  street: {type: String},
  payment_id: {},
  updated: Date,
  price: String,
  deliveryDate: String,
  additional: String,
  cutlery: String,
  deliveryTime: String,
  taxiPrice: {type: String, default: 0},
  orderStatus: {type: String, default: "0"},
  create: {
    type: Date,
    default: Date.now
  },
  user: {type: mongoose.Schema.ObjectId, ref: "user"}
})


const Order = mongoose.model('Order', orderSchema)


module.exports = {
  Order,
  CartItem
}
