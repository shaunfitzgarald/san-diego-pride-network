import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'; 
import mockEvents from '../mock-data/mockEvents';
import './EventDetail.css';

const EventDetail = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [showTickets, setShowTickets] = useState(false); 
  const [showReviews, setShowReviews] = useState(false);

  useEffect(() => {
    const eventDetail = mockEvents.find(e => e.id === id);
    if (eventDetail) {
      setEvent(eventDetail);
    } else {
      console.error(`Event with id ${id} not found.`);
    }
  }, [id]);

  if (!event) {
    return <div>Loading...</div>;
  }

  return (
    <div className="event-detail">
      <h1>{event.name}</h1>
      <img src={event.image} alt={event.name} />
      <p>Date: {event.date}</p>
      <p>Start-time: {event.startTime} -- End-time: {event.endTime}</p>
      <p>Sponsors: </p>
      <p>Location: {event.location}</p>
      <ul>
        {event.sponsors.map((sponsor, index) => (
          <li key={index}>{sponsor}</li>
        ))}
      </ul>
      <p>{event.description}</p>
      <p>Pricing: {event.price}</p>
      <p>Ticket Types:</p>
      <button className="event-detail__button event-detail__button--view-tickets" onClick={() => setShowTickets(!showTickets)}>
        View tickets
      </button> {/* New button */}
      {showTickets && ( // Only show the ticket types if showTickets is true
        <ul>
          {event.ticketTypes.map((ticket, index) => (
            <li key={index}>
              {ticket.type}: ${ticket.price}
            </li>
          ))}
        </ul>
      )}
        <Link to={`/tickets?event=${event.id}`} className="event-detail__button event-detail__button--tickets">
          Buy Tickets
        </Link>
      <p>Number of attendees: {event.attendees}</p>
      <p>Capacity: {event.capacity}</p>
      <p>Age Restriction: {event.ageRestriction}</p>
      <button className="event-detail__button event-detail__button--see-reviews" onClick={() => setShowReviews(!showReviews)}>
        Click to see reviews
        </button>
      {showReviews && (
        <div>
          <h2>Reviews:</h2>
          {event.reviews.map(review => (
            <div key={review.reviewer}>
              <p>Reviewer: {review.reviewer}</p>
              <p>Rating: {review.rating}</p>
              <p>Comment: {review.comment}</p>
            </div>
          ))}
        </div>
      )}
      <p>Organizer: {event.organizer}</p>
      <p>Contact: {event.contact}</p>
      <p>Website: {event.website}</p>
      <p>Accessibility Options:</p>
      <ul>
        {event.accessibilityOptions.map(option => (
          <li>{option}</li>
        ))}
      </ul>
      <Link to={`/calendar?date=${event.date}`} className="event-detail__button event-detail__button--calendar">
        Go to Calendar
      </Link>
      {/* <div className="event-detail__actions">
        <Link to={`/events/${event.id}`} className="event-detail__button event-detail__button--details">
          View Details
        </Link>
      </div> */}

    </div>
  );
};

export default EventDetail;
