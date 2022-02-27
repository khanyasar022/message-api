const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
    message: {
        type: String,
    },
    time: {
        type: Date,
        default: Date.now
    },
    extra: {
        type: String,
    },
    extra2: {
        type: String
    }
}, { timestamps: true })

const Message = new mongoose.model("Message", messageSchema)
module.exports = Message