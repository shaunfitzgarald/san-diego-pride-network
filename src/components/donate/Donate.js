import React, { useState } from 'react';
import './Donate.css'; // Make sure to create and style this similarly to Checkout.css
import visaLogo from '../../assets/card-logos/visa.png';
import mastercardLogo from '../../assets/card-logos/mastercard.png';
import discoverLogo from '../../assets/card-logos/discover.png';
import amexLogo from '../../assets/card-logos/amex.png';

const Donate = () => {
  const [donationAmount, setDonationAmount] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAmountChange = (e) => {
    setDonationAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the donation here
    console.log(`Processing donation of $${donationAmount} from:`, formData);
    // After processing, you can redirect or display a thank you message
  };

  return (
    <div className="donation-container">
      <div className="donation-form">
        <h1>Support Our Cause</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
          />
          <input
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            placeholder="Card Number"
            required
          />
          <input
            type="text"
            name="expiryDate"
            value={formData.expiryDate}
            onChange={handleChange}
            placeholder="MM/YY"
            required
          />
          <input
            type="text"
            name="cvv"
            value={formData.cvv}
            onChange={handleChange}
            placeholder="CVV"
            required
          />
          <input
            type="number"
            name="amount"
            value={donationAmount}
            onChange={handleAmountChange}
            placeholder="Donation Amount"
            required
          />
          <div className="payment-logos">
            <img src={visaLogo} alt="Visa" />
            <img src={mastercardLogo} alt="Mastercard" />
            <img src={discoverLogo} alt="Discover" />
            <img src={amexLogo} alt="American Express" />
          </div>
          <button type="submit">Donate Now</button>
        </form>
      </div>
    </div>
  );
};

export default Donate;
