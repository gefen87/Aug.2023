// Inside HomePage.js
import React from 'react';
import Main from './Main';
import Aside1 from './Aside1';
import Aside2 from './Aside2';
import Aside3 from './Aside3';

const HomePage = () => {
  return (
    <div>
      <Main />
      <div className='aside'>
        <h1>This Weeks Specials!</h1>
        <button>Online Menu</button>
        <div className="part-container">
          <div className='part'>
            <Aside1 />
            <Aside2 />
            <Aside3 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
