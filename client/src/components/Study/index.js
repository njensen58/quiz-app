import React, { Component } from 'react'
import Card from '../Card'
import { withCards } from '../../context/CardProvider'
import './studyStyle.css'

class Study extends Component {
    // get all cards from current deck using params
    componentDidMount(){
        this.props.getCards(this.props.match.params.id)
    }
    render(){
        return (
            <div className="study-container">
                {this.props.currentCards.length 
                    ? this.props.currentCards.map(card => <Card {...card} key={card._id}/>)
                    : <div>Oops, it appears this deck doesn't have any cards yet...</div>
                }
            </div>
        )
    }
}

export default withCards(Study)