import React, { Fragment } from 'react'
import Toggle from '../shared/Toggle'
import Form from '../shared/Form'
import CardForm from '../DeckMaker/CardForm'

// Card used for user to manage cards ( allows delete and edit )
const UserCard = props => {
    const { _id, editCard, question, answerText, deleteCard } = props
    return (
        <Toggle render={({ isToggled, toggler}) =>
            <div className="user-card">
                {!isToggled 
                    ?   <Fragment>
                            <h2>{question}</h2>
                            <p>{answerText}</p>
                            <button onClick={toggler}>Edit</button>
                            <button onClick={() => deleteCard(_id)}>Delete</button>
                        </Fragment>
                    :   <Fragment>
                            <Form 
                                inputs={{ question: '', answerText: '' }}
                                submit={inputs => {
                                    editCard(inputs, _id)
                                    toggler()
                                }}
                                render={props => <CardForm {...props} btnText="Submit"/>}
                            />
                            <button onClick={toggler}>Close</button>
                        </Fragment>
                }
            </div>
        }/>
    )
}

export default UserCard

