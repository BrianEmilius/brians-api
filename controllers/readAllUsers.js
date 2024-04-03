const { User } = require("../models")

module.exports = async function deleteUser(req, res) {
	return res.json(await User.find())
}