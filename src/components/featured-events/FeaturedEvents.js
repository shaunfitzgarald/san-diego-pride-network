import React from 'react';
import './FeaturedEvents.css'; // Make sure to create this CSS file
import EventCard from './EventCard'; // You'll create this component separately

const events = [
  // Assuming you have an array of event data
];

const FeaturedEvents = () => {
  return (
    <div className="featured-events">
      <h2>FEATURED EVENTS</h2>
      <div className="event-list">
        {events.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedEvents;
