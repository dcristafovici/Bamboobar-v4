const {CartItem, Order} =  require('../models/order.models')

const createOrder = async (req, res) => {
  try{
    req.body.order.user = req.profile;
    const savedOrder = await new Order(req.body.order)
    res.json(savedOrder)
  } catch (err) {
    res.status(500).json({error: err.message})
  }
}


module.exports = {
  createOrder
}
