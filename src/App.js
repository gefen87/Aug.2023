import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Head from './components/Head';
import Nav from './components/Nav';
import HomePage from './components/HomePage'; // Import the HomePage component
import Footer from './components/Footer';
import ConfirmedBooking from './components/ConfirmedBooking';
import BookingPage from './components/BookingPage';

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Head />
        </div>
        <div>
          <Nav />
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Use HomePage instead of Main */}
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/confirmation" element={<ConfirmedBooking />} />
        </Routes>
        <div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
