import React, { Fragment } from 'react'
import Toggle from '../shared/Toggle'
import { Link, withRouter } from 'react-router-dom'
import './navStyle.css'

const Nav = props => {
    const { token, logout } = props
    return (
        <Toggle render={({isToggled, toggler}) =>
            <Fragment>
            { token && <button className="goback-btn" onClick={props.history.goBack}>Go Back</button> }
                <div onClick={toggler} className={isToggled ? "overlay overlay-open" : "overlay overlay-close"}></div>
                <button onClick={toggler} className="nav-btn">Nav</button>
                <div className={isToggled ? "nav nav-open" : "nav nav-close"} onClick={toggler}>
                    <Link to="/all" >Decks</Link>
                    <Link to="/deckmaker" >Deck Maker</Link>
                    <p onClick={logout}>Logout</p>
                </div>
            </Fragment>
        }/>
    )
}

export default withRouter(Nav)