import React, { createContext, useState } from 'react';

export const ShoppingContext = createContext();

const ShoppingProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);

  return (
    <ShoppingContext.Provider value={{ cartItems, setCartItems, favoriteItems, setFavoriteItems }}>
      {children}
    </ShoppingContext.Provider>
  );
};

export default ShoppingProvider;
