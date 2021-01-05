const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  email: {type: String, required: true},
  password: {type: String, required: true, minlength: 5},
  phone: {type: String, required: true},
  username: {type: String},
  address: {type: String}
})

module.exports = User = mongoose.model('user', userSchema)
