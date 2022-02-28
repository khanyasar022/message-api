const { BadRequest } = require('../../utils/errors')
const response = require('../../utils/response')
const validate = require('../../utils/validate')
const User = require('../../models/userSchema')
const UserValidations = require('./validations')
const UserService = require('../../services/users')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userSignup = async (req, res, next) => {
    try {
        const params = validate(UserValidations.userRegister, req.body)
        if(params instanceof Error) throw new BadRequest(params.message)
        //checking if user already exists
        const emailExist = await User.findOne({ email: params.email })
        if(emailExist) return response(res, 0, 'email already exists', 400)
        //hash password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(params.password, salt)

        const data = {
            email: params.email,
            password: hashedPassword,
            dob: params.dob,
            address: params.address,
            contact1: params.contact1,
            contact2: params.contact2,
            contact3: params.contact3
        }
        let addedUser = await UserService.userSignup(data)
        return response(res, 1, addedUser, 200)
    } catch(error) {
        next(error)
    }
}

const userLogin = async (req, res, next) => {
    try {
        const params = validate(UserValidations.userLogin, req.body)
        if(params instanceof Error) throw new BadRequest(params.message)
        //checking if email exists
        const user = await User.findOne({ email: params.email })
        if(!user) return response(res, 0, 'email does not exists', 400)
        //password check
        const validPass = await bcrypt.compare(params.password, user.password)
        if(!validPass) return response(res, 0, 'invalid password', 400)

        //create and assign a token
        const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET)

        return res.header('auth-token', token).send(token)
    } catch(error) {
        next(error)
    }
}

const UserControllers = {
    userSignup,
    userLogin
}

module.exports = UserControllers