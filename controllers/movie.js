const { Movie } = require("../models")

module.exports = async function singleMovie(req, res) {
	const id = req.params.id

	if (req.query.action === "delete") {
		await Movie.findByIdAndDelete(id)
		return res.status(204).send()
	}

	if (Object.keys(req.body).length === 0 && req.body.constructor === Object) {
		return res.json(await Movie.findById(id))
	}
	
	const movie = await Movie.findByIdAndUpdate(id, req.body, { new: true })
	movie.save()
	return res.status(200).json(movie)
}
