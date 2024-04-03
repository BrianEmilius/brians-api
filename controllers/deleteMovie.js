const { Movie } = require("../models")

module.exports = async function deleteMovie(req, res) {
	const { id } = req.params
	await Movie.findByIdAndDelete(id)
	return res.status(204).send()
}
