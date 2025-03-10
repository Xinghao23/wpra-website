// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/WpraLogo.png';


function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo-container">
      <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        <h1 className="site-name">Western Pacific Robotics Academy</h1>
      </div>
      <nav className={`nav ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link></li>
          <li><Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link></li>
          <li><Link to="/Programs" onClick={() => setIsMobileMenuOpen(false)}>Programs</Link></li>
          <li><Link to="/AwardsPage" onClick={() => setIsMobileMenuOpen(false)}>Awards</Link></li>
          <li><Link to="/Sponsorship" onClick={() => setIsMobileMenuOpen(false)}>Sponsorship</Link></li>
          <li><Link to="/Gallery" onClick={() => setIsMobileMenuOpen(false)}>Gallery</Link></li>
          <li><Link to="/Blog" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link></li>
        </ul>
      </nav>
      <button className="mobile-menu-icon" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? '✕' : '☰'}
      </button>
    </header>
  );
}

export default Header;
