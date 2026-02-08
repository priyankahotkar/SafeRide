import '../styles/HowItWorks.css';

function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Book Your Ride',
      description: 'Choose from scooty, auto-rickshaw, or cab. Select solo or shared ride option based on your preference.',
      image: 'https://images.pexels.com/photos/4623069/pexels-photo-4623069.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      number: '02',
      title: 'Get Matched with Driver',
      description: 'Our system connects you with the nearest verified woman driver. View her profile, ratings, and estimated arrival time.',
      image: 'https://images.pexels.com/photos/3760373/pexels-photo-3760373.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      number: '03',
      title: 'Track & Travel Safely',
      description: 'Share your real-time location with contacts. Use in-app calling and emergency SOS if needed throughout your journey.',
      image: 'https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      number: '04',
      title: 'Pay & Review',
      description: 'See your fair fare breakdown. Get automatic refunds to your wallet if additional passengers join. Rate your experience.',
      image: 'https://images.pexels.com/photos/4968630/pexels-photo-4968630.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <section className="how-it-works" id="how-it-works">
      <div className="how-container">
        <div className="how-header">
          <h2>How It Works</h2>
          <p>Your safe journey in four simple steps</p>
        </div>
        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step">
              <div className="step-image">
                <img src={step.image} alt={step.title} />
                <span className="step-number">{step.number}</span>
              </div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
