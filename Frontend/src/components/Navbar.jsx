import { useState } from 'react';
import '../styles/Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-brand">
          <h1>SafeRide</h1>
          <span className="tagline">By Women, For Women</span>
        </div>

        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#how-it-works">How It Works</a></li>
          <li><a href="#safety">Safety</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#partners">Partners</a></li>
          <li><a href="#drive-with-us">Drive With Us</a></li>
        </ul>

        <div className="nav-actions">
          <button className="btn-secondary">Sign In</button>
          <button className="btn-primary">Get Started</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
