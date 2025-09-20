import React, { useState } from 'react';
import '../css/navbar.css';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png'; // <-- import your logo image

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav>
        <div className="nav-container">
          <div className="logo">
            <img src={logo} alt="FlavorFind Logo" className="logo-img" />
            <Link to="/" className="logo-text">Flavor Find</Link>
          </div>
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
          <li><Link to="/Auth-form" onClick={() => setIsOpen(false)}>Sign In</Link></li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
