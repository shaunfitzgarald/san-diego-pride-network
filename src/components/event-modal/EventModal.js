// EventModal.js
import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment'; // Make sure to import moment
import './EventModal.css';

const EventModal = ({ event, onClose }) => {
    if (!event) return null;

    // Format dates using moment.js
    const startDate = moment(event.start).format('LLLL');
    const endDate = event.end ? moment(event.end).format('LLLL') : '';

    return (
        <div className="modal-backdrop">
            <div className="modal">
                <h2>{event.title}</h2>
                <p>{event.extendedProps.description}</p>

                <div className="event-details">
                    <p>Date: {startDate}</p>
                    <p>Start Time: {moment(event.start).format('LT')}</p>
                    {event.end && <p>End Time: {moment(event.end).format('LT')}</p>}
                    {event.extendedProps.price && <p>Price: {event.extendedProps.price}</p>}
                    {event.extendedProps.ageRestriction && <p>Age Restriction: {event.extendedProps.ageRestriction}</p>}
                </div>

                <div className="modal-actions">
                    <Link to={`/events/${event.id}`} className="button view-details-button">
                        View Details
                    </Link>
                    <Link to={`/tickets?event=${event.id}`} className="button buy-tickets-button">
                        Buy Tickets
                    </Link>
                </div>
                <button onClick={onClose} className="button close-button">Close</button>
            </div>
        </div>
    );
};

export default EventModal;
