// CartPage.js
import React from 'react';
import { useCart } from '../cart-context/CartContext'; 
import './CartPage.css'; 

const CartPage = () => {
  const { cart, removeItemFromCart } = useCart();

  // Function to handle the removal of an item from the cart
  const handleRemoveItem = (itemId) => {
    removeItemFromCart(itemId);
  };

  // Calculate the total cost of the items in the cart
  const totalPrice = cart.items.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      {cart.items.length > 0 ? (
        <div>
          {cart.items.map((item, index) => (
            <div key={index} className="cart-item">
              <div>{item.name}</div>
              <div>Quantity: {item.quantity}</div>
              <div>Price: ${item.price}</div>
              <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
            </div>
          ))}
          <div className="cart-total">
            Total: ${totalPrice.toFixed(2)}
          </div>
          {/* Add Checkout Button Here */}
        </div>
      ) : (
        <div>Your cart is empty.</div>
      )}
    </div>
  );
};

export default CartPage;
