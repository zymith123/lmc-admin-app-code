const User = require("../models/users")

module.exports = class API {

	static async fetchAllUsers(req, res) {
		try {
			const users = await User.find();
			res.status(200).json(users)
		} catch (err) {
			res.status(404).json({ message: err.message })
		}
	}

	static async fetchUserById(req, res) {
		const id = req.params.id
		try {
			const user = await User.findById(id)
			res.status(200).json(user)
		} catch (err) {
			res.status(404).json({ message: err.message })
		}
	}

	static async addUser(req, res) {
		const user = req.body;
		try {
			await User.create(user)
			res.status(201).json({ message: "User Added" })
		} catch (err) {
			res.status(404).json({ message: err.message })
		}
	}

	static async editUser(req, res) {
		const id = req.params.id
		const newUserInfo = req.body
		try {
			await User.findByIdAndUpdate(id, newUserInfo)
			res.status(200).json({ message: "User info updated successfully!" })
		} catch (err) {
			res.status(404).json({ message: err.message })
		}
	}

	static async deleteUser(req, res) {
		const id = req.params.id
		try {
			const result = await User.findByIdAndDelete(id)
			res.status(200).json({ message: "User deleted successfully!" })
		} catch (err) {
			res.status(404).json({ message: err.message })
		}
	}

}