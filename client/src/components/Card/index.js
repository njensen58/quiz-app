import React from 'react'
import './cardStyles.css'

// Card used for study session ( cannot delete or edit )
// Must be able to flip-rotate-turnover
const Card = props => {
    return (
        <div>
            <h4>{props.question}</h4>
            <p>{props.answerText}</p>
        </div>
    )
}

export default Card