const { Movie } = require("../models")

module.exports = async function readAllMovies(res, res) {
	return res.json(await Movie.find())
}
