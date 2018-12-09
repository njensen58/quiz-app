import React from 'react'
import Nav from '../Nav'
import './style.css'

const Header = props => {
    const { token, logout } = props
    return (
        <div className="header">
            <Nav token={token} logout={logout}/>
            <h1>Quizzard</h1>
        </div>
    )
}

export default Header