import { useState } from 'react';
import '../styles/VehicleOptions.css';

function VehicleOptions() {
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const vehicles = [
    {
      id: 'scooty',
      name: 'Scooty',
      icon: '🛵',
      capacity: '1 Passenger',
      price: '₹8/km',
      features: ['Quick & Nimble', 'Beat Traffic', 'Eco-friendly'],
      image: 'https://images.pexels.com/photos/13243986/pexels-photo-13243986.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 'auto',
      name: 'Auto Rickshaw',
      icon: '🛺',
      capacity: '2-3 Passengers',
      price: '₹12/km',
      features: ['Comfortable', 'Shared Option', 'Weather Protected'],
      image: 'https://images.pexels.com/photos/2174659/pexels-photo-2174659.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 'cab',
      name: 'Cab',
      icon: '🚗',
      capacity: '4 Passengers',
      price: '₹15/km',
      features: ['AC Comfort', 'Spacious', 'Premium Experience'],
      image: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <section className="vehicle-options" id="pricing">
      <div className="vehicle-container">
        <div className="vehicle-header">
          <h2>Choose Your Ride</h2>
          <p>Multiple options to suit your needs and budget</p>
        </div>
        <div className="vehicles-grid">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className={`vehicle-card ${selectedVehicle === vehicle.id ? 'selected' : ''}`}
              onClick={() => setSelectedVehicle(vehicle.id)}
            >
              <div className="vehicle-image">
                <img src={vehicle.image} alt={vehicle.name} />
                <span className="vehicle-icon">{vehicle.icon}</span>
              </div>
              <div className="vehicle-info">
                <h3>{vehicle.name}</h3>
                <div className="vehicle-meta">
                  <span className="capacity">{vehicle.capacity}</span>
                  <span className="price">{vehicle.price}</span>
                </div>
                <ul className="vehicle-features">
                  {vehicle.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <button className="btn-select">
                  {selectedVehicle === vehicle.id ? 'Selected' : 'Select Vehicle'}
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="pricing-info">
          <div className="info-box">
            <h4>💰 Fair Pricing Promise</h4>
            <p>
              All fares calculated transparently. For long-distance rides, if your driver picks up another
              passenger on the return journey, you'll receive an automatic refund to your wallet.
            </p>
          </div>
          <div className="info-box">
            <h4>🤝 Shared Rides</h4>
            <p>
              Save up to 40% by choosing our shared ride option. Only matched with verified women passengers
              heading in the same direction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VehicleOptions;
