import React from 'react';
import './NavBar.css'; // Your CSS file to style the navbar
import Logo from '../../assets/logo.png'; // Your logo image

const NavBar = () => {
  return (
    <header className="navbar">
      <div className="navbar__logo">
        <a href="/">
          <img src={Logo} alt="San Diego Pride Network Logo" />
        </a>
      </div>
      <nav className="navbar__navigation">
        <ul>
          <li><a href="/tickets">Tickets</a></li>
          <li><a href="/events">Events</a></li>
          <li><a href="/about">What We Do</a></li>
          <li><a href="/community">About</a></li>
          <li><a href="/involved">Get Involved</a></li>
        </ul>
      </nav>
      <div className="navbar__search-donate">
        <button className="search-button">
          <img src="path-to-search-icon.png" alt="Search" />
        </button>
        <button className="donate-button">
          Donate
        </button>
      </div>
    </header>
  );
};

export default NavBar;
