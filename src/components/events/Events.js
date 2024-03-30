import React from 'react';
import mockEvents from '../mock-data/mockEvents'; 
import Footer from '../footer/Footer'
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
      <Footer />
    </div>
  );
};

export default Events;
