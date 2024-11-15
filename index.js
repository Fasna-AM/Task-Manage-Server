require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./router/router')
require('./database/dbConnection')

const taskServer = express()

taskServer.use(cors())
taskServer.use(express.json())
taskServer.use(router)


const PORT = 3000 || process.env.PORT

taskServer.listen(PORT,()=>{
    console.log(`taskServer listening at port ${PORT} `);
    
})

taskServer.get('/',(req,res)=>{
    res.status(200).send(`<h1>tastkServer listening at port and waiting for request </h1>`)
})