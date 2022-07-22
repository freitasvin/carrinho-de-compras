import React, { createContext, useState } from 'react';

export const ShoppingCartContext = createContext({});

export function ShoppingCartProvider({ children }) {
  const [cartItems, setCartItems] = useState([{}]);
  const [isOpen, setIsOpen] = useState(false);

  const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  function getItemQuantity(id) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }
  // Incrementar a quantidade do carrinho
  function increaseItemQuantity(id) {
    setCartItems((currItems) => {
      // Se não achar um id igual, irá adiciona-lo ao carrinho
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      }
      // Caso encrontre irá incrementar a quantidade
      // if else pois a função map irá realizar alguma operação em todos os objetos do array
      return currItems.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    });
  }
  function decreaseItemQuantity(id) {
    setCartItems((currItems) => {
      // Se achar um id igual e com a quantidade em 1, o item será removido
      if (currItems.find((item) => item.id === id && item.quantity === 1)) {
        return currItems.filter((item) => item.id !== id);
      }
      // Caso a não encontre ou a quantidade for diferente de 1
      // if else pois a função map irá realizar alguma operação em todos os objetos do array
      return currItems.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    });
  }
  function removeFromCart(id) {
    setCartItems((currItems) => currItems.filter((item) => item.id !== id));
  }

  return (
    <ShoppingCartContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        getItemQuantity,
        increaseItemQuantity,
        decreaseItemQuantity,
        removeFromCart,
        cartItems,
        cartQuantity,
        openCart,
        closeCart,
        isOpen,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
