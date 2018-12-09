import React from 'react'
import PropTypes from 'prop-types'

const DeckForm = props => {
    const { inputs: {title, description}, btnText, handleSubmit, handleChange } = props
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="title" 
                value={title} 
                onChange={handleChange} 
                placeholder="Title"/>
            <input 
                type="text" 
                name="description" 
                value={description} 
                onChange={handleChange} 
                placeholder="Description"/>
            <button>{btnText}</button>
        </form>
    )
}

DeckForm.propTypes = {
    inputs: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string
    }),
    btnText: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
}

export default DeckForm