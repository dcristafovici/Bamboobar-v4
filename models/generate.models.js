const mongoose = require('mongoose')

const GenerateSchema = new mongoose.Schema({
  code: { type: String },
  date: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Generate', GenerateSchema)
