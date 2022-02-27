const User = require('../models/userSchema')

const userSignup = async (data) => {
    try {
        const addedUser = await User.create(data)
        return addedUser
    } catch(error) {
        console.log(`signup user error ${error}`)
    }
}

const userLogin = async (data) => {
    try {
        const loggedInUser = await User.find(data)
        return loggedInUser
    } catch(error) {
        console.log(`login user error ${error}`)
    }
}

const UserService = {
    userSignup,
    userLogin
}
module.exports = UserService