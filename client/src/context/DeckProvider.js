import React, { Component } from 'react'
import axios from 'axios'

const { Provider, Consumer } = React.createContext()
const deckAxios = axios.create()

deckAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})


export default class DeckProvider extends Component {
    constructor(){
        super()
        this.state = {
            currentDecks: [],
            userDecks: []
        }
    }

    getAllDecks = () => {
        deckAxios.get('/api/deck/alldecks')
            .then(res => {
                this.setState({
                    currentDecks: res.data
                })
             })
            .catch(err => console.log(err))
    }

    getUserDecks = () => {
        deckAxios.get('/api/deck/userdecks')
            .then(res => {
                this.setState({
                    userDecks: res.data
                })
            })
            .catch(err => console.log(err))
    }

    createDeck = deckData => {
        deckAxios.post('/api/deck/newdeck', deckData)
            .then(res => {
                this.setState(p => ({
                    currentDecks: [res.data, ...p.currentDecks],
                    userDecks: [res.data, ...p.userDecks]
                }))
            })
            .catch(err => console.log(err))
    }

    deleteDeck = id => {
        deckAxios.delete(`/api/deck/${id}`)
            .then(res => {
                console.log(res)
                this.setState(p => ({
                    currentDecks: p.currentDecks.filter(d => d._id !== id),
                    userDecks: p.userDecks.filter(d => d._id !== id)
                }))
            })
            .catch(err => console.log(err))
    }

    render(){
        return (
            <Provider 
                value={{
                    currentDecks: this.state.currentDecks,
                    userDecks:    this.state.userDecks,
                    getAllDecks:  this.getAllDecks,
                    createDeck:   this.createDeck,
                    deleteDeck:   this.deleteDeck,
                    getUserDecks: this.getUserDecks
                }}>
                { this.props.children }
            </Provider>
        )
    }
}

export const withDecks = C => props => (
    <Consumer>
        { value => <C {...props}{...value}/> }
    </Consumer>
)

