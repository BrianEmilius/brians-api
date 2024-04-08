const { User } = require("../models")

module.exports = async function readSingleUser(req, res) {
	const { id } = req.params
	return res.json(await User.findById(id))
}