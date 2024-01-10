import React from 'react';
import './HeroSection.css'; // Make sure to create this CSS file

const HeroSection = () => {
  return (
    <div className="hero-section">
      {/* Image or Slider goes here */}
      <div className="hero-text">
        <h1>SD PRIDE 2024</h1>
        <p>July 13-21</p>
        <button>Learn More</button>
      </div>
    </div>
  );
};

export default HeroSection;
