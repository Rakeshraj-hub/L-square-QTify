import React from 'react';
import './Navbar.css';
import { FaSearch } from 'react-icons/fa';
import qicon from '../assets/Group1.png';

function Navbar() {
  return (
    <div className="navbar">
      {/* Logo */}
      <div className="navbar-left">
        <img src={qicon} alt="App Logo" className="logo-icon" />
      </div>

      {/* Search Bar */}
      <div className="navbar-center">
        <input
          type="text"
          placeholder="Search a album of your choice"
          className="search-input"
        />
        <button className="search-button" aria-label="search">
          <FaSearch />
        </button>
      </div>

      {/* Feedback Button */}
      <div className="navbar-right">
        <button className="feedback-button">Give Feedback</button>
      </div>
    </div>
  );
}

export default Navbar;
