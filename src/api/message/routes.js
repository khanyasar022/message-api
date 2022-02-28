const express = require('express')
const router = express.Router()
const MessageControllers = require('./controllers')
const verifyToken = require('../../utils/verifyToken')

router.post('/', verifyToken, MessageControllers.messagePost)
router.get('/', verifyToken, MessageControllers.messagesGet)

module.exports = router