const User = require('../models/auth.models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('config')
const registerController = async(req, res) => {
  try{
    let {email, password, passwordCheck,  phone, username, address} = req.body
    if(!email || !password || !passwordCheck || !phone){
      return res
        .status(404)
        .json({msg: "Заполните пожалуйста обязательные поля"})
    }
    if(password.length < 5){
      return res
        .status(404)
        .json({msg: "Пароль должен иметь больше 5 символов"})
    }
    if(passwordCheck !== password){
      return res
        .status(404)
        .json({msg: "Пароли не совпадают"})
    }
    const existingUser = await User.findOne({email: email})
    if(existingUser){
      return res
        .status(404)
        .json({msg: "Такой пользователь уже существует"})
    }
    if(!username) username = email
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
    if(!email || !password){
      return res
        .status(404)
        .json({msg: "Заполните пожалуйста обязательные поля"})
    }
    const user = await User.findOne({email: email})
    if(!user){
      return res
        .status(404)
        .json({msg: "Такой пользователь не существует"})
    }

    const isMatch = bcrypt.compare(password, user.password)
    if(!isMatch){
      return res
        .status(404)
        .json({msg: "Неправильные данные для входа"})
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
    if(!token){
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
  getUser
}
