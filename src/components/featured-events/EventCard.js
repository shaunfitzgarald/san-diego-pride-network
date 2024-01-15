import React from 'react';
import { Link } from 'react-router-dom';
import './EventCard.css'; // Assuming you have a CSS file for EventCard

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      {/* Wrap the content with Link to make the whole card clickable */}
      <Link to={`/events/${event.id}`} className="event-link">
        <img src={event.image} alt={event.name} className="event-image" />
        <div className="event-info">
          <h3>{event.name}</h3>
          <p className="event-date">{event.date}</p>
          <p className="event-location">{event.location}</p>
          {/* Additional details can be added here */}
        </div>
      </Link>
    </div>
  );
};

export default EventCard;
