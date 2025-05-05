// components/Logo.jsx
import React from 'react';
import logo from '../assets/Group1.png'; 
import './Logo.css';

function Logo() {
  return <img src={logo} alt="QTify Logo" className="logo-icon" />;
}

export default Logo;
