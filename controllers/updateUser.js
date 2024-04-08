const { User } = require("../models")

module.exports = async function updateUser(req, res) {
	const { id } = req.params

	try {
		await User.findById(id)
	} catch (error) {
		return res.status(404).json({ error: "Not found" })
	}

	const { name, email, password } = req.body

	if (!name || !email || !password) {
		return res.status(400).json({ error: "Bad request" })
	}

	const user = await User.findByIdAndUpdate(id, req.body, { new: true })
	
	try {
		user.save()
		return res.status(200).json(user)
	} catch (error) {
		return res.status(500).json({ error: "Internal server error" })
	}
}