export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image?: string;
  slug?: string;
}

export interface CartContextType {
  cartItems: CartItem[];
  cartCount: number;
  totalQuantity: number;
  addToCart: (item: Omit<CartItem, 'quantity'>, quantity: number) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
}

export interface CartContextProviderProps {
  children: React.ReactNode;
}
