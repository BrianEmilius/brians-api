const { Movie } = require("../models")

module.exports = async function deleteMovie(req, res) {
	const { id } = req.params
	try {
		await Movie.findById(id)
	} catch (error) {
		return res.status(404).json({ error: "Not found" })
	}

	try {
		await Movie.findByIdAndDelete(id)
		return res.status(204).end()
	} catch (error) {
		return res.status(500).json({ error: "Internal server error" })
	}
}
