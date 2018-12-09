import React from 'react'

const AuthForm = props => {
    const { handleChange, handleSubmit, inputs: { username, password }, btnText } = props
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" value={username} name="username" placeholder="Username" onChange={handleChange}/>
            <input type="text" value={password} name="password" placeholder="Password" onChange={handleChange}/>
            <button>{btnText}</button>
        </form>
    )
}

export default AuthForm