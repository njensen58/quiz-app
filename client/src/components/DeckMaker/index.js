import React, { Component } from 'react'
import Form from '../shared/Form'
import DeckForm from './DeckForm'
import UserDecks from './UserDecks'
import { withDecks } from '../../context/DeckProvider'
import './makerStyles.css'

class DeckMaker extends Component {
    componentDidMount(){
        this.props.getUserDecks()
    }

    render(){
        return (
            <div className="deckmaker-container">
                <h1>Create New Deck</h1>
                <Form 
                    inputs={{ title: '', description: '' }}
                    submit={inputs => this.props.createDeck(inputs)}
                    render={props => <DeckForm {...props} btnText="Save Deck"/>}
                />
                <h3>Manage Decks</h3>
                <UserDecks 
                    userDecks={this.props.userDecks} 
                    deleteDeck={this.props.deleteDeck}/>
            </div>
        )
    }
}

export default withDecks(DeckMaker)