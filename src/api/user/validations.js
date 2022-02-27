const Joi = require('joi')

const userRegister = Joi.object({
    email: Joi.string(),
    password: Joi.string(),
    dob: Joi.date(),
    address: Joi.string(),
    contact1: Joi.number(),
    contact2: Joi.number(),
    contact3: Joi.number()
})

const userLogin = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required()
})

const UserValidations = {
    userRegister,
    userLogin
}

module.exports = UserValidations