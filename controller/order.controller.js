const {Order, CartItem} =  require('../models/order.models')

const createOrder = async (req, res) => {
  try{
    const data = req.body
    const newOrder =  new Order(data)
    await newOrder.save()
    res.status(200).json(newOrder)
  } catch (err) {
    res.status(500).json({error: err.message})
  }
}

const getOrderByUser = async(req, res) => {
  try{
    const { id } = req.body
    const order = await Order.find({user: id})
    res.status(200).json(order)
  } catch (err){
    res.status(500).json({error: err.message})
  }
}


module.exports = {
  createOrder,
  getOrderByUser
}
