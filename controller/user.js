const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const registerUser = async(req,res) => {
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
    const existingUser = User.findOne({email: email})
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
    res.status(500).json({ error: err.message });
  }

}
