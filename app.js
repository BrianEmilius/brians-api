const express = require("express")
const app = express()
const router = require("./router")

require("./lib/db")

app.use(express.urlencoded({ extended: true }))

app.use(express.static("public"))

app.use(router)

module.exports = app
