import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-brand" onClick={handleMenuClose}>
          <h1>SafeRide</h1>
          <span className="tagline">By Women, For Women</span>
        </Link>

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
          <li><Link to="/" onClick={handleMenuClose}>Home</Link></li>
          <li><Link to="/how-it-works" onClick={handleMenuClose}>How It Works</Link></li>
          <li><Link to="/safety" onClick={handleMenuClose}>Safety</Link></li>
          <li><Link to="/booking" onClick={handleMenuClose}>Book Now</Link></li>
          <li><Link to="/partners" onClick={handleMenuClose}>Partners</Link></li>
          <li><Link to="/about" onClick={handleMenuClose}>About Us</Link></li>
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
