import React from 'react'
import Form from '../shared/Form'
import SearchForm from './SearchForm'
import './searchStyle.css'

const Search = props => {
    return (
        <div className="search">
            <Form 
                inputs={{ search: '' }}
                submit={inputs => alert(inputs)}
                render={props => <SearchForm {...props} btnText={"Search"}/>}
            />
        </div>
    )
}

export default Search