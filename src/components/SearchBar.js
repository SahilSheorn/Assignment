import React from 'react';


const SearchBar = ({ onSearchChange }) => {
    return (
        <input className="search-bar rounded-3xl w-full"
            type="text"
            placeholder="🔍 Search by course name or instructor name..." size={38}
            onChange={(e) => onSearchChange(e.target.value)}
            
        />
    );
};

export default SearchBar;
