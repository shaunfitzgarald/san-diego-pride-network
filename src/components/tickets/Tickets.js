import React, { useState } from 'react';
import { useCart } from '../cart-context/CartContext'; 
import mockEvents from '../mock-data/mockEvents';
import Footer from '../footer/Footer';
import './Tickets.css';

const Tickets = () => {
  const { addItemToCart } = useCart(); 
  const [selectedEvent, setSelectedEvent] = useState(mockEvents[0].id);
  const [selectedTicketType, setSelectedTicketType] = useState(mockEvents[0].ticketTypes[0].type);
  const [quantity, setQuantity] = useState(1);

  const handleEventChange = (event) => {
    const eventId = event.target.value;
    setSelectedEvent(eventId);

    const newSelectedEventObj = mockEvents.find(e => e.id === eventId);
    if (newSelectedEventObj && newSelectedEventObj.ticketTypes.length > 0) {
      const defaultTicketType = newSelectedEventObj.ticketTypes[0].type;
      setSelectedTicketType(defaultTicketType);
    } else {
      setSelectedTicketType('');
    }
  };

  const handleTicketTypeChange = (event) => {
    setSelectedTicketType(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const eventObj = mockEvents.find(e => e.id === selectedEvent);
  
    // Finds the selected ticket object. Ensures it exists before proceeding.
    const ticketObj = eventObj?.ticketTypes.find(ticket => ticket.type === selectedTicketType);
  
    if (!ticketObj) {
      console.error('Selected ticket type not found');
      return; // Optionally, you can display a user-friendly error message here
    }
  
    // Handles price, whether it's 'Free' or a numerical value
    let price = ticketObj.price;
    if (typeof price === 'string' && price.toLowerCase() === 'free') {
      price = 0;
    }
  
    const itemToAdd = {
      id: selectedEvent + ticketObj.type,
      name: `${eventObj.name} - ${ticketObj.type}`,
      price: price,
      quantity: parseInt(quantity),
    };
  
    addItemToCart(itemToAdd);
  
    // Alert to confirm additions to the cart
    alert(`Added to cart: ${quantity} x ${ticketObj.type} for ${eventObj.name} at ${price === 0 ? 'Free' : '$' + price} each.`);
  };
  

  const selectedEventObj = mockEvents.find(event => event.id === selectedEvent);

  return (
    <div className="tickets-container">
      <div className="tickets-banner">TICKETS</div>
        <div className="tickets-page">
          <h1>Buy Tickets</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="event-select">Choose an event:</label>
              <select id="event-select" value={selectedEvent} onChange={handleEventChange}>
                {mockEvents.map(event => (
                  <option key={event.id} value={event.id}>
                    {event.name} - {event.date}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group radio-labels">
              {selectedEventObj && selectedEventObj.ticketTypes.map(ticketType => (
                <label key={ticketType.type} className="ticket-type-label">
                  <input
                    type="radio"
                    name="ticketType"
                    value={ticketType.type}
                    checked={selectedTicketType === ticketType.type}
                    onChange={handleTicketTypeChange}
                  />
                  {ticketType.type} - ${ticketType.price}
                </label>
              ))}
            </div>

            <div className="form-group">
              <label htmlFor="quantity">Quantity:</label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={quantity}
                onChange={handleQuantityChange}
                min="1"
                required
              />
            </div>

            <div className="form-group">
              <button type="submit">Add to Cart</button>
            </div>
          </form>
        </div>
        <Footer />
    </div>
  );
};

export default Tickets;
