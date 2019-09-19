const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()

server.use(bodyParser.urlencoded({extended: true})) //Middleware que faz um parser para requisições de formulários
server.use(bodyParser.json())   //Faz um parser para um objeto json enviado na requisição

server.listen(port, function(){
    console.log(`BACKEND is running on port ${port}.`)
})


module.exports = server