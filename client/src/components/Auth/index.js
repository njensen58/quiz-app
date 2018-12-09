import React, {  Fragment } from 'react'
import AuthForm from './AuthForm'
import Toggle from '../shared/Toggle'
import Form from '../shared/Form'
import { withUser } from '../../context/UserProvider'
import './authStyle.css'

const Auth = props => { 
    return (
        <div className="auth-container">
            <Toggle render={({ isToggled, toggler }) => 
                <Fragment>
                    <h1 onClick={toggler}>{isToggled ? "Sign Up" : "Login"}</h1>
                    { isToggled 
                        ?    <Form 
                                inputs={{ username: '', password: '' }}
                                submit={inputs => props.signup(inputs)}
                                render={props => <AuthForm {...props} btnText="Sign up"/>}
                            />
                        :   <Form 
                                inputs={{ username: '', password: '' }}
                                submit={inputs => props.login(inputs)}
                                render={props => <AuthForm {...props} btnText="Login"/>}
                            />
                    }
                </Fragment>
            }/>
        </div>
    )
}

export default withUser(Auth)

