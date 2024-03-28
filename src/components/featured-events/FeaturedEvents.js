// FeaturedEvents.js
import React from 'react';
import './FeaturedEvents.css';
import EventCard from './EventCard';
import mockEvents from '../mock-data/mockEvents'; // Adjust the path to where your mockData.js file is located

const FeaturedEvents = () => {
  return (
    <div className="featured-events">
      <h2>FEATURED EVENTS</h2>
      <div className="event-list">
        {mockEvents.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedEvents;
