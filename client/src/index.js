import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import UserProvider from './context/UserProvider'
import DeckProvider from './context/DeckProvider'
import CardProvider from './context/CardProvider'
import './index.css'

ReactDOM.render(
    <BrowserRouter>
        <UserProvider>
            <DeckProvider>
                <CardProvider>
                    <App />
                </CardProvider>
            </DeckProvider>
        </UserProvider>
    </BrowserRouter>, 
document.getElementById('root'))