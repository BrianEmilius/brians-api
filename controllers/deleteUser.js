const { User } = require("../models")

module.exports = async function deleteUser(req, res) {
	const { id } = req.params
	await User.findByIdAndDelete(id)
	return res.status(204).send()
}