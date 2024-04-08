const { User } = require("../models")

module.exports = async function readAllUsers(req, res) {
	const { limit = 20, offset = 0 } = req.query

	try {
		const users = await User.aggregate([
			{
				$limit: Number(limit)
			},
			{
				$skip: Number(offset)
			},
			{ $set: {
				"url": {
					$concat: [
						"http://localhost:3000/api/users/",
						{ $toString: "$_id" }
					]
				}
			}},
			{
				"$project": { "_id": 0, "password": 0, "email": 0 },
			},
		])
		const count = await User.countDocuments()

		console.log(users)

		if (!users) {
			return res.status(404).json({ error: "Not found" })
		}

		return res.json({ count, results: users})
	} catch (error) {
		console.error(error)
		return res.status(500).json({ error: "Internal server error" })
	}
}
