import { SVGProps } from 'react';

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type CartItem = {
  id: string;
  image: string;
  slug: string;
  name: string;
  price: number;
  quantity: number;
};

export type CartStore = {
  carts: CartItem[];
  addProduct: (cart: CartItem) => void;
  removeProduct: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  increaseQty: (id: string) => void;
  decreaseQty: (id: string) => void;
  clearCart: () => void;
  getItemCount: () => number;
  getUniqueItemCount: () => number;
  getTotal: () => number;
};
