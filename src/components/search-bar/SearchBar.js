// SearchBar.js
import React, { useState } from 'react';
import './SearchBar.css'; // Make sure to create a corresponding CSS file

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault(); // Prevent the form from refreshing the page
    onSearch(searchTerm); // This function would be passed as a prop
  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search events..."
        value={searchTerm}
        onChange={handleInputChange}
        className="search-input"
      />
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
