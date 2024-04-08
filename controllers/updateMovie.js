const { Movie } = require("../models")

module.exports = async function updateMovie(req, res) {
	const { id } = req.params
	const movie = await Movie.findByIdAndUpdate(id, req.body, { new: true })
	await movie.save()
	return res.status(200).json(movie)
}
