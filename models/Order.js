const mongoose = require('mongoose')

const ShippingSchema = {
  address: {
    type: String,
    required: [true, "Please write your address"]
  },
  date: {
    type: Date,
    required: [true, "Please select date"],
    default: Date.now
  },
  time: {
    type: String,
    required: [true, "Please choose time"]
  }
}


const PaymentSchema = {
  paymentMethod: {
    type: String,
    required: [true, "Please add a payment method"],
    default: "Наличные"
  }
}

const orderItemSchema = {
  productName: {
    type: String,
    required: [true, "Please add a product name"]
  },
  qnt: {
    type: String,
    required: [true, "Please choose a quantity product"]
  },
  productImage: {
    type: String,
    required: [true, "Please add image to product"]
  },
  productID: {
    type: mongoose.Schema.Types.ObjectID,
    ref: "Product",
    required: true
  }
}


const OrderSchema = new mongoose.Schema({
  orderItems: [orderItemSchema],
  paymentMethod: PaymentSchema,
  shippingMethod: ShippingSchema,
  itemsPrice: {
    type: String,
    required: [true, "Please add a items price"]
  },
  shippingPrice: {
    type: String,
    required: [true, "Please add a shipping price"]
  },
  totalPrice: {
    type: String,
    required: [true, "Please add a total price"]
  },
  isPaid: {
    type: Boolean,
    default: false
  },
  paidAt: {
    type: Date
  },
  isDelivered: {
    type: Boolean,
    default: false
  },
  deliveredAt: {
    type: Date
  },
  userID: {
    type: mongoose.Schema.Types.ObjectID,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now
  }

})


module.exports = mongoose.model('Order', OrderSchema)
