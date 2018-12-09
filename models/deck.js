const mongoose = require('mongoose')
const { Schema } = mongoose

const deckSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    likes: {
        type: Number,
        default: 0
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

module.exports = mongoose.model("Deck", deckSchema)