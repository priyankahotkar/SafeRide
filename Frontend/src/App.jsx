import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Safety from './pages/Safety';
import HowToUse from './pages/HowToUse';
import Booking from './pages/Booking';
import Partners from './pages/Partners';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/how-it-works" element={<HowToUse />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
