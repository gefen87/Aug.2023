import React  from 'react';
import food from './food.png';
const Main = () => {
    return (
        <main className="main-main">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>We are a family owned 
            Mediterranean restaurant, 
            focused on traditional recipes
            served with a modern twist.</p>
            <button>Reserve a Table</button>
            <img src={food} alt="food"/>
        </main>
    );
};

export default Main;