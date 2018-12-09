import React from 'react'
import PublicDeck from './PublicDeck'
import './deckStyle.css'

const DeckContainer = props => props.decks.map(d => <PublicDeck {...d} key={d._id} {...props} />)

export default DeckContainer