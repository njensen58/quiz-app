import React from 'react'
import { withRouter } from 'react-router-dom'

const PublicDeck = props => {
    const { title, description, _id, likes, deleteDeck, history } = props
    return (
        <div className="public-deck">
            <h3>{title}</h3><span>Likes: {likes}</span>
            <p>{description}</p>
            <button onClick={() => history.push(`/deck/${_id}`) }>Study</button>
        </div>
    )
}

export default withRouter(PublicDeck)