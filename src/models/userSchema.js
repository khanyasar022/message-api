const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: {
        type: String
    },
    password: {
        type: String
    },
    dob: {
        type: Date
    },
    address: {
        type: String
    },
    contact1: {
        type: Number
    },
    contact2: {
        type: Number
    },
    contact3: {
        type: Number
    }
}, { timestamps: true })

const User = new mongoose.model("User", userSchema)
module.exports = User