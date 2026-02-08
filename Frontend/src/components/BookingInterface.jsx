import { useState } from 'react';
import '../styles/BookingInterface.css';

function BookingInterface() {
  const [bookingData, setBookingData] = useState({
    pickup: '',
    dropoff: '',
    rideType: 'solo',
    vehicleType: 'auto'
  });

  const [estimatedFare, setEstimatedFare] = useState(null);

  const handleInputChange = (e) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value
    });
  };

  const calculateFare = () => {
    const baseFares = { scooty: 8, auto: 12, cab: 15 };
    const distance = Math.floor(Math.random() * 15) + 5;
    const fare = distance * baseFares[bookingData.vehicleType];
    const discount = bookingData.rideType === 'shared' ? 0.6 : 1;

    setEstimatedFare({
      distance,
      baseFare: fare,
      finalFare: Math.round(fare * discount),
      savings: bookingData.rideType === 'shared' ? Math.round(fare * 0.4) : 0
    });
  };

  return (
    <section className="booking-interface">
      <div className="booking-container">
        <div className="booking-card">
          <h2>Book Your Safe Ride</h2>
          <p className="booking-subtitle">Quick booking with real-time fare estimate</p>

          <form className="booking-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label>📍 Pickup Location</label>
              <input
                type="text"
                name="pickup"
                value={bookingData.pickup}
                onChange={handleInputChange}
                placeholder="Enter pickup address"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label>📌 Drop-off Location</label>
              <input
                type="text"
                name="dropoff"
                value={bookingData.dropoff}
                onChange={handleInputChange}
                placeholder="Enter destination"
                className="form-input"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>🚗 Vehicle Type</label>
                <select
                  name="vehicleType"
                  value={bookingData.vehicleType}
                  onChange={handleInputChange}
                  className="form-select"
                >
                  <option value="scooty">Scooty (₹8/km)</option>
                  <option value="auto">Auto Rickshaw (₹12/km)</option>
                  <option value="cab">Cab (₹15/km)</option>
                </select>
              </div>

              <div className="form-group">
                <label>👥 Ride Type</label>
                <select
                  name="rideType"
                  value={bookingData.rideType}
                  onChange={handleInputChange}
                  className="form-select"
                >
                  <option value="solo">Solo Ride</option>
                  <option value="shared">Shared Ride (Save 40%)</option>
                </select>
              </div>
            </div>

            <button
              type="button"
              onClick={calculateFare}
              className="btn-estimate"
            >
              Calculate Fare
            </button>

            {estimatedFare && (
              <div className="fare-estimate">
                <div className="fare-details">
                  <div className="fare-row">
                    <span>Distance</span>
                    <strong>{estimatedFare.distance} km</strong>
                  </div>
                  <div className="fare-row">
                    <span>Base Fare</span>
                    <strong>₹{estimatedFare.baseFare}</strong>
                  </div>
                  {estimatedFare.savings > 0 && (
                    <div className="fare-row savings">
                      <span>Shared Ride Savings</span>
                      <strong>-₹{estimatedFare.savings}</strong>
                    </div>
                  )}
                  <div className="fare-row total">
                    <span>Total Fare</span>
                    <strong>₹{estimatedFare.finalFare}</strong>
                  </div>
                </div>
                <p className="fare-note">
                  ✨ For long-distance rides, you'll get a refund if the driver picks up a return passenger
                </p>
              </div>
            )}

            <button type="submit" className="btn-book">
              Book Now
            </button>
          </form>

          <div className="booking-features">
            <div className="feature-item">
              <span>✓</span> Instant driver matching
            </div>
            <div className="feature-item">
              <span>✓</span> Live tracking
            </div>
            <div className="feature-item">
              <span>✓</span> SOS emergency support
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookingInterface;
