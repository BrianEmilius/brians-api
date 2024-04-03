const mongoose = require("mongoose")
const debug = require("debug")("express:server")

mongoose.connect(process.env.MONGO_URI)

mongoose.connection.on("error", function(err) {
	console.error("Error connecting to MongoDB")
	console.error(err)
	process.exit(1)
})

mongoose.connection.once("open", function() {
	debug("Connected to MongoDB")
})
