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
    price: '', // If price is a number, you might want to start with 0 or null
    tags: [], // Assuming tags are an array of strings
    ticketTypes: [{ type: '', price: 0 }], // Assuming this is an array of objects
    capacity: 0,
    attendees: 0,
    isOnline: false, // Assuming this is a boolean
    website: '',
    category: '',
    ageRestriction: '', // Assuming this is a string
    accessibilityOptions: [], // Assuming this is an array of strings
    sponsors: [], // Assuming this is an array of strings
    reviews: [{ reviewer: '', rating: 0, comment: '' }], // Assuming this is an array of objects
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  const handleNestedChange = (e, index, key) => {
    // Clone the relevant array from the state
    const updatedArray = [...eventData[key]];
  
    // If it's an object within the array (like the reviews), update the property
    if (typeof updatedArray[index] === 'object' && updatedArray[index] !== null) {
      updatedArray[index] = { ...updatedArray[index], [e.target.name]: e.target.value };
    } else {
      // If it's a simple array, just update the value at the index
      updatedArray[index] = e.target.value;
    }
  
    // Set the new state
    setEventData({ ...eventData, [key]: updatedArray });
  };

  const handleImageChange = (e) => {
    // Create a new FormData object and append the file
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('image', file, file.name);
      
      // Set the formData as part of the state if you're sending it directly,
      // or create a URL for preview if needed:
      // setEventData({ ...eventData, image: URL.createObjectURL(file) });
  
      // Alternatively, store the FormData object for submission:
      setEventData({ ...eventData, image: formData });
    }
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

  // Add a sponsor to the eventData
const addSponsor = () => {
  setEventData({ ...eventData, sponsors: [...eventData.sponsors, ''] });
};

// Remove a sponsor from the eventData
const removeSponsor = (index) => {
  const updatedSponsors = eventData.sponsors.filter((_, i) => i !== index);
  setEventData({ ...eventData, sponsors: updatedSponsors });
};

// Handle change for the sponsor input fields
const handleSponsorChange = (e, index) => {
  const updatedSponsors = eventData.sponsors.map((sponsor, i) => 
    i === index ? e.target.value : sponsor
  );
  setEventData({ ...eventData, sponsors: updatedSponsors });
};

// Add a review to the eventData
const addReview = () => {
  setEventData({
    ...eventData,
    reviews: [...eventData.reviews, { reviewer: '', rating: 0, comment: '' }]
  });
};

// Remove a review from the eventData
const removeReview = (index) => {
  const updatedReviews = eventData.reviews.filter((_, i) => i !== index);
  setEventData({ ...eventData, reviews: updatedReviews });
};

// Handle change for the review input fields
const handleReviewChange = (e, index, field) => {
  const updatedReviews = eventData.reviews.map((review, i) => {
    if (i === index) {
      return { ...review, [field]: field === 'rating' ? parseInt(e.target.value) : e.target.value };
    }
    return review;
  });
  setEventData({ ...eventData, reviews: updatedReviews });
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
          Event Image:
          <input
            type="file"
            name="image"
            onChange={handleImageChange} // You will need to create this function to handle file uploads
          />
        </label>

        {eventData.ticketTypes.map((ticketType, index) => (
        <div key={index}>
          <label>
            Ticket Type:
            <input
              type="text"
              name="type"
              value={ticketType.type}
              onChange={(e) => handleNestedChange(e, index, 'ticketTypes')}
              required
            />
          </label>
          <label>
            Price:
            <input
              type="number"
              name="price"
              value={ticketType.price}
              onChange={(e) => handleNestedChange(e, index, 'ticketTypes')}
              required
            />
          </label>
          {/* Include a button here to remove this ticketType */}
        </div>
      ))}
      {/* Include a button here to add a new ticketType */}
      

      <button type="submit">Add Event</button>
  
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

      {eventData.sponsors.map((sponsor, index) => (
        <div key={index} className="sponsor-input-group">
          <label>
            Sponsor:
            <input
              type="text"
              value={sponsor}
              onChange={(e) => handleSponsorChange(e, index)}
            />
          </label>
          <button type="button" onClick={() => removeSponsor(index)}>
            Remove Sponsor
          </button>
        </div>
      ))}
      <button type="button" onClick={addSponsor}>
        Add Sponsor
      </button>

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
