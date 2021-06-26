const express = require('express');
const route = require('./route')
const path = require('path')

const server = express()

server.set('view engine', 'ejs')

server.use(express.static("public"))

server.use(route)

server.set('views',path.join(__dirname, 'views'))

server.listen(3000,()=>console.log("RODANDO"))

