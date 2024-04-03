const router = require("express").Router()
const { createUser, readAllUsers, readSingleUser, updateUser, deleteUser } = require("./controllers")
const { createMovie, readAllMovies, readSingleMovie, updateMovie, deleteMovie } = require("./controllers")

router.route("/api/movies").post(createMovie).get(readAllMovies)
router.route("/api/movies/:id").get(readSingleMovie).patch(updateMovie).delete(deleteMovie)

router.route("/api/users").post(createUser).get(readAllUsers)
router.route("/api/users/:id").get(readSingleUser).patch(updateUser).delete(deleteUser)

module.exports = router
