// Navbar.jsx
import React from 'react';
import './Navbar.css';
import { FaSearch } from 'react-icons/fa';  // react-icons package
import qicon from '../assets/Group1.png'; 

function Navbar() {
  return (
    <div className="navbar">
      {/* Left - Logo */}
      <div className="navbar-left">
        <img src={qicon} className="logo-icon" />
        {/* <span className="brand-name">tify</span> */}
      </div>

      {/* Center - Search */}
      <div className="navbar-center">
        <input
          type="text"
          placeholder="Search a album of your choice"
          className="search-input"
        />
        <button className="search-button">
          <FaSearch />
        </button>
      </div>

      {/* Right - Button */}
      <div className="navbar-right">
        <button className="feedback-button">Give Feedback</button>
      </div>
    </div>
  );
}

export default Navbar;
