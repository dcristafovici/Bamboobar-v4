const {Order, CartItem} =  require('../models/order.models')

const createOrder = async (req, res) => {
  try{
    const data = req.body
    const newOrder =  new Order(data)
    await newOrder.save()
    console.log(newOrder)
  } catch (err) {
    res.status(500).json({error: err.message})
  }
}


module.exports = {
  createOrder
}
