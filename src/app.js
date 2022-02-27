const express = require("express")
const cors = require('cors')
const cookieParser = require("cookie-parser")

const app = express()
const handleErrors = require('./middlewares/handleErrors')
const messageRoutes = require('./api/message/routes')
const userRoutes = require('./api/user/routes')


//middlewares
app.use(cookieParser())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//routes
app.use('/message', messageRoutes)
app.use('/user', userRoutes)

app.use(handleErrors)

module.exports = app