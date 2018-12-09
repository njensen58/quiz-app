import React, { Fragment } from 'react'
import AuthForm from './AuthForm'
import Toggle from '../shared/Toggle'
import Form from '../shared/Form'
import Header from '../Header'
import { withUser } from '../../context/UserProvider'
import './authStyle.css'

const Auth = props => { 
    const { signup, login, logout, token } = props
    return (
        <Fragment>
            <Header token={token} logout={logout}/>
            <div className="auth-container">
                <Toggle render={({ isToggled, toggler }) => 
                    <div>
                        <span onClick={toggler}>Click here to {isToggled ? "Login" : "Sign Up"}</span>
                        <h1>{isToggled ? "Sign Up" : "Login"}</h1>
                        { isToggled 
                            ?    <Form 
                                    inputs={{ username: '', password: '' }}
                                    submit={inputs => signup(inputs)}
                                    render={props => <AuthForm {...props} btnText="Sign up"/>}
                                />
                            :   <Form 
                                    inputs={{ username: '', password: '' }}
                                    submit={inputs => login(inputs)}
                                    render={props => <AuthForm {...props} btnText="Login"/>}
                                />
                        }
                    </div>
                }/>
            </div>
        </Fragment>
    )
}

export default withUser(Auth)

