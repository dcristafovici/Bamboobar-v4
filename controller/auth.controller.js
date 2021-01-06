const User = require('../models/auth.models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('config')
const validateRegisterInput = require('../validation/register')

const registerController = async(req, res) => {
  try{
    let {email, password,  phone, username, address} = req.body
    const {errors, isValid} = validateRegisterInput(req.body)
    if(!isValid){
     return res.status(404).json(errors)
    }

    const userExist = await User.findOne({email: email})
    if(userExist){
      return res.status(404).json({msg: "Такой пользователь уже существует"})
    }
    const salt = await bcrypt.genSalt()
    const passwordHash = await bcrypt.hash(password, salt)

    const newUser = new User({
      email: email,
      password: passwordHash,
      phone,
      username,
      address
    })
    const savedUser = await newUser.save()
    res.json(savedUser)
  } catch (err) {
    res.status(500).json({error: err.message})
  }
}


const loginController = async(req, res) => {
  try{
    const {email, password} = req.body
    const user = await User.findOne({email: email})
    if(!user){
      return res
        .status(401)
        .json({email: "Такой пользователь не существует"})
    }
    const isMatch = await bcrypt.compare(password, user.password)
    console.log(isMatch)
    if(!isMatch){
      return res
        .status(404)
        .json({password: "Неправильные данные для входа"})
    }
    const token = jwt.sign({id: user._id}, config.get('JWT_SECRET'))
    res.json({
      token: token,
      user: {
        id: user._id,
        email: user.email,
        username: user.username,
        phone: user.phone,
        address: user.address,
      }
    })

  } catch (err) {
    res.status(500).json({error: err.message})
  }
}


const checkToken = async(req, res) => {
  try{
    const token = req.header('x-auth-token')
    if(!token || token == 'null'){
      return res.json(false)
    }
    const verified = jwt.verify(token, config.get('JWT_SECRET'))
    if(!verified){
      return res.json(false)
    }
    const user = await User.findById(verified.id)
    if(!user){
      return res.json(false)
    }
    return res.json(true)
  }catch (err) {
    res.status(500).json({error: err.message})
  }
}


const getUser = async(req, res) => {
  try{
    const user = await User.findById(req.user)
    res.json({
      id: user._id,
      username: user.username,
      phone: user.phone,
      email: user.email,
      address: user.address,
    })
  } catch (err) {
    res.status(500).json({error: err.message})
  }
}


module.exports = {
  registerController,
  loginController,
  checkToken,
  getUser,
}
