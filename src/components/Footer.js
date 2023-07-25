import React  from 'react';
import logo from './lemon-logo.png';
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-column">
                <img src={logo} alt="logo"/>
            </div>
            <div className="footer-column">
                <h2>Doormat Navigation</h2>
                <ul>
                    <li><a href="url">Home</a></li>
                    <li><a href="url">About</a></li>
                    <li><a href="url">Menu</a></li>
                    <li><a href="url">Reservations</a></li>
                    <li><a href="url">Order Online</a></li>
                    <li><a href="url">Login</a></li>
                </ul>
            </div>
            <div className="footer-column">
                <h2>Contact</h2>
                <ul>
                    <li><a href="url">Address</a></li>
                    <li><a href="url">Phone Number</a></li>
                    <li><a href="url">e-Mail</a></li>
                </ul>
            </div>
            <div className="footer-column">
                <h2>Social Media Links</h2>
                <ul>
                    <li><a href="url">Facebook</a></li>
                    <li><a href="url">TikTook</a></li>
                    <li><a href="url">Instegram</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;