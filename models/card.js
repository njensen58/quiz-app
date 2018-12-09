const mongoose = require('mongoose')
const { Schema } = mongoose

const cardSchema = new Schema({
    question: {
        type: String,
        required: true
    },
    answerText: {
        type: String
    },
    deck: {
        type: Schema.Types.ObjectId,
        ref: "Deck",
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})

module.exports = mongoose.model("Card", cardSchema)