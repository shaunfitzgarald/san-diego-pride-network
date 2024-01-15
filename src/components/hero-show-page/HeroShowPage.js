// HeroShowPage.js
import React from 'react';
import './HeroShowPage.css'; // Ensure the CSS file is in the same directory

const HeroShowPage = () => {
  return (
    <div className="hero-show-page">
      <div className="hero-show-content">
        <h1>Welcome to SD PRIDE 2024!</h1>
        <p>Experience the vibrancy and diversity of our community from July 13-21.</p>
        <p>Join us for a celebration of love, equality, and pride through a series of events including parades, concerts, and workshops. Don't miss out on this unforgettable experience!</p>
          <div className="button-container">
            <button className="button-learn-more">More About The Event</button>
            <button className="button-buy-tickets">Buy Tickets</button>
          </div>
      </div>
    </div>
  );
};

export default HeroShowPage;
