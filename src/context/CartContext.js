// CartContext.js
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingProductIndex = prevCart.findIndex(p => p.id === product.id);
      if (existingProductIndex > -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex] = {
          ...updatedCart[existingProductIndex],
          quantity: updatedCart[existingProductIndex].quantity + product.quantity
        };
        return updatedCart;
      }
      return [...prevCart, product];
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(p => p.id !== productId));
  };

  const updateCartQuantity = (productId, quantity) => {
    setCart(prevCart => {
      const productIndex = prevCart.findIndex(p => p.id === productId);
      if (productIndex > -1) {
        const updatedCart = [...prevCart];
        updatedCart[productIndex] = {
          ...updatedCart[productIndex],
          quantity
        };
        return updatedCart;
      }
      return prevCart;
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateCartQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
