
import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './Search.css';

function Search() {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search a album of your choice" className="search-input" />
      <button className="search-button"><FaSearch /></button>
    </div>
  );
}

export default Search;
