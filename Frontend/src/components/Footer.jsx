import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>SafeRide</h3>
            <p className="footer-tagline">By Women, For Women</p>
            <p className="footer-description">
              India's first all-women driver network dedicated to making travel safe,
              comfortable, and affordable for women across the country.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="LinkedIn">💼</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#safety">Safety Features</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#partners">Partners</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>For Drivers</h4>
            <ul className="footer-links">
              <li><a href="#drive-with-us">Become a Driver</a></li>
              <li><a href="#driver-training">Training Program</a></li>
              <li><a href="#earnings">Earnings Calculator</a></li>
              <li><a href="#driver-support">Driver Support</a></li>
              <li><a href="#driver-app">Download Driver App</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Support</h4>
            <ul className="footer-links">
              <li><a href="#help">Help Center</a></li>
              <li><a href="#safety-guidelines">Safety Guidelines</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#feedback">Feedback</a></li>
              <li><a href="#emergency">Emergency Support 24/7</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Legal</h4>
            <ul className="footer-links">
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
              <li><a href="#refund">Refund Policy</a></li>
              <li><a href="#cookies">Cookie Policy</a></li>
              <li><a href="#compliance">Compliance</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-emergency">
            <span className="emergency-icon">🚨</span>
            <div>
              <strong>24/7 Emergency Helpline</strong>
              <p>1800-XXX-XXXX (Toll-Free)</p>
            </div>
          </div>
          <div className="footer-copyright">
            <p>&copy; 2024 SafeRide. All rights reserved.</p>
            <p>Empowering women, one ride at a time.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
