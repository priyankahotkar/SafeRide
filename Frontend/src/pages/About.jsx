import '../styles/Pages.css';

function About() {
  return (
    <main className="page about-page">
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About SafeRide</h1>
          <p className="lead">Revolutionizing women's safety in transportation</p>
        </div>
      </section>

      <section className="about-mission">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-item">
              <h3>Our Mission</h3>
              <p>
                To provide India's women with a safe, reliable, and empowering transportation
                solution through our all-women driver network, eliminating safety concerns
                and building confidence in every journey.
              </p>
            </div>
            <div className="mission-item">
              <h3>Our Vision</h3>
              <p>
                To become the most trusted women-centric ride-sharing platform in Asia,
                setting new standards for safety, empowerment, and community care.
              </p>
            </div>
            <div className="mission-item">
              <h3>Our Values</h3>
              <p>
                Safety first. Trust always. Empowerment everywhere. We believe in building
                a community of women supporting women, with transparency and integrity at
                the heart of everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-stats">
        <div className="container">
          <h2>By The Numbers</h2>
          <div className="stats-grid">
            <div className="stat-box">
              <h4>50,000+</h4>
              <p>Women Drivers Empowered</p>
            </div>
            <div className="stat-box">
              <h4>2M+</h4>
              <p>Safe Rides Completed</p>
            </div>
            <div className="stat-box">
              <h4>45+</h4>
              <p>Cities Covered</p>
            </div>
            <div className="stat-box">
              <h4>99.8%</h4>
              <p>Customer Safety Rating</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
