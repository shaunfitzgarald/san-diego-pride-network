// Checkout.js
import React, { useState } from 'react';
import { useCart } from '../cart-context/CartContext';
import './Checkout.css'; // Your CSS file for styling
import visaLogo from '../../assets/card-logos/visa.png'; // Path to your Visa logo image
import mastercardLogo from '../../assets/card-logos/mastercard.png'; // Path to your Mastercard logo image
import discoverLogo from '../../assets/card-logos/discover.png'; // Path to your Discover logo image
import amexLogo from '../../assets/card-logos/amex.png';

// Optional: Import Stripe components if you're using Stripe for payment processing
// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const Checkout = () => {
  const { cart } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    cardNumber: '',
    expiryDate: '', // added field for card expiry date
    cvv: '', // added field for card cvv
    // ... other necessary fields
  });

  // Optional: Stripe hooks for payment processing
  // const stripe = useStripe();
  // const elements = useElements();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Process the checkout data here
    console.log('Processing payment for:', formData);

    // Optional: Stripe payment processing example
    // if (!stripe || !elements) {
    //   // Stripe.js has not yet loaded.
    //   return;
    // }
    // const cardElement = elements.getElement(CardElement);
    // const {error, paymentMethod} = await stripe.createPaymentMethod({
    //   type: 'card',
    //   card: cardElement,
    //   billing_details: {
    //     name: formData.name,
    //   },
    // });
    // if (error) {
    //   console.log('[error]', error);
    // } else {
    //   console.log('[PaymentMethod]', paymentMethod);
    //   // Process the payment on your server
    // }

    // Redirect to a success page or show a success message
  };

  const subtotal = cart.items.reduce((total, item) => total + item.price * item.quantity, 0);
  const taxRate = 0.08; // Example tax rate
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  return (
    <div className="checkout-container">
      <div className="checkout-form">
        <h1>Checkout</h1>
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
            type="text" 
            name="address" 
            value={formData.address} 
            onChange={handleChange} 
            placeholder="Shipping Address" 
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
          {/* Add other form fields as necessary */}
          <div className="payment-logos">
            <img src={visaLogo} alt="Visa" />
            <img src={mastercardLogo} alt="Mastercard" />
            <img src={discoverLogo} alt="Discover" />
            <img src={amexLogo} alt="American Express" />
          </div>
          <button type="submit">Place Order</button>
        </form>
      </div>
      <div className="cart-summary">
        <h2>Cart Summary</h2>
        <ul>
          {cart.items.map(item => (
            <li key={item.id}>
              {item.name} - {item.quantity} x ${item.price.toFixed(2)}
            </li>
          ))}
        </ul>
        <div className="totals">
          <div>Subtotal: ${subtotal.toFixed(2)}</div>
          <div>Tax: ${tax.toFixed(2)}</div>
          <div>Total: ${total.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
