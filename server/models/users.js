const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
	email: String,
	password: String,
	name: String,
	isAdmin: {
		type: Boolean,
		default: false
	},
	isActive: {
		type: Boolean,
		default: true
	},
	created : {
		type: Date,
		default: Date.now
	}
})

module.exports = mongoose.model("User", userSchema)