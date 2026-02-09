import BookingInterface from '../components/BookingInterface';
import '../styles/Pages.css';

function Booking() {
  return (
    <main className="page booking-page">
      <div className="booking-header">
        <div className="booking-header-content">
          <h1>Book Your Safe Ride Now</h1>
          <p>Get from point A to point B with complete safety and peace of mind</p>
        </div>
      </div>
      <BookingInterface />
    </main>
  );
}

export default Booking;
