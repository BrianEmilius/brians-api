const router = require("express").Router()
const { allMovies, allUsers, singleMovie, singleUser } = require("./controllers")

router.post("/api/movies/:id", singleMovie)
router.post("/api/movies", allMovies)
router.post("/api/users/:id", singleUser)
router.post("/api/users", allUsers)

module.exports = router
