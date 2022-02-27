const express = require('express')
const router = express.Router()
const UserControllers = require('./controllers')

router.post('/login', UserControllers.userLogin)
router.post('/signup', UserControllers.userSignup)

module.exports = router