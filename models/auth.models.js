const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  email: {
    type: String,
  },
  phone: {
    type: String,
    required: [true, 'Укажите номер телефона'],
  },
  username: {type: String},
})

module.exports = User = mongoose.model('user', userSchema)
