// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/WpraLogo.png';

function Header() {
  return (
    <header>
      <div className="logo-container">
        <img src={logo} alt="Logo" className= "logo" />
        <h1 className = "site-name"> Western Pacific Robotics Academy </h1>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/Programs">Programs</Link></li>
          <li><Link to="/AwardsPage">Awards</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
