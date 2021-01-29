const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  phone: { type: String },
  email: { type: String , default: ""},
  name: { type: String, default: "" },
  address: { type: String, default: "" },
  street: { type: String , default: ""}

})

module.exports = User = mongoose.model('user', userSchema)
