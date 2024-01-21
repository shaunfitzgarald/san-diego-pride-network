import React from 'react';
import { useCart } from '../cart-context/CartContext'; 
import { Link } from 'react-router-dom';
import './CartDropdown.css'; 

const CartDropdown = () => {
  const { cart } = useCart();

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cart.items.length > 0 ? (
          cart.items.map((item, index) => (
            <div key={index} className="cart-item">
              <span>{item.name}</span>
              <span>Qty: {item.quantity}</span>
              <span>${item.price}</span>
            </div>
          ))
        ) : (
          <span className="empty-message">Your cart is empty.</span>
        )}
      </div>
      <Link to="/cart" className="cart-dropdown-button">
        GO TO CART
      </Link>
    </div>
  );
};

export default CartDropdown;
