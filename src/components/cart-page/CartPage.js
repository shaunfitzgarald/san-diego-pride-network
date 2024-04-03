import React from 'react';
import { useCart } from '../cart-context/CartContext'; 
import { useNavigate } from 'react-router-dom';
import './CartPage.css'; 

const CartPage = () => {
  const { cart, removeItemFromCart } = useCart();

  const navigate = useNavigate();
  // Function to handle the removal of an item from the cart
  const handleRemoveItem = (itemId) => {
    removeItemFromCart(itemId);
  };

    // Function to navigate to the checkout page
    const goToCheckout = () => {
        navigate('/checkout');
    };

  // Calculate the total cost of the items in the cart
  const totalPrice = cart.items.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className='cart-page'>
      <div className="cart-container">
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
              <button onClick={goToCheckout} className="checkout-button">
                  Proceed to Checkout
              </button>

          </div>
        ) : (
          <div>Your cart is empty.</div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
