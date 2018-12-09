import React, { Component } from 'react'
import axios from 'axios'

const {Provider, Consumer} = React.createContext()
const cardAxios = axios.create()

cardAxios.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
    return config
})


export default class CardProvider extends Component {
    constructor(){
        super()
        this.state = {
            currentCards: [],
            userCards: []
        }
    }

    // Get cards for studying a deck
    getCards = deckId => {
        cardAxios.get(`/api/cards/${deckId}`)
            .then(res => {
                this.setState({
                    currentCards: res.data
                })
            })
            .catch(err => console.log(err))
    }

    // Get cards for editing a personal made deck
    getUserCards = deckId => {
        cardAxios.get(`/api/cards/${deckId}`)
            .then(res => {
                this.setState({
                    userCards: res.data
                })
            })
            .catch(err => console.log(err))
    }

    // Create a new card for a deck
    createCard = (cardData, deckId) => {
        cardData.deck = deckId
        cardAxios.post('/api/cards/newcard', cardData)
            .then(res => {
                this.setState(p => ({
                    userCards: [res.data, ...p.userCards]
                }))
            })
            .catch(err => console.log(err))
    }

    // Edit a user card
    editCard = (cardData, cardId) => {
        if(cardData.question.trim().length === 0){
            delete cardData.question
        }
        if(cardData.answerText.trim().length === 0){
            delete cardData.answerText
        }
        cardAxios.put(`/api/cards/${cardId}`, cardData)
            .then(res => {
                this.setState(p => ({
                    userCards:    p.userCards.map(c => c._id === cardId ? res.data : c),
                    currentCards: p.currentCards.map(c => c._id === cardId ? res.data : c)
                }))
            })
            .catch(err => console.log(err))
    }

    deleteCard = cardId => {
        cardAxios.delete(`/api/cards/${cardId}`)
            .then(res => {
                this.setState(p => ({
                    userCards: p.userCards.filter(c => c._id !== cardId)
                }))
            })
            .catch(err => console.log(err))
    }

    render(){
        return (
            <Provider value={{
                currentCards: this.state.currentCards,
                userCards:    this.state.userCards,
                getCards:     this.getCards,
                getUserCards: this.getUserCards,
                createCard:   this.createCard,
                editCard:     this.editCard,
                deleteCard:   this.deleteCard
            }}>
                { this.props.children }
            </Provider>
        )
    }
}


export const withCards = C => props => (
    <Consumer>
        { value => <C {...props} {...value} /> }
    </Consumer>
)