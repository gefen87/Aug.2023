import React from 'react';
import food from './food.png';

const Main = () => {
  const handleNavigate = () => {
    window.location.href = './components/BookingPage';
  };

  return (
    <main className="main-main">
      <div className='content'>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <button onClick={handleNavigate}>Reserve a Table</button>
      </div>
      <div className='food'>
        <img src={food} alt="food" width={306} height={364}/>
      </div>
    </main>
  );
};

export default Main;
