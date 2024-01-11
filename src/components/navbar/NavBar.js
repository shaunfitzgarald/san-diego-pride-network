import React, { useState } from 'react';
import './NavBar.css'; 
import Logo from '../../assets/logo.png'; 
import { Link } from 'react-router-dom';
import CartIcon from '../cart-icon/CartIcon'; 
import CartDropdown from '../cart-dropdown/CartDropdown'; 

const NavBar = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
  };

  return (
    <header className="navbar">
      <div className="navbar__logo">
        <Link to="/">
          <img src={Logo} alt="San Diego Pride Network Logo" />
        </Link>
      </div>
      <nav className="navbar__navigation">
        <ul>
          <li><Link to="/tickets">Tickets</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/what-we-do">What We Do</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/get-involved">Get Involved</Link></li>
        </ul>
      </nav>
      <div className="navbar__search-donate">
        <button className="search-button">
          {/* Make sure to replace with your actual search icon */}
          <img src="path-to-search-icon.png" alt="Search" />
        </button>
        <button className="donate-button">
          Donate
        </button>
        {/* Cart Icon and Dropdown */}
        <div className="navbar__cart-icon" onClick={toggleCartVisibility}>
          <CartIcon />
          {isCartVisible && <CartDropdown />}
        </div>
      </div>
    </header>
  );
};

export default NavBar;
