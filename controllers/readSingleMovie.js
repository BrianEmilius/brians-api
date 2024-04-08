const { Movie } = require("../models")

module.exports = async function readSingleMovie(req, res) {
	const { id } = req.params
	return res.json(await Movie.findById(id))
}
