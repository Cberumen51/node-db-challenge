const express = require("express")

const shopRouter = require("./shop/shop-router")

const server = express()

server.use(express.json())
server.use("/api", shopRouter)

module.exports = server