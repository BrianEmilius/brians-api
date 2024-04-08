const { User } = require("../models")
const { z } = require("zod")

const userSchema = z.object({
	name: z.string().min(1),
	email: z.string().min(1).email(),
	password: z.string().min(1)
})


module.exports = async function createUser(req, res) {
	const validated = userSchema.safeParse(req.body)

	if (!validated.success) {
		return res.status(400).json(validated)
	}

	const newUser = new User({
		name: req.body.name,
		email: req.body.email,
		password: req.body.password
	})

	try {
		await newUser.save()
		return res.status(201).json(newUser)
	} catch (error) {
		console.error(error)
		return res.status(500).json({ error: "Internal server error. Try again later." })
	}
}
