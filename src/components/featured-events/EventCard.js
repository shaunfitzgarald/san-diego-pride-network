import React from 'react';
import './EventCard.css'; // Make sure to create this CSS file

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <img src={event.imageUrl} alt={event.title} />
      <div className="event-info">
        <h3>{event.title}</h3>
        <p>{event.date}</p>
        {/* Add more event details */}
      </div>
    </div>
  );
};

export default EventCard;
