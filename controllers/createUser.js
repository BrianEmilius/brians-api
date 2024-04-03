const { User } = require("../models")

module.exports = async function deleteUser(req, res) {
	const newUser = new User({
		name: req.body.name,
		email: req.body.email,
		password: req.body.password
	})

	await newUser.save()

	return res.status(201).json(newUser)
}