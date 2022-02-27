const express = require('express')
const router = express.Router()
const MessageControllers = require('./controllers')

router.post('/', MessageControllers.messagePost)
router.get('/', MessageControllers.messagesGet)

module.exports = router