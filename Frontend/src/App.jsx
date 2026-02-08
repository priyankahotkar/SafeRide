import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import VehicleOptions from './components/VehicleOptions';
import BookingInterface from './components/BookingInterface';
import EmergencySOS from './components/EmergencySOS';
import Partners from './components/Partners';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <VehicleOptions />
      <BookingInterface />
      <EmergencySOS />
      <Partners />
      <Footer />
    </div>
  );
}

export default App;
