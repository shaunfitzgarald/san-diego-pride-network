import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import { useLocation } from 'react-router-dom';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction'; // for clickable events
import mockEvents from '../mock-data/mockEvents'; 
import moment from 'moment';
import EventModal from '../event-modal/EventModal'
import './CalendarPage.css';

// Function to transform event data
const transformEventData = (events) => {
  return events.map(event => {
    // Assuming the date is in 'YYYY-MM-DD' format and times are in 'h:mm A' format
    const startDateTime = moment(`${event.date} ${event.startTime}`, 'YYYY-MM-DD h:mm A').toISOString();
    const endDateTime = moment(`${event.date} ${event.endTime}`, 'YYYY-MM-DD h:mm A').toISOString();

    return {
      id: event.id,
      title: event.name,
      start: startDateTime,
      end: endDateTime,
      extendedProps: {
        location: event.location,
        address: event.address,
        description: event.description,
        organizer: event.organizer,
        contact: event.contact,
        price: event.price,
        tags: event.tags,
        image: event.image,
        capacity: event.capacity,
        attendees: event.attendees,
        isOnline: event.isOnline,
        website: event.website,
        category: event.category,
        ageRestriction: event.ageRestriction,
        accessibilityOptions: event.accessibilityOptions,
        sponsors: event.sponsors,
        reviews: event.reviews
      }
    };
  });
};

const CalendarPage = () => {
  const location = useLocation();
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [calendarDate, setCalendarDate] = useState();
  const calendarEvents = transformEventData(mockEvents);

  useEffect(() => {
    // Extract the date from the URL parameters and use it to set the calendar date
    const searchParams = new URLSearchParams(location.search);
    const date = searchParams.get('date');
    if (date) {
      setCalendarDate(moment(date, 'YYYY-MM-DD').format('YYYY-MM-DD'));
    }
  }, [location.search]);

  const handleEventClick = (clickInfo) => {
    setSelectedEvent(clickInfo.event);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="calendar-page-wrapper">
      <div className="calendar-page">
        <div className="calendar-banner">CALENDAR</div>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          initialDate={calendarDate}
          events={calendarEvents}
          eventClick={handleEventClick}
        />
        {modalOpen && <EventModal event={selectedEvent} onClose={handleCloseModal} />}
      </div>
    </div>
  );
};

export default CalendarPage;