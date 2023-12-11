const express = require('express')
const cors = require('cors')
const getDgi = require('./dgi')
const app = express()

app.use(cors())
app.use(express.json())

require('dotenv').config()

app.get('/dgi/:rnc',getDgi)
PORT = process.env.process || 4000

app.listen(PORT,()=>{
    console.log(`server on port ${PORT}`)
})