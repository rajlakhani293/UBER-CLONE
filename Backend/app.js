const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const cors = require('cors')
const app = express()

// accept request from domin and other all things are bolcked
app.use(cors())


app.get('/',(req,res)=>{
    res.send('hello')
})


module.exports = app;