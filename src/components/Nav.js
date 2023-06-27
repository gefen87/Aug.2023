import React  from 'react';
import logo from './lemon-logo.png';
const Nav = () => {

    return (
        <nav className="main-nav">
        <ul>
            <li><img src={logo} alt="logo"/></li>
            <li><a href="url">Home</a></li>
            <li><a href="url">About</a></li>
            <li><a href="url">Menu</a></li>
            <li><a href="url">Reservations</a></li>
            <li><a href="url">Order Online</a></li>
            <li><a href="url">Login</a></li>
        </ul>
        </nav>
    );
};

export default Nav;