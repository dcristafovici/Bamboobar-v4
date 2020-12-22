const mongoose = require('mongoose')
const express = require('express')
const config = require('config')
const fileupload = require('express-fileupload')
const cors = require('cors')
const path = require('path')

const app = express()

app.use(express.json())
app.use(fileupload())
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000"],
    optionsSuccessStatus: 200
  })
);
app.use("/", express.static(__dirname));

// api/NameController
app.use('/api/product', require('./routes/product'))
app.use('/api/category', require('./routes/category'))
app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/order', require('./routes/order.routes'))
app.use('/api/address', require('./routes/data.routes'))

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
