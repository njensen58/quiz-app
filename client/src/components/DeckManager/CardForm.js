import React from 'react'

const CardForm = props => {
    const { inputs: { question, answerText }, btnText, handleChange, handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={question} 
                name="question" 
                onChange={handleChange} 
                placeholder="Question"/>
            <textarea 
                type="text" 
                value={answerText} 
                name="answerText" 
                onChange={handleChange} 
                placeholder="Answer">
            </textarea>
            <button>{btnText}</button>
        </form>
    )
}

export default CardForm