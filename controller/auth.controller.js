const User = require('../models/auth.models')
const bcrypt = require('bcrypt')
const registerController = async (req, res) => {
  try{
    let {email, password, passwordCheck, displayName} = req.body

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
      displayName
    })
    const savedUser = await newUser.save()
    res.json(savedUser)

  } catch (err) {
    res.status(500).json({error: err.message})
  }

}

module.exports = {
  registerController
}


