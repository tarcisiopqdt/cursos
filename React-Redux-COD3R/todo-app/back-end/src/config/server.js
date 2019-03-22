const express = require('express')
const bodyParser = require('body-parser')
const server = express()
const port = 3003
const allowCors = require('./cors')

server.use(bodyParser.urlencoded({ extended:true }))
server.use(bodyParser.json())
server.use(allowCors)

server.listen(port, function(){
    console.log("API online in http://localhost:"+port+"/api/todos")
})

module.exports = server