'use client';

import { createContext, useState, ReactNode, useEffect } from 'react';
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
  clearCart: () => void;
}

export const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  itemCount: 0,
  clearCart: () => {},
});

export default function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [itemCount, setItemCount] = useState(0);

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

  const clearCart = () => {
    setCart([]);
    setItemCount(0);
  };

  useEffect(() => {
    setItemCount(cart.length);
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, itemCount, clearCart }}>
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
