const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
  email: {
    Type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  username: {
    type: String,
    required: true
  }
})


module.exports = mongoose.model('User', UserSchema)