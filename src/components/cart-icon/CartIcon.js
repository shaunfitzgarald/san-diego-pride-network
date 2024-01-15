import React from 'react';
import { useCart } from '../cart-context/CartContext'; 

const CartIcon = () => {
  const { cart } = useCart();

  // Calculate the number of items in the cart
  const itemCount = cart.items.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="cart-icon">
      <span className="icon">🛒</span>
      {itemCount > 0 && (
        <span className="item-count">{itemCount}</span>
      )}
    </div>
  );
};

export default CartIcon;
