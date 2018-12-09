const express = require('express')
const authRouter = express.Router()
const User = require('../models/user')
const jwt = require('jsonwebtoken')


authRouter.post('/signup', (req, res, next) => {
    User.findOne({ username: req.body.username}, (err, foundUser) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        if(foundUser !== null){
            res.status(400)
            return next("That username is already taken.")
        }
        const newUser = new User(req.body)
        newUser.save((err, user) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            const token = jwt.sign(user.withoutPassword(), process.env.SECRET)
            return res.status(201).send({user: user.withoutPassword(), token})
        })
    })
})

authRouter.post('/login', (req, res, next) => {
    User.findOne({ username: req.body.username.toLowerCase()}, (err, user) => {
        if (err){
            res.status(500)
            return next(err)
        }
        if(!user){
            res.status(403)
            return next("Email or password are incorrect!")
        }
        user.checkPassword(req.body.password, (err, match) => {
            if (err) {
                res.status(500)
                return next("Username or password are incorrect!")
            }
            if (!match) {
                res.status(401)
                return next("Username or password are incorrect!")
            }
            const token = jwt.sign(user.withoutPassword(), process.env.SECRET)
            return res.status(201).send({user: user.withoutPassword(), token})
        })  
    })
})

module.exports = authRouter