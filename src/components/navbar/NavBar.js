import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';
import mockEvents from '../mock-data/mockEvents'; 
import './NavBar.css';

const NavBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const handleInputChange = (event) => {
    const term = event.target.value.trim().toLowerCase();
    setSearchTerm(term);
  
    if (!term) {
      setSearchResults([]);
      return;
    }
  
    // Perform the search including the tags
    const results = mockEvents.filter(event =>
      event.name.toLowerCase().includes(term) ||
      event.description.toLowerCase().includes(term) ||
      event.tags.some(tag => tag.toLowerCase().includes(term))
    );
  
    setSearchResults(results);
  };
  
  // Toggle cart visibility
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
          <li><Link to="/calendar">Calendar</Link></li>
          <li><Link to="/what-we-do">What We Do</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/get-involved">Get Involved</Link></li>
        </ul>
      </nav>
      <div className="navbar__search-donate">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search events..."
            value={searchTerm}
            onChange={handleInputChange}
            className="search-input"
          />
          {searchTerm && (
            <ul className="search-results">
              {searchResults.map(event => (
                <li key={event.id}>
                  <Link to={`/events/${event.id}`} className="search-result-item">
                    {event.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
        
        <Link to="/donate" className="donate-button">
          Donate
        </Link>
        <div className="navbar__cart-icon" onClick={toggleCartVisibility}>
          <CartIcon />
          {isCartVisible && <CartDropdown />}
        </div>
      </div>
    </header>
  );
};

export default NavBar;
