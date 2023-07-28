import React from 'react';
import { useNavigate } from 'react-router-dom';
import food from './food.png';

const Main = () => {
  const navigate = useNavigate();

  const goToBookingPage = () => {
    navigate('/booking');
  };

  return (
    <main className="main-main">
      <div className='content'>
        <h1 id="restaurant-title">Little Lemon</h1>
        <h2 id="restaurant-location">Chicago</h2>
        <p id="restaurant-description">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <button onClick={goToBookingPage} aria-label="Book a Table at Little Lemon">Book a Table</button>
      </div>
      <div className='food'>
        <img src={food} alt="Delicious food served at Little Lemon restaurant" width={306} height={364} aria-labelledby="restaurant-title restaurant-description"/>
      </div>
    </main>
  );
};

export default Main;
