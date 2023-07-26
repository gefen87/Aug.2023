import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Head from './components/Head';
import Nav from './components/Nav.js';
import Main from './components/Main.js';
import Aside1 from './components/Aside1';
import Aside2 from './components/Aside2';
import Aside3 from './components/Aside3';
import Footer from './components/Footer';

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
        <div>
          <Route exact path="/" component={Main} />
        </div>
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
            }}
          >
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