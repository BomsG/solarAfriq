// CartPage.tsx
"use client"; // Ensure this is at the top

import React from 'react';
import Nav from '../components/Nav';
import { useCart } from '../components/CartContext';

const CartPage: React.FC = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart(); // Use the context

  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0); // Calculate total
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0); // Calculate total items

  return (
    <div className="container mx-auto bg-gray-200">
      <div className='bg-gray-800 px-5'>
        <Nav cartCount={totalItems} />
      </div>

      <div className='text-center mt-[100px] px-20'>
        <h1 className="text-3xl font-bold my-5">Your Cart</h1>
        {cart.length === 0 ? (
          <p className="text-lg">Your cart is empty.</p>
        ) : (
          <div>
            {cart.map((item) => (
              <div key={item.id} className="border rounded-lg bg-white shadow-lg p-4 mb-4 flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p>Price: ${item.price}</p>
                  <p>Quantity: {item.quantity}</p> {/* Display quantity */}
                  <img src={item.image.src} alt={item.name} className="w-full h-[200px] object-cover" />
                </div>
                <div className="flex items-center">
                  <button
                    className="bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-400 transition"
                    onClick={() => increaseQuantity(item.id)} // Increase quantity
                  >
                    +
                  </button>
                  <button
                    className="bg-yellow-500 text-white px-2 py-1 mx-2 rounded-md hover:bg-yellow-400 transition"
                    onClick={() => decreaseQuantity(item.id)} // Decrease quantity
                  >
                    -
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-200 transition"
                    onClick={() => removeFromCart(item.id)} // Remove item
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div className="mt-4 font-semibold text-xl">
              Total: ${totalAmount} {/* Display total amount */}
            </div>
            <div className="mt-2 font-semibold text-lg">
              Total Items: {totalItems} {/* Display total quantity of items */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
