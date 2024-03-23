// AdminPage.js
import React, { useState } from 'react';
import axios from 'axios';
import './AdminPage.css';

const AdminPage = () => {
  const [eventData, setEventData] = useState({
    name: '',
    date: '',
    startTime: '',
    endTime: '',
    location: '',
    address: '',
    description: '',
    organizer: '',
    contact: '',
    price: '',
    tags: [],
    // ... other fields
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/events', eventData);
      console.log(response.data);
      alert('Event added successfully!');
      // Reset form or further actions
    } catch (error) {
      console.error('There was an error adding the event:', error);
      alert('Error adding event.');
    }
  };

  return (
    <div className="admin-event-form">
      <h1>Add New Event</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Event Name:
          <input
            type="text"
            name="name"
            value={eventData.name}
            onChange={handleChange}
            required
          />
        </label>
  
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={eventData.date}
            onChange={handleChange}
            required
          />
        </label>
  
        <label>
          Start Time:
          <input
            type="time"
            name="startTime"
            value={eventData.startTime}
            onChange={handleChange}
            required
          />
        </label>
  
        <label>
          End Time:
          <input
            type="time"
            name="endTime"
            value={eventData.endTime}
            onChange={handleChange}
            required
          />
        </label>
  
        <label>
          Location:
          <input
            type="text"
            name="location"
            value={eventData.location}
            onChange={handleChange}
            required
          />
        </label>
  
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={eventData.address}
            onChange={handleChange}
            required
          />
        </label>
  
        <label>
          Description:
          <textarea
            name="description"
            value={eventData.description}
            onChange={handleChange}
            required
          />
        </label>
  
        <label>
          Organizer:
          <input
            type="text"
            name="organizer"
            value={eventData.organizer}
            onChange={handleChange}
            required
          />
        </label>
  
        <label>
          Contact Email:
          <input
            type="email"
            name="contact"
            value={eventData.contact}
            onChange={handleChange}
            required
          />
        </label>
  
        {/* Assuming price is a simple value here, but if it's an object or array, you will need a different approach */}
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={eventData.price}
            onChange={handleChange}
            required
          />
        </label>
  
        {/* Similar sections would be needed for ticketTypes, sponsors, and reviews */}
        {/* You will need to handle these sections with dynamic form elements that can add/remove entries */}
  
        {/* Example for a simple tag input - for multiple tags you might want to implement a tag input component */}
        <label>
          Tags (comma-separated):
          <input
            type="text"
            name="tags"
            value={eventData.tags.join(",")}
            onChange={(e) => setEventData({ ...eventData, tags: e.target.value.split(",") })}
            required
          />
        </label>
  
        <label>
          Capacity:
          <input
            type="number"
            name="capacity"
            value={eventData.capacity}
            onChange={handleChange}
            required
          />
        </label>
  
        <label>
          Is Online:
          <select
            name="isOnline"
            value={eventData.isOnline}
            onChange={handleChange}
            required
          >
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </label>
  
        <label>
          Website:
          <input
            type="url"
            name="website"
            value={eventData.website}
            onChange={handleChange}
            required
          />
        </label>
        <label>
        Category:
        <input
          type="text"
          name="category"
          value={eventData.category}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Age Restriction:
        <input
          type="text"
          name="ageRestriction"
          value={eventData.ageRestriction}
          onChange={handleChange}
          required
        />
      </label>

      {/* This is a simplified version; you may want checkboxes for multiple options */}
      <label>
        Accessibility Options (comma-separated):
        <input
          type="text"
          name="accessibilityOptions"
          value={eventData.accessibilityOptions.join(",")}
          onChange={(e) => setEventData({ ...eventData, accessibilityOptions: e.target.value.split(",") })}
          required
        />
      </label>

      {/* For sponsors, you would likely want to allow multiple entries */}
      <label>
        Sponsors (comma-separated):
        <input
          type="text"
          name="sponsors"
          value={eventData.sponsors.join(",")}
          onChange={(e) => setEventData({ ...eventData, sponsors: e.target.value.split(",") })}
          required
        />
      </label>

      {/* Reviews would need a way to capture multiple values for each review */}
      {/* You'll need a more complex form setup to handle multiple reviews, possibly involving a sub-component */}
      <div className="reviews-section">
        <h3>Reviews</h3>
        {/* Map over reviews to create inputs for each one, this is a simplistic single review example */}
        {eventData.reviews.map((review, index) => (
          <div key={index}>
            <label>
              Reviewer:
              <input
                type="text"
                name="reviewer"
                value={review.reviewer}
                onChange={(e) => handleNestedChange(e, index, 'reviews')}
                required
              />
            </label>
            <label>
              Rating:
              <input
                type="number"
                name="rating"
                value={review.rating}
                onChange={(e) => handleNestedChange(e, index, 'reviews')}
                required
              />
            </label>
            <label>
              Comment:
              <textarea
                name="comment"
                value={review.comment}
                onChange={(e) => handleNestedChange(e, index, 'reviews')}
                required
              />
            </label>
            {/* Add button to remove review */}
          </div>
        ))}
        {/* Button to add a new review would go here */}
      </div>

      <button type="submit">Add Event</button>
    </form>
  </div>
);
};

export default AdminPage;
