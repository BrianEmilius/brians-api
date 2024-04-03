const { model, Schema } = require("mongoose")

const MovieSchema = new Schema({
	title: String,
	fullplot: String,
	rated: String,
	genres: Array,
	year: Date
}, { collection: "movies" })

const Movie = model("Movie", MovieSchema)

module.exports = Movie
