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
    </div>
  );
};

export default HomePage;
