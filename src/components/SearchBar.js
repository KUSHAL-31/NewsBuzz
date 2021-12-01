import React from 'react'
import './compStyle/SearchBar.css'

const SearchBar = () => {
    return (
        <>
            <div className="search-bar">
                <input type="text" placeholder="Enter your interest" />
                <button>Search</button>
            </div>
        </>
    )
}

export default SearchBar
