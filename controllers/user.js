const { User } = require("../models")

module.exports = async function singleUser(req, res) {
	const id = req.params.id

	if (req.query.action === "delete") {
		await User.findByIdAndDelete(id)
		return res.status(204).send()
	}

	if (Object.keys(req.body).length === 0 && req.body.constructor === Object) {
		return res.json(await User.findById(id))
	}

	const user = await User.findByIdAndUpdate(id, req.body, { new: true })
	user.save()
	return res.status(200).json(user)
}
