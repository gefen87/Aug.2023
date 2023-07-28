import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Head from './components/Head';
import Nav from './components/Nav';
import Main from './components/Main';
import Aside1 from './components/Aside1';
import Aside2 from './components/Aside2';
import Aside3 from './components/Aside3';
import Footer from './components/Footer';
import ConfirmedBooking from './components/ConfirmedBooking'; // Import the ConfirmedBooking component

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
          <Route path="/" element={<Main />} />
          <Route path="/aside1" element={<Aside1 />} />
          <Route path="/aside2" element={<Aside2 />} />
          <Route path="/aside3" element={<Aside3 />} />
          {/* Add a route for the ConfirmedBooking component */}
          <Route path="/confirmation" element={<ConfirmedBooking />} />
        </Routes>
        <div className='aside'>
          <h1>This Weeks Specials!</h1>
          <button>Online Menu</button>
          <div className='part'
            style={{
              display: "flex",
              width: "200px",
              height: "100px",
              margin: "12rem",
              gap: "5rem",
              position: "relative",
              left: "50%"
            }}>
            <Aside1 />
            <Aside2 />
            <Aside3 />
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
