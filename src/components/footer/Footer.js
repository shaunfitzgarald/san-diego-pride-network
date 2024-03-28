// Footer.js
import React from 'react';
import './Footer.css'; // Make sure to create this CSS file

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p>This website serves as a portfolio piece, illustrating my web development skills and creative capacity. It is intended for demonstration purposes only. Please enjoy your exploration!</p>
        <p>&copy; {new Date().getFullYear()} @shaunfitzgarald. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
