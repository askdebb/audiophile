'use client';

import React, { createContext, useState, useEffect } from 'react';

import { CartItem, CartContextType } from '@/interfaces/CartInterface';
import { CartContextProviderProps } from '@/interfaces/CartInterface';

export const CartContext = createContext<CartContextType | undefined>(
  undefined,
);

const CART_STORAGE_KEY = 'audiophile_cart';

const CartContextProvider: React.FC<CartContextProviderProps> = ({
  children,
}) => {
  // Initialize state with localStorage data or empty array
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    // This function runs only on the client side during initial render
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem(CART_STORAGE_KEY);

      return savedCart ? JSON.parse(savedCart) : [];
    }

    return [];
  });

  // Save to localStorage whenever cartItems changes
  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  const cartCount = cartItems.length;

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  const addToCart = (item: Omit<CartItem, 'quantity'>, quantity: number) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (cartItem) => cartItem.id === item.id,
      );

      let newItems;

      if (existingItem) {
        newItems = prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem,
        );
      } else {
        newItems = [...prevItems, { ...item, quantity }];
      }

      // For debugging
      console.log('Updated cart:', newItems);

      return newItems;
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);

      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, quantity } : item)),
    );
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem(CART_STORAGE_KEY);
  };

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  };

  const value: CartContextType = {
    cartItems,
    cartCount,
    totalQuantity,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
