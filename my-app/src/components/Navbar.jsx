import React, { useState } from 'react';
import '../css/navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav>
        <div className="nav-container">
          <Link to="/" className="logo">🍳 FlavorFind</Link>
          <ul className="nav-links">
            <li><Link to="/" className="active">Home</Link></li>
            <li><Link to="/recipes">Recipes</Link></li>
            <li><Link to="/categories">Categories</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          <div className="nav-actions">
            <Link to="/Auth-form">
              <button className="sign-in-btn">Sign In</button>
            </Link>
            <button 
              className="menu-icon" 
              onClick={() => setIsOpen(!isOpen)}
            >
              ☰
            </button>
          </div>
        </div>
        <ul className={`mobile-menu ${isOpen ? "open" : ""}`} id="mobileMenu">
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="/recipes" onClick={() => setIsOpen(false)}>Recipes</Link></li>
          <li><Link to="/categories" onClick={() => setIsOpen(false)}>Categories</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
