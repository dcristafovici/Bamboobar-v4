const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Укажите электронную почту'],
    unique: [true, 'Адрес электронный почты уже используется'],
  },
  password: {
    type: String,
    required: [true, 'Укажите пароль'],
    minlength: 5
  },
  phone: {
    type: String,
    required: [true, 'Укажите номер телефона'],
  },
  username: {type: String},
})

module.exports = User = mongoose.model('user', userSchema)
