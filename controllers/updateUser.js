const { User } = require("../models")

module.exports = async function deleteUser(req, res) {
	const { id } = req.params
	const user = await User.findByIdAndUpdate(id, req.body, { new: true })
	user.save()
	return res.status(200).json(user)
}