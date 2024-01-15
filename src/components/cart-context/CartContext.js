import React, { createContext, useContext, useReducer } from 'react';

// Create a context for the cart
export const CartContext = createContext();

// Action types for the reducer
const ADD_ITEM = 'ADD_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';

// Cart reducer to update state
const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_ITEM:
      // Add item to cart. Could also implement a check to combine items with the same ID
      return { ...state, items: [...state.items, action.payload] };
    case REMOVE_ITEM:
      // Remove item from cart by filtering it out based on ID
      return { ...state, items: state.items.filter(item => item.id !== action.payload.id) };
    default:
      return state;
  }
};

// CartProvider component that wraps the app and provides cart state
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  // Function to add items to the cart
  const addItemToCart = item => {
    dispatch({ type: ADD_ITEM, payload: item });
  };

  // Function to remove items from the cart
  const removeItemFromCart = itemId => {
    dispatch({ type: REMOVE_ITEM, payload: { id: itemId } });
  };

  return (
    <CartContext.Provider value={{ cart: state, addItemToCart, removeItemFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use cart context
export const useCart = () => useContext(CartContext);
