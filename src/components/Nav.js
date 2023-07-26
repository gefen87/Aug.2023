import React from 'react';
import { Link } from 'react-router-dom';
import logo from './lemon-logo.png';

const Nav = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li><img src={logo} alt="logo" /></li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="./components/BookingPage">Reservations</Link></li>
        <li><Link to="/order-online">Order Online</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
