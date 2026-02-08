import { useState } from 'react';
import '../styles/EmergencySOS.css';

function EmergencySOS() {
  const [isSOSActive, setIsSOSActive] = useState(false);

  const handleSOS = () => {
    setIsSOSActive(true);
    setTimeout(() => setIsSOSActive(false), 3000);
  };

  return (
    <section className="emergency-sos">
      <div className="sos-container">
        <div className="sos-content">
          <div className="sos-info">
            <h2>Your Safety, Our Priority</h2>
            <p>
              In case of emergency during your ride, our SOS feature instantly alerts:
            </p>
            <ul className="sos-alerts">
              <li>
                <span className="alert-icon">👥</span>
                <div>
                  <strong>Your Emergency Contacts</strong>
                  <p>Immediate notification with live location</p>
                </div>
              </li>
              <li>
                <span className="alert-icon">🚓</span>
                <div>
                  <strong>Nearest Police Station</strong>
                  <p>Automatic alert with ride details</p>
                </div>
              </li>
              <li>
                <span className="alert-icon">📞</span>
                <div>
                  <strong>24/7 Safety Team</strong>
                  <p>Dedicated support line connects instantly</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="sos-demo">
            <div className="phone-mockup">
              <div className="phone-screen">
                <h3>Emergency SOS</h3>
                <button
                  className={`sos-button ${isSOSActive ? 'active' : ''}`}
                  onClick={handleSOS}
                >
                  <span className="sos-icon">🚨</span>
                  <span className="sos-text">
                    {isSOSActive ? 'Alert Sent!' : 'Tap for Emergency'}
                  </span>
                </button>
                {isSOSActive && (
                  <div className="sos-status">
                    <p>✓ Emergency contacts notified</p>
                    <p>✓ Police station alerted</p>
                    <p>✓ Live location shared</p>
                  </div>
                )}
                <p className="sos-note">Hold for 3 seconds to activate</p>
              </div>
            </div>
          </div>
        </div>

        <div className="safety-features">
          <h3>Additional Safety Features</h3>
          <div className="features-list">
            <div className="safety-item">
              <span>🔒</span>
              <p>Ride details auto-shared with trusted contacts</p>
            </div>
            <div className="safety-item">
              <span>📸</span>
              <p>Driver photo & vehicle details before ride</p>
            </div>
            <div className="safety-item">
              <span>🗺️</span>
              <p>Live GPS tracking throughout journey</p>
            </div>
            <div className="safety-item">
              <span>⏰</span>
              <p>Safe arrival confirmation to contacts</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EmergencySOS;
