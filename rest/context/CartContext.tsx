'use client';

import { createContext, useState, ReactNode } from 'react';
import { StaticImageData } from 'next/image';

export interface CartItem {
  id: number;
  name: string;
  image: StaticImageData;
  price: number;
  colour: string;
  quantity: number;
  total: number;
}

export interface CartContextType {
  cart: CartItem[] | [];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  itemCount: number;
}

export const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  itemCount: 0,
});

export default function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const isItemInCart = prevCart.some((cartItem) => cartItem.id === item.id);
      if (isItemInCart) {
        return prevCart;
      }
      return [...prevCart, item];
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const itemCount = cart.length;

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, itemCount }}>
      {children}
    </CartContext.Provider>
  );
}

// export const useCart = (): CartContextType => {
//     const context = useContext(CartContext);
//     if (!context) {
//         throw new Error('useCart must be used within a CartProvider');
//     }
//     return context;
// };

// export const useCart = () => useContext(CartContext);
