const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('config')
const jwtSecret = config.get('JWT_SECRET')

const register = async(req,res) => {
  try {
    const {email, username, password, passwordCheck} = req.body;

    // All Validation
    if(!email || !username || !password || !passwordCheck){
      return res.status(401).json({msg: "Пожалуйста заполните все поля"})
    }
    // Validation password
    if(password !== passwordCheck){
      return res.status(401).json({msg: "Пароли не совпадают"})
    }

    //Check If Existing User
    const existingUser = await User.findOne({email: email})
    if(existingUser){
      return res.status(401).json({msg: "Пользователь уже существует"})
    }

    const salt = await bcrypt.genSalt()
    const passwordHash = await bcrypt.hash(password, salt)

    const newUser = new User({
      email: email,
      password: passwordHash,
      username: username
    })

    const saveUser = await newUser.save()
    res.json(saveUser)

  } catch (e) {
    res.status(500).json({ error: e.message });
  }

}



const login = async(req, res) => {
  try{
    const {email , password} = req.body
    if(!email || !password){
      return res.status(401).json({msg: "Пожалуйста заполните все поля"})
    }
    const user = await User.findOne({email: email})
    if(!user){
      return res.status(401).json({msg: "Пользователь не найден"})
    }

    const isMath = await bcrypt.compare(password, user.password)
    if(!isMath){
      return res.status(401).json({msg: "Неправильные данные"})
    }

    const token = jwt.sign({
      id: user._id
    }, jwtSecret)

    res.json({
      token,
      user: {
        id: user._id,
        username: user.username
      }
    })

  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}



const tokenIsValid = async(req,res) => {
  try {
    const token = req.header("x-auth-token");
    if(!token){
      return res.json(false)
    }
    const verified = jwt.verify(token, jwtSecret)
    if(!verified){
      return res.json(false)
    }
    const user = await User.findById(verified.id)
    if(!user){
      return res.json(false)
    }
    return res.json(true)


  }
  catch (e) {
    return res.status(500).json({error: e.message})
  }
}


const displayUser = async(req, res)=>{
  try {
    const user = await User.findById(req.user);
    res.json({
      displayName: user.displayName,
      id: user._id,
    });
  } catch (e) {
    return res.status(500).json({error: e.message})
  }
}



module.exports = {
  login,
  register,
  tokenIsValid,
  displayUser
}
