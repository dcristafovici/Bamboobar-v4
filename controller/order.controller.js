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
  try {
    let {price, address, date, id, products, user} = req.body
    price = price * 100
    let positionIdCount = 1;
    const items = products.map((product) => {
      let {_id, name, quantity, priceItem} = product

      return {
        positionId: positionIdCount++,
        name: name,
        itemCurrency: "643",
        quantity: {"value": quantity, "measure": "единиц"},
        itemPrice: priceItem * 100,
        itemCode: _id,
      }
    })
    const orderBundle =
      {
        "orderCreationDate": date,
        "customerDetails": {
          "email": user.email,
          "phone": user.phone,
          "contact":  user.username,
          "deliveryInfo": {
            "deliveryType": "courier", "country": "RU", "city": "Moscow",
            "postAddress": address
          }
        },
        "cartItems": {
          "items": items
        }
      }


    const params = new URLSearchParams()
    params.append("userName", "delivery-bamboobar-api")
    params.append("password", ">@^z-J8XW#'-26~[")
    params.append("returnUrl", "http://google.com/")
    params.append("currency", '643')
    params.append("failUrl", "http://google.com/")
    params.append("orderId", id)
    params.append("orderNumber", id)
    params.append("amount", price)
    params.append("orderBundle", JSON.stringify(orderBundle))
    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }

    const url = 'https://3dsec.sberbank.ru/payment/rest/register.do'
    axios.post(url, params, config)
      .then((result) => {
        res.status(200).json(result.data)
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
