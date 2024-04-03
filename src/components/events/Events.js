import React from 'react';
import mockEvents from '../mock-data/mockEvents'; 
import './Events.css'; 
import EventCard from '../featured-events/EventCard'; 

const Events = () => {
  return (
    <div className="events-page">
      <div className="events-banner">EVENTS</div>
      <div className="events-container">
        {mockEvents.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Events;
