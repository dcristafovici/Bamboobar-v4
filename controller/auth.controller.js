const User = require('../models/auth.models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('config')

const registerController = async (req, res) => {
  try{
    let {email, password, passwordCheck, displayName, phone} = req.body

    //  Validate
    if(!email || !password || !passwordCheck)
      return res
        .status(400)
        .json({msg: "Не все поля заполнены."})
    if(password.length < 5)
      return res
        .status(400)
        .json({msg: "Пароль имеет меньше 5 символов"})

    if(password !== passwordCheck)
      return res
        .status(400)
        .json({msg: "Пароли не совпадают"})

    const existingUser = await User.findOne({email: email})
    if(existingUser)
      return res
        .status(400)
        .json({msg: "Такой пользователь уже существует"})

    if(!displayName) displayName = email
    const salt = await bcrypt.genSalt()
    const passwordHash = await bcrypt.hash(password, salt)

    const newUser = new User({
      email,
      password: passwordHash,
      displayName,
      phone
    })
    const savedUser = await newUser.save()
    res.json(savedUser)
  } catch (err) {
    res.status(500).json({error: err.message})
  }

}
const authController = async(req, res) => {
  try{
    const {email, password} = req.body

    // Validate
    if(!email || !password)
      return res
        .status(400)
        .json({msg: 'Не все поля заполнены.'})

    const user = await User.findOne({email: email})
    if(!user)
      return res
        .status(400)
        .json({msg: "Пользователь не найден"})

    const isMatch = await bcrypt.compare(password, user.password)
    if(!isMatch)
      return res
        .status(400)
        .json({msg: "Неправильные данные для входа"})

    const token = jwt.sign({id: user._id}, config.get('JWT_SECRET'))
    res.json({
      token: token,
      user: {
        id: user._id,
        displayName: user.displayName,
        email : user.email
      }
    })
  } catch (err) {
    res.status(500).json({error: err.message})
  }
}


const deleteController = async(req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.user)
    res.json(deletedUser)
  } catch (err) {
    res.status(500).json({error: err.message})
  }
}


const tokenIsValid = async(req, res) => {
  try {
    const token = req.header('x-auth-token')
    if(!token)
        return res.json(false)
    const verified = jwt.verify(token, config.get('JWT_SECRET'))
    if(!verified) return res.json(false)

    const user = await User.findById(verified.id)
    if(!user) return res.json(false)

    return res.json(true)

  } catch (err) {
    res.status(500).json({error : err.message})
  }
}

const getUser = async(req, res) => {
  try{
    const user = await User.findById(req.user)
    res.json({
      displayName: user.displayName,
      id: user._id,
      email: user.email,
      phone: user.phone
    })
  } catch (error) {
    res.json({msg: error.message})
  }
}


module.exports = {
  registerController,
  authController,
  deleteController,
  tokenIsValid,
  getUser
}


