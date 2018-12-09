const express = require('express')
const deckRouter = express.Router()
const Decks = require('../models/deck')

// Add a new deck attaching user's ID
deckRouter.post('/newdeck', (req, res, next) => {
    const newDeck = new Decks(req.body)
    newDeck.user = req.user._id
    newDeck.save((err, deck) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(deck)
    })
})

// Delete a specified Deck
deckRouter.delete('/:id', (req, res, next) => {
    Decks.findOneAndRemove(
        {_id: req.params.id},
        (err, deletedDeck) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send({msg: "Successfully Deleted Deck", deletedDeck})
        }
    )
})

// Get all decks/filtered Decks
deckRouter.get('/alldecks', (req, res, next) => {
    // if(req.query.deckTitle){
    //     // regex query on existing deck titles
    // } else {
        Decks.find((err, allDecks) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(allDecks)
        })
    // }
})

// Get user made decks
deckRouter.get('/userdecks', (req, res, next) => {
    Decks.find({user: req.user._id}, (err, decks) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(decks)
    })
})

module.exports = deckRouter