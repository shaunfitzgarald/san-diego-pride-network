import React from 'react';
import './CallToAction.css'; // Ensure this CSS file is in the same directory as your component

const CallToAction = () => {
  return (
    <div className="call-to-action">
      <h2>Join the Movement</h2>
      <p>Be a part of our journey towards equality and inclusion.</p>
      <button onClick={() => window.location = '/about'}>Learn More</button>
    </div>
  );
};

export default CallToAction;
