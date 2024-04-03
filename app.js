const express = require("express")
const app = express()
const router = require("./router")

require("./lib/db")

app.use(express.urlencoded({ extended: true }))
app.use(router)

module.exports = app
