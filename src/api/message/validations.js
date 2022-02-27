const Joi = require('joi')

const message = Joi.object({
    message: Joi.string(),
    time: Joi.date(),
    extra: Joi.string(),
    extra2: Joi.string()
})

const MessageValidations = {
    message
}

module.exports = MessageValidations