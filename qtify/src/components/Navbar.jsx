// components/Navbar.jsx
import React from 'react';
import './Navbar.css';
import Logo from './Logo';
import Search from './Search';
import Button from './Button';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <Logo />
      </div>
      <div className="navbar-center">
        <Search />
      </div>
      <div className="navbar-right">
        <Button text="Give Feedback" />
      </div>
    </div>
  );
}

export default Navbar;
