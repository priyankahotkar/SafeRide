import '../styles/Partners.css';

function Partners() {
  const partners = [
    {
      name: 'Retail Chain A',
      logo: '🏪',
      description: 'Premium retail stores'
    },
    {
      name: 'Electronics Hub',
      logo: '💻',
      description: 'Tech & gadgets'
    },
    {
      name: 'Fashion Outlet',
      logo: '👗',
      description: 'Clothing & accessories'
    },
    {
      name: 'Grocery Mart',
      logo: '🛒',
      description: 'Daily essentials'
    }
  ];

  return (
    <section className="partners" id="partners">
      <div className="partners-container">
        <div className="partners-content">
          <div className="partners-text">
            <h2>Partner With Us</h2>
            <p className="partners-lead">
              Join India's fastest-growing women-centric mobility network
            </p>
            <p className="partners-description">
              We're partnering with retailers across India to install our hardware infrastructure.
              Get your brand in front of millions of empowered women users while supporting a
              safer transportation ecosystem.
            </p>

            <div className="partner-benefits">
              <div className="benefit">
                <span className="benefit-icon">📈</span>
                <div>
                  <h4>Brand Visibility</h4>
                  <p>Featured placement in our app reaching millions of users monthly</p>
                </div>
              </div>
              <div className="benefit">
                <span className="benefit-icon">🤝</span>
                <div>
                  <h4>Social Impact</h4>
                  <p>Be part of a mission to make travel safer for women across India</p>
                </div>
              </div>
              <div className="benefit">
                <span className="benefit-icon">💼</span>
                <div>
                  <h4>Business Growth</h4>
                  <p>Increased foot traffic and customer engagement at your locations</p>
                </div>
              </div>
            </div>

            <button className="btn-partner">Become a Partner</button>
          </div>

          <div className="partners-showcase">
            <h3>Our Trusted Partners</h3>
            <div className="partners-grid">
              {partners.map((partner, index) => (
                <div key={index} className="partner-card">
                  <div className="partner-logo">{partner.logo}</div>
                  <h4>{partner.name}</h4>
                  <p>{partner.description}</p>
                </div>
              ))}
            </div>
            <p className="join-text">Join 500+ retail partners across India</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partners;
