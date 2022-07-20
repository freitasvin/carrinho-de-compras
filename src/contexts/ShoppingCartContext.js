import React, { createContext, useState } from 'react';

export const ShoppingCartContext = createContext({});

export function ShoppingCartProvider({ children }) {
  const [cartItem, setCartItem] = useState([]);
  return (
    <ShoppingCartContext.Provider value={{}}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
