const express = require('express')
const router = express.Router()
const API = require("../controllers/api")


router.get('/', API.fetchAllUsers)
router.get('/:id', API.fetchUserById)
router.patch('/:id', API.editUser)
router.post('/', API.addUser)
router.delete('/:id', API.deleteUser)

module.exports = router