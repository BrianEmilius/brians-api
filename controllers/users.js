const { User } = require("../models")

module.exports = async function allUsers(req, res) {
	if (Object.keys(req.body).length === 0 && req.body.constructor === Object) {
		return res.json(await User.find())
	}
	
	const newUser = new User({
		name: req.body.name,
		email: req.body.email,
		password: req.body.password
	})

	await newUser.save()

	return res.status(201).json(newUser)
}
