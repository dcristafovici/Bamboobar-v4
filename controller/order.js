const Order = require('../models/Order')
const path = require('path')
const mongoose = require('mongoose')



const createOrder = async(req, res) => {
  try{
    const fields = req.body
    console.log(fields)
  } catch (e) {
    res.status(401).send({message: e.message})
  }
}


module.exports = {
  createOrder
}
