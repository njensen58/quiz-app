import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import Popup from '../../components/Popup'
import './deckStyle.css'

const PersonalDeck = props => {
    const { title, description, _id, likes, deleteDeck, history } = props
    const [ confirmDelete, setConfirmDelete ] = useState(false)
    
    return (
        <div className="personal-deck">
            { confirmDelete && 
                <Popup 
                    question={`Are you sure you want to delete Deck: ${title}?`}
                    toggleClose={() => setConfirmDelete(false)}
                    method={deleteDeck}
                    id={_id}/>}
            <h3>{title}</h3><span>Likes: {likes}</span>
            <p>{description}</p>
            <button onClick={() => setConfirmDelete(true)}> X </button>
            <button onClick={() => history.push(`/deck/manage/${_id}`)}>Manage</button>
            <button onClick={() => history.push(`/deck/${_id}`) }>Study</button>
        </div>
    )
}

export default withRouter(PersonalDeck)