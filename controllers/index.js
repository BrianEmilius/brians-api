const createUser = require("./createUser")
const readAllUsers = require("./readAllUsers")
const readSingleUser = require("./readSingleUser")
const updateUser = require("./updateUser")
const deleteUser = require("./deleteUser")

const createMovie = require("./createMovie")
const readAllMovies = require("./readAllMovies")
const readSingleMovie = require("./readSingleMovie")
const updateMovie = require("./updateMovie")
const deleteMovie = require("./deleteMovie")

module.exports = {
	createMovie,
	readAllMovies,
	readSingleMovie,
	updateMovie,
	deleteMovie,
	createUser,
	readAllUsers,
	readSingleUser,
	updateUser,
	deleteUser,
}
