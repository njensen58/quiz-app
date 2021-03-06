import React, { Component } from 'react'
import DeckContainer from '../DeckContainer'
import Search from '../Search'
import { withDecks } from '../../context/DeckProvider'

class PublicHome extends Component {
    componentDidMount(){
        this.props.getAllDecks()
    }
    render(){
        return (
            <div className="decks-container-public">
                <Search />
                <DeckContainer 
                    decks={this.props.currentDecks}
                    deleteDeck={this.props.deleteDeck}
                />
            </div>
        )
    }
}

export default withDecks(PublicHome)