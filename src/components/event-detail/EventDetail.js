import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './EventDetail.css';

const EventDetail = () => {
  const { id } = useParams(); // Get the event ID from the URL
  const [event, setEvent] = useState(null);

  useEffect(() => {
    // Replace with actual data fetching logic
    fetch(`/api/events/${id}`)
      .then(response => response.json())
      .then(data => setEvent(data));
  }, [id]);

  if (!event) {
    return <div>Loading...</div>;
  }

  return (
    <div className="event-detail">
      <h1>{event.title}</h1>
      <img src={event.imageUrl} alt={event.title} />
      <p>{event.date}</p>
      <p>{event.location}</p>
      <p>{event.description}</p>
      {/* Include additional event details as needed */}
    </div>
  );
};

export default EventDetail;
