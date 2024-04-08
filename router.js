const router = require("express").Router()
const { createUser, readAllUsers, readSingleUser, updateUser, deleteUser } = require("./controllers")
const { createMovie, readAllMovies, readSingleMovie, updateMovie, deleteMovie } = require("./controllers")
const { authorized } = require("./middleware")
const { User } = require("./models")

router.route("/api/movies")
	.post(authorized, createMovie)
	.get(readAllMovies)
router.route("/api/movies/:id")
	.get(readSingleMovie)
	.patch(authorized, updateMovie)
	.delete(authorized, deleteMovie)

router.route("/api/users")
	.options(function (req, res) {
		res.status(204)
			.set("Allow", "OPTIONS, POST, GET")
			.set("Access-Control-Allow-Origin", "localhost, 127.0.0.1")
			.end()
	})
	.post(createUser)
	.get(readAllUsers)
	.head(async function (req, res) {
		const { limit = 20, offset = 0 } = req.query

		try {
			const users = await User.find().limit(limit).skip(offset)
			const count = await User.countDocuments()
			const usersArray = users.map(function (user) {
				return {
					name: user.name,
					url: "http://localhost:3000/api/users/" + user._id
				}
			})

			const dims = JSON.parse(`{ "count": ${count}, "results": ${JSON.stringify(usersArray)} }`)
			const ting = JSON.stringify(dims)
			const responseObj = Buffer.from(ting)

			return res.status(204)
				.set("Content-Length", responseObj.byteLength)
				.end()
		} catch (error) {
			console.error(error)
			return res.status(500).json({ error: "Internal server error" })
		}
	})
router.route("/api/users/:id")
	.get(readSingleUser)
	.patch(authorized, updateUser)
	.delete(authorized, deleteUser)

module.exports = router
