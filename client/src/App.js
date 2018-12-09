import React, { Component, Fragment } from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import Auth from './components/Auth'
import DeckMaker from './components/DeckMaker'
import { withUser } from './context/UserProvider'
import ProtectedRoute from './components/shared/ProtectedRoute'
import PublicHome from './components/PublicHome'
import DeckManager from './components/DeckManager'
import Study from './components/Study'
import Nav from './components/Nav'
import Header from './components/Header'

class App extends Component {
    componentDidMount(){
        this.props.verify()
    }

    render(){
        const { user, token, loading, logout } = this.props
        return (
            <div className="app-container">
                { loading 
                ?   <div>Loading...</div>
                :   <Fragment>
                        { token && <Header token={token} logout={logout}/> }
                        <Switch>
                            <Route 
                                exact path="/" 
                                render={props => token 
                                        ?   <Redirect to="/all" /> 
                                        :   <Auth {...props}/>
                                }/>
                            <ProtectedRoute 
                                token={token}
                                redirectTo={'/'}
                                component={PublicHome}
                                path="/all"
                            />
                            <ProtectedRoute 
                                token={token}
                                redirectTo={'/'}
                                component={Study}
                                exact path="/deck/:id"
                            />
                            <ProtectedRoute 
                                token={token}
                                redirectTo={'/'}
                                component={DeckMaker}
                                exact path="/deckmaker"
                            />
                            <ProtectedRoute 
                                token={token}
                                redirectTo={'/'}
                                component={DeckManager}
                                exact path="/deck/manage/:id"
                            />
                        </Switch>
                    </Fragment>
                }
            </div>
        )
    }
}

export default withRouter(withUser(App))