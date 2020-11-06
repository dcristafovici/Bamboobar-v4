const mongoose = require('mongoose')
const express = require('express')
const config = require('config')
const fileupload = require('express-fileupload')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(fileupload())
app.use(cors())

// api/NameController
app.use('/api/product/', require('./routes/product'))
app.use('/api/category', require('./routes/category'))


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
