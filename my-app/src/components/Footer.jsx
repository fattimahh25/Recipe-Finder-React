import React from 'react';
import '../css/footer.css';
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="footer-title">🍳 FlavorFind</div>
              <p style={{ color: '#9ca3af' }}>
                Discover amazing recipes from around the world.
              </p>
            </div>

            <div>
              <h3 className="footer-subtitle">Quick Links</h3>
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/recipes">Recipes</Link></li>
                <li><Link to="/categories">Categories</Link></li>
                <li><Link to="/about">About</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="footer-subtitle">Support</h3>
              <ul className="footer-links">
                <li><Link to="/help">Help Center</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/privacy">Privacy Policy</Link></li>
                <li><Link to="/terms">Terms of Service</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="footer-subtitle">Follow Us</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <Link to="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>📘 Facebook</Link>
                <Link to="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>📷 Instagram</Link>
                <Link to="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>🐦 Twitter</Link>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2024 FlavorFind. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
