import '../styles/Hero.css';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Your Safe Journey
            <span className="highlight">Starts Here</span>
          </h1>
          <p className="hero-description">
            India's first all-women driver network. Travel with confidence,
            knowing you're in safe hands. Available 24/7 across major cities.
          </p>
          <div className="hero-actions">
            <button className="btn-large btn-primary">Book Your Ride</button>
            <button className="btn-large btn-outline">Become a Driver</button>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <strong>50,000+</strong>
              <span>Women Drivers</span>
            </div>
            <div className="stat">
              <strong>2M+</strong>
              <span>Safe Rides</span>
            </div>
            <div className="stat">
              <strong>45+</strong>
              <span>Cities</span>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="https://images.pexels.com/photos/5658538/pexels-photo-5658538.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Woman driver smiling"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
