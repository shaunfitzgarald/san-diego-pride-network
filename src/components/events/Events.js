import React from 'react';
import mockEvents from '../mock-data/mockEvents'; // Ensure this is the correct path to your mockEvents data
import './Events.css'; // This will be your CSS file for styling the events page
import EventCard from '../featured-events/EventCard'; // Assuming you have an EventCard component

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
