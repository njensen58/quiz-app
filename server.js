const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const expressJwt = require('express-jwt')
const PORT = process.env.PORT || 5858

app.use(express.json())
app.use(morgan('dev'))


app.use('/api', expressJwt({secret: process.env.SECRET}))

app.use('/auth', require('./routes/auth'))
app.use('/api/user', require('./routes/user'))
app.use('/api/deck', require('./routes/deck'))
app.use('/api/cards', require('./routes/card'))



mongoose.connect('mongodb://localhost:27017/new-quizard', {useNewUrlParser: true}, () => {
    console.log("[o] Connected to the DB")
})



app.use((err, req, res, next) => {
    console.log(err.message)
    return res.send({ errMsg: err.message })
})


const server = app.listen(PORT, () => {
    console.log(`[+] Server is running on port ${PORT}`)
})