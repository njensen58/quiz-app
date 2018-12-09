import React from 'react'

const SearchForm = props => {
    const { handleChange, handleSubmit, inputs: { search }, btnText } = props
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="search" value={search} onChange={handleChange} placeholder="Search Decks"/>
            <button>{btnText}</button>
        </form>
    )
}

export default SearchForm