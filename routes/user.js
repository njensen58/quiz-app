const express = require('express')
const userRouter = express.Router()
const User = require('../models/user')

// Verify user and re-send user data on page refresh
userRouter.post('/', (req, res, next) => {
    User.findOne({_id: req.user._id}, (err, foundUser) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        if(!foundUser){
            res.status(500)
            return next(new Error("No User Found"))
        }
        return res.status(200).send({user: foundUser.withoutPassword()})
    })
})

module.exports = userRouter