const axios = require('axios')
const {Order, CartItem} =  require('../models/order.models')
const qs = require('qs')
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

const payOrder = async(req, res) => {
  try{
    const { amount, id, products } = req.body
    axios({
      method: "POST",
      url: "https://3dsec.sberbank.ru/payment/rest/register.do",
      data: qs.stringify({
        userName: "delivery-bamboobar-api",
        password: ">@^z-J8XW#'-26~[",
        returnUrl: 'http://google.com/',
        failUrl: 'http://google.com/',
        orderId: 240,
        orderNumber: 150,
        amount: 6000
      }),
      headers: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
      }
    })
      .then(response => {
        console.log(response)
      })

  } catch (err){
    res.status(500).json({error: err.message})
  }
}


module.exports = {
  createOrder,
  getOrderByUser,
  payOrder
}
