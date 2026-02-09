import Hero from '../components/Hero';
import Safety from './Safety';
import HowToUse from './HowToUse';
import Booking from './Booking';
import Partners from './Partners';
import '../styles/Pages.css';

function Home() {
  return (
    <main className="page home-page">
      <Hero />
      <HowToUse />
      <Safety />
      <Booking />
      <Partners />
    </main>
  );
}

export default Home;
