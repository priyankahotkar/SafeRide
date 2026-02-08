import '../styles/Features.css';

function Features() {
  const features = [
    {
      icon: '🛡️',
      title: 'Verified Women Drivers',
      description: 'All our drivers undergo thorough background checks and training for your safety and comfort.'
    },
    {
      icon: '📍',
      title: 'Real-Time Tracking',
      description: 'Share your live location with trusted contacts. Track your ride from pickup to drop-off.'
    },
    {
      icon: '🚨',
      title: 'SOS Emergency Button',
      description: 'Instant alert to emergency contacts and nearest police stations with one tap.'
    },
    {
      icon: '💰',
      title: 'Fair Pricing',
      description: 'Transparent fare calculation with automatic refunds for shared rides. No hidden charges.'
    },
    {
      icon: '👥',
      title: 'Shared Rides',
      description: 'Save money with our ride-sharing option. Get refunds when drivers pick additional passengers.'
    },
    {
      icon: '⭐',
      title: 'Rating System',
      description: 'Rate your experience and read reviews from other women passengers for complete transparency.'
    }
  ];

  return (
    <section className="features" id="safety">
      <div className="features-container">
        <div className="features-header">
          <h2>Built for Your Safety & Comfort</h2>
          <p>Every feature designed with women's safety as the top priority</p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
