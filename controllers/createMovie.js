const { Movie } = require("../models")

module.exports = async function createMovie(req, res) {
	const newMovie = new Movie({
		title: req.body.title,
		fullplot: req.body.fullplot,
		rated: req.body.rated,
		year: new Date(),
		genres: req.body.genre
	})

	await newMovie.save()

	return res.status(201).json(newMovie)
}