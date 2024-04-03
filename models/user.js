const { model, Schema } = require("mongoose")

const UserSchema = new Schema({
	name: String,
	email: String,
	password: String
}, {collection: "users"})

const User = model("User", UserSchema)

module.exports = User
