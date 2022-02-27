const Message = require('../models/messageSchema')

const createMessage = async (data) => {
    try {
        const addedMessage = await Message.create(data)
        return addedMessage
    } catch(error) {
        console.log(`create message error ${error}`)
    }
}

const getMessage = async () => {
    try {
        const allMessages = await Message.find({})
            return allMessages
    } catch(error) {
        console.log(`get all messages error ${error}`)
    }
}

const MessageService = {
    createMessage,
    getMessage
}
module.exports = MessageService