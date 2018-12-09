import React, { Component } from 'react'
import UserCard from '../Card/UserCard'
import Form from '../shared/Form'
import CardForm from '../DeckMaker/CardForm'
import { withCards } from '../../context/CardProvider'
import './managerStyle.css'

class DeckManager extends Component {
    componentDidMount(){
        this.props.getUserCards(this.props.match.params.id)
    }

    render(){
        return (
            <div className="manager-container">
                <h1>Add New Card</h1>
                <Form 
                    inputs={{ question: '', answerText: '' }}
                    submit={inputs => this.props.createCard(inputs, this.props.match.params.id)}
                    render={props => <CardForm {...props} btnText="Add Card"/>}
                />
                <div>
                {this.props.userCards.map(card => 
                        <UserCard 
                            {...card} 
                            key={card._id} 
                            editCard={this.props.editCard} 
                            deleteCard={this.props.deleteCard}/>)}
                </div>
            </div>
        )
    }
}

export default withCards(DeckManager)