const User = require('../models/auth.models')
const Generate = require('../models/generate.models')
const axios = require('axios')
const jwt   = require('jsonwebtoken')
require('dotenv').config()

const generateCode = async(req,res) => {
  try{
    const { phone } = req.body
    const code = Math.floor(100000 + Math.random() * 900000)
    const url  = process.env.stramedia_url
    const params = new URLSearchParams()
    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
    params.append("username" , process.env.stramedia_username)
    params.append("password" , process.env.stramedia_password)
    params.append("to" , phone)
    params.append("from" , process.env.stramedia_from)
    params.append("coding" , "2")
    params.append("text" , code + "")

    const response = await axios.post(url, params, config)
    const saveEvent = new Generate({code: code})
    await saveEvent.save()

    res.status(200).json({message: response.data, session: saveEvent._id})

  } catch (err){
    res.status(500).json({error: err.message})
  }
}

const getCode = async(req,res) => {
  try{
    const { session } = req.body
    const generate = await Generate.findById(session)
    if(!generate){
      res.status(401).json({message: "Время кода истекло"})
    }
    res.status(200).json({code: generate.code})


  } catch (err){
    res.status(500).json({err: err.message})
  }
}


const authController = async(req, res) => {
  try{
    const { phone } = req.body
    const userExist = await User.findOne({phone: phone})
    if(!userExist){
      const newUser = new User(req.body)
      await newUser.save()
      const token = jwt.sign({id: newUser._id}, process.env.JWT_SECRET)
      res
        .status(200)
        .json({
          token: token,
          user: {
            id: newUser._id
          }
        })
    }
    else{
      const token = jwt.sign({id: userExist._id}, process.env.JWT_SECRET)
      res
        .status(200)
        .json({
          token: token,
          user: {
            id: userExist._id
          }
      })
    }

  } catch (err){
    res.status(500).json({error: err.message})
  }
}



const checkToken = async(req, res) => {
  try{
    const token = req.header('x-auth-token')
    if(token == null || token === ''){
      return res.json(false)
    }

    const verified = jwt.verify(token, process.env.JWT_SECRET)
    if(!verified){
      return res.json(false)
    }
    const user = await User.findById(verified.id)
    if(!user){
      return res.json(false)
    }
    return res.json(user)

  } catch (err){
    res.status(500).json({error: err.message})
  }
}


const updateAccount = async(req,res) => {
  try{
    const {id, name, email} = req.body
    const update = await User.findByIdAndUpdate({_id: id}, {name, email})
    res.status(200).json({message: "Профиль обновлен"})

  } catch (err){
    res.status(500).json({msg: err.message})
  }
}


module.exports = {
  generateCode,
  authController,
  checkToken,
  getCode,
  updateAccount,
}
