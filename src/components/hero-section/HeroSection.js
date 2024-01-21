import React from 'react';
import { Link } from 'react-router-dom';
import HeroShowPage from '../hero-show-page/HeroShowPage';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-section">
      {/* Image or Slider goes here */}
      <div className="hero-text">
        <h1>SD PRIDE 2024</h1>
        <p>July 13-21</p>
        <Link to="../hero-show-page/HeroShowPage.js"> 
          <button className="learn-more-button">Learn More</button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
