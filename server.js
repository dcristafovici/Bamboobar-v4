const mongoose = require('mongoose')
const express = require('express')
const config = require('config')


const app = express()

const PORT = config.get('port') || 5000
const start = async () =>{
  try{
    await mongoose.connect(
      config.get('mongoURI'),
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
      }
    )
    app.listen(PORT, () => console.log(`Start witch port ${PORT}`))
  } catch (e) {
    console.log(e)
  }
}


start()
