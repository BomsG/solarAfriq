'use client';

import { useState } from 'react';
import { useCart } from '@/rest/hooks/useCart';
import { FaTrashAlt } from 'react-icons/fa';
import Image from 'next/image';
import PublicLayout from '../components/layout/publicLayout';
import { DashButton } from '../components/molecules/dashButton';
import { CartItem } from '@/rest/context/CartContext';

export default function CartPage() {
  const { cart, removeFromCart, itemCount } = useCart();

  const [quantities, setQuantities] = useState<Record<number, number>>(
    cart.reduce((acc: Record<number, number>, item: CartItem) => {
      acc[item.id] = item.quantity ?? 1;
      return acc;
    }, {})
  );

  const handleQuantityChange = (id: number, newQuantity: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: newQuantity,
    }));
  };

  const handleConfirmOrder = () => {
    const cartDetails = cart.map((item) => {
      const quantity = quantities[item.id] ?? 1;
      const price = parseFloat(item.price.toString()) || 0;

      return {
        id: item.id,
        name: item.name,
        price,
        quantity,
        total: price * quantity,
      };
    });
    console.log(cartDetails);
  };

  return (
    <PublicLayout>
      <div className='container mx-auto'>
        <div className='h-[120px] bg-black'></div>

        <div className='max-w-lg mt-[90px] mx-auto p-6 bg-white border rounded-lg shadow'>
          <h2 className='text-lg font-semibold mb-4'>Cart summary</h2>

          {itemCount === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cart.map((item: CartItem) => (
              <div key={item.id}>
                <div className='flex items-start py-4 border-b'>
                  <div className='w-[60px] h-[60px] overflow-hidden rounded-md mr-4'>
                    <Image src={item.image} alt='img' width={60} height={60} />
                  </div>
                  <div className='flex-grow'>
                    <div className='flex justify-between items-start'>
                      <div>
                        <h3 className='font-medium w-[80%]'>{item.name}</h3>
                        <p className='text-gray-600'>{item.colour}</p>
                      </div>
                      <button
                        className='text-gray-400 hover:text-gray-600'
                        onClick={() => removeFromCart(item.id)}
                      >
                        <FaTrashAlt size={20} />
                      </button>
                    </div>
                    <div className='flex justify-between items-center mt-2'>
                      <span className='font-medium'>₦{item.price}</span>
                      <select
                        className='border rounded px-2 py-1 w-16'
                        value={quantities[item.id]}
                        onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                      >
                        {[1, 2, 3, 4, 5].map((value) => (
                          <option key={value} value={value}>
                            {value}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}

          <div className='my-6 space-y-3'>
            <div className='flex justify-between'>
              <span className='text-gray-600'>Subtotal</span>
              <span className='font-medium'>$64.00</span>
            </div>
            <div className='flex justify-between'>
              <span className='text-gray-600'>Shipping</span>
              <span className='font-medium'>$5.00</span>
            </div>
            <div className='flex justify-between'>
              <span className='text-gray-600'>Taxes</span>
              <span className='font-medium'>$5.52</span>
            </div>
            <div className='flex justify-between pt-3 border-t'>
              <span className='font-semibold'>Total</span>
              <span className='font-semibold'>$75.52</span>
            </div>
          </div>

          <DashButton title='Confirm order' onClick={handleConfirmOrder} />
        </div>
      </div>
    </PublicLayout>
  );
}
