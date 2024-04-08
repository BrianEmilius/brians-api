module.exports = async function authorized(req, res, next) {
	const { authorization } = req.headers

	if (!authorization) {
		return res.status(401).json({ error: "Missing 'Authorization' header" })
	}

	if (authorization !== "Bearer 1234") {
		return res.status(403).json({ error: "Invalid authorization token" })
	}

	next()
}
