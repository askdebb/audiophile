'use client';

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

import { CartStore, CartItem } from '@/types';

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      carts: [],

      addProduct: (cart: CartItem) => {
        set((state) => {
          const existingIndex = state.carts.findIndex((i) => i.id === cart.id);

          if (existingIndex !== -1) {
            // Update existing item
            const newCarts = [...state.carts];

            newCarts[existingIndex] = {
              ...newCarts[existingIndex],
              quantity: newCarts[existingIndex].quantity + cart.quantity,
            };

            return { carts: newCarts };
          } else {
            // Add new item
            return { carts: [...state.carts, cart] };
          }
        });
      },

      removeProduct: (id: string) => {
        set((state) => ({
          carts: state.carts.filter((i) => i.id !== id),
        }));
      },

      updateQuantity: (id: string, quantity: number) => {
        if (quantity <= 0) {
          get().removeProduct(id);

          return;
        }

        set((state) => ({
          carts: state.carts.map((i) => (i.id === id ? { ...i, quantity } : i)),
        }));
      },

      increaseQty: (id: string) => {
        set((state) => ({
          carts: state.carts.map((i) =>
            i.id === id ? { ...i, quantity: i.quantity + 1 } : i,
          ),
        }));
      },

      decreaseQty: (id: string) => {
        set((state) => {
          const newCarts = state.carts
            .map((i) => (i.id === id ? { ...i, quantity: i.quantity - 1 } : i))
            .filter((i) => i.quantity > 0);

          return { carts: newCarts };
        });
      },

      clearCart: () => {
        set({ carts: [] });
      },

      // Total quantity of all items (what you currently have)
      getItemCount: () => {
        return get().carts.reduce((sum, item) => sum + item.quantity, 0);
      },

      // NEW: Number of unique items (what you want for the cart icon)
      getUniqueItemCount: () => {
        return get().carts.length;
      },

      // Changed from getter to function to work with persist
      getTotal: () => {
        return get().carts.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0,
        );
      },
    }),
    {
      name: 'cart-store',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
