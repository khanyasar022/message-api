const { BadRequest } = require('../../utils/errors')
const response = require('../../utils/response')
const validate = require('../../utils/validate')
const MessageService = require('../../services/messages')
const MessageValidations = require('./validations')

const messagePost = async (req, res, next) => {
    try {
        const params = validate(MessageValidations.message, req.body)
        if(params instanceof Error) throw new BadRequest(params.message)
        const data = {
            message: params.message,
            time: params.time,
            extra: params.extra,
            extra2: params.extra2
        }
        let addedMessage = await MessageService.createMessage(data)
        return response(res, 1, addedMessage, 200)
    } catch(error) {
        next(error)
    }
}

const messagesGet = async (req, res, next) => {
    try {
        const allMessages = await MessageService.getMessage()
        return response(res, 1, allMessages, 200)
    } catch(error) {
        next(error)
    }
}

const MessageControllers = {
    messagePost,
    messagesGet
}
module.exports = MessageControllers