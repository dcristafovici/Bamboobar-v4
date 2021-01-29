const User = require('../models/auth.models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('config')
const axios = require('axios')

const registerController = async(req, res) => {
  try{
    const data = req.body
    const newUser = new User(data)
    await newUser.save()
    res.status(200).json(newUser)
  } catch (err) {
    res.status(500).json({error: err.message})
  }
}

const checkRegisterController = async(req, res) =>{
  try{

    const { phone } = req.body

    const existUser = await User.findOne({phone: phone})
    if(existUser) {
      return res
        .status(401)
        .json({msg: "Такой пользователь существует"})
    }
    const code = Math.floor(100000 + Math.random() * 900000) + ''
    const url = 'https://www.stramedia.ru/modules/send_sms.php'
    const params = new URLSearchParams()
    params.append("username" , "Shi8631")
    params.append("password" , "7hY6YGb49i")
    params.append("to" , "+79683550450")
    params.append("from" , "BAMBOO.BAR")
    params.append("coding" , "2")
    params.append("text" , code)
    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
    const response = await axios.post(url, params, config)
    res.status(200).json({message: response.data, code: code})

  } catch (err){
    res.status(500).json({error: err.message})
  }
}


const loginController = async(req, res) => {
  try{
    const {email, password, phone} = req.body
    const user = await User.findOne({phone: phone})
    if(!user){
      return res
        .status(401)
        .json({email: "Такой пользователь не существует"})
    }
    const isMatch = await bcrypt.compare(password, user.password)
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

const generateCode = async(req ,res) => {
  try{
    const { phone } = req.body
    const user = await User.findOne({phone: phone})
    if(!user){
      return res.status(401).json({message: "Пользователь не существует"})
    }
    const code = Math.floor(100000 + Math.random() * 900000)

    await User.findOne({phone: phone})
      .then(user => {
        user.password = code
        user.save()
      })

    // const url = 'https://www.stramedia.ru/modules/send_sms.php'
    // const params = new URLSearchParams()
    // params.append("username" , "Shi863")
    // params.append("password" , "7hY6YGb49i")
    // params.append("to" , "+79683550450")
    // params.append("from" , "BAMBOO.BAR")
    // params.append("coding" , "2")
    // params.append("text" , code)
    // const config = {
    //   headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded'
    //   }
    // }
    // const response = await axios.post(url, params, config)
    //
    // res.status(200).json({response: response.data})


  } catch (err){
    res.status(500).json({err:err.message})
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
  checkRegisterController,
  registerController,
  loginController,
  checkToken,
  getUser,
  generateCode,
}
