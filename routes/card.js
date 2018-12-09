const express = require('express')
const cardRouter = express.Router()
const Cards = require('../models/card')

// Add a new card to a deck
cardRouter.post('/newcard', (req, res, next) => {
    const newCard = new Cards(req.body)
    newCard.user = req.user._id
    newCard.save((err, card) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(card)
    })
})

// Get all cards by deckID
cardRouter.get('/:deckId', (req, res, next) => {
    Cards.find({deck: req.params.deckId}, (err, cards) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(cards)
    })
})

cardRouter.put('/:cardId', (req, res, next) => {
    Cards.findOneAndUpdate(
        {_id: req.params.cardId},
        req.body,
        {new: true},
        (err, card) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(card)
        }
    )
})

cardRouter.delete('/:cardId', (req, res, next) => {
    Cards.findOneAndRemove(
        {_id: req.params.cardId},
        (err, card) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(card)
        }
    )
})


module.exports = cardRouter