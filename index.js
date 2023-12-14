const express = require('express')
const cors = require('cors')
const getDgi = require('./controllers/dgi')
const pool = require('./db/posgress')
const controllers = require('./controllers')
const app = express()

app.use(cors())
app.use(express.json())

require('dotenv').config()


app.get('/dgi/:rnc',controllers.getDgi)

app.get('/dgi/',(req,res)=>{
    res.json([])
})




PORT = process.env.PORT || 4000

app.listen(PORT,"0.0.0.0",()=>{
    console.log(`server on port ${PORT}`)
})