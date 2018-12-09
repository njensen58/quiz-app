import React, { Component } from 'react'
import axios from 'axios'

const { Provider, Consumer } = React.createContext()
const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})


export default class UserProvider extends Component {
    constructor(){
        super()
        this.state = {
            user: JSON.parse(localStorage.getItem("user")) || {},
            token: localStorage.getItem("token") || "",
            authErr: '',
        }
    }

    signup = userInfo => {
        axios.post('/auth/signup', userInfo).then(res => {
            const {user, token} = res.data
            localStorage.setItem("user", JSON.stringify(user))
            localStorage.setItem("token", token)
            this.authenticate(user, token)
        })
        .catch(err => this.errorHandler(err))
    }

    login = userInfo => {
        axios.post('/auth/login', userInfo).then(res => {
            const {user, token} = res.data
            localStorage.setItem("user", JSON.stringify(user))
            localStorage.setItem("token", token)
            this.authenticate(user, token)
        })
        .catch(err => this.errorHandler(err))
    }

    authenticate = (user, token) => {
        this.setState({ user, token })
    }

    logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        this.setState({ user: {}, token: '' })
    }

    verify = () => {
        const token = localStorage.getItem("token")
        userAxios.post('/api/user', {token})
            .then(res => {
                this.authenticate(res.data.user, token)
            })
            .catch(err => console.log(err))
    }

    errorHandler = err => {
        this.setState({authErr: err.message})
    }

    render() {
        return (
            <Provider
                value={{
                    signup:       this.signup,
                    login:        this.login,
                    user:         this.state.user,
                    verify:       this.verify,
                    logout:       this.logout,
                    token: this.state.token
                }}>
                { this.props.children }
            </Provider>
        )
    }
}

export const withUser = C => props =>
    <Consumer>
        { value => <C {...props}{...value}/> }
    </Consumer>

