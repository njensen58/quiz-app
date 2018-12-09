import React from 'react'
import PersonalDeck from './PersonalDeck'

const UserDecks = props => {
    const { deleteDeck } = props
    return (
        <div className="decks-container-private">
                { props.userDecks.map(deck => <PersonalDeck 
                                                    {...deck} 
                                                    deleteDeck={deleteDeck} 
                                                    key={deck._id}/>)}
        </div>
    )
}

export default UserDecks