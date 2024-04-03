// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // Make sure to create this CSS file

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className='footer-links'>
            <Link to="/">Home</Link> {' | '}
            <Link to="/about">About</Link> {' | '}
            <Link to="/get-involved">Get Involved</Link>
        </div>
        <p>This website serves as a portfolio piece, illustrating my web development skills and creative capacity. It is intended for demonstration purposes only. Please enjoy your exploration!</p>
        <p>&copy; {new Date().getFullYear()} @shaunfitzgarald. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
