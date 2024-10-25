'use client';

import { useCart } from '@/rest/hooks/useCart';
// import Link from 'next/link';
import { BsTrash2 } from 'react-icons/bs';
import Button from '../components/atoms/button';

export default function CartPage() {
  const { cart, removeFromCart, itemCount } = useCart();
  return (
    <div className='containe mx-auto '>
      <div className='h-[120px] bg-black'></div>

      <div className='max-w-md mt-[90px] mx-auto p-6 bg-white rounded-lg shadow'>
        <h2 className='text-lg font-semibold mb-4'>Cart summary</h2>

        {itemCount === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cart.map((item) => (
            <div key={item.id}>
              <div className='flex items-start py-4 border-b'>
                <div className='w-16 h-16 bg-gray-200 rounded-md mr-4'></div>
                <div className='flex-grow'>
                  <div className='flex justify-between items-start'>
                    <div>
                      <h3 className='font-medium'>{item.name}</h3>
                      <p className='text-gray-600'>Black</p>
                      <p className='text-gray-600'>Large</p>
                    </div>
                    <button
                      className='text-gray-400 hover:text-gray-600'
                      onClick={() => removeFromCart(item.id)}
                    >
                      <BsTrash2 size={20} />
                    </button>
                  </div>
                  <div className='flex justify-between items-center mt-2'>
                    <span className='font-medium'>$32.00</span>
                    <select className='border rounded px-2 py-1 w-16'>
                      <option>1</option>
                    </select>
                  </div>
                </div>
              </div>
              {/* <button onClick={() => removeFromCart(item.id)}>Remove</button> */}
            </div>
          ))
        )}

        {/* First Item */}
        {/* <div className='flex items-start py-4 border-b'>
          <div className='w-16 h-16 bg-gray-200 rounded-md mr-4'></div>
          <div className='flex-grow'>
            <div className='flex justify-between items-start'>
              <div>
                <h3 className='font-medium'>Basic Tee</h3>
                <p className='text-gray-600'>Black</p>
                <p className='text-gray-600'>Large</p>
              </div>
              <button className='text-gray-400 hover:text-gray-600'>
                <BsTrash2 size={20} />
              </button>
            </div>
            <div className='flex justify-between items-center mt-2'>
              <span className='font-medium'>$32.00</span>
              <select className='border rounded px-2 py-1 w-16'>
                <option>1</option>
              </select>
            </div>
          </div>
        </div> */}

        {/* Second Item */}
        {/* <div className='flex items-start py-4 border-b'>
          <div className='w-16 h-16 bg-amber-700 rounded-md mr-4'></div>
          <div className='flex-grow'>
            <div className='flex justify-between items-start'>
              <div>
                <h3 className='font-medium'>Basic Tee</h3>
                <p className='text-gray-600'>Sienna</p>
                <p className='text-gray-600'>Large</p>
              </div>
              <button className='text-gray-400 hover:text-gray-600'>
                <BsTrash2 size={20} />
              </button>
            </div>
            <div className='flex justify-between items-center mt-2'>
              <span className='font-medium'>$32.00</span>
              <select className='border rounded px-2 py-1 w-16'>
                <option>1</option>
              </select>
            </div>
          </div>
        </div> */}

        {/* Summary Section */}
        <div className='mt-6 space-y-3'>
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

        {/* Confirm Button */}
        {/* <button className='w-full mt-6 bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors'>
          Confirm order
        </button> */}

        <Button content='Confirm order' />
      </div>
    </div>
  );
}

// "use client";

// import React from 'react';
// import Nav from '../components/Nav';
// // import { useCart } from '../components/CartContext';
// import Image from 'next/image';

// const CartPage: React.FC = () => {
//   const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart(); // Use the context

//   const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0); // Calculate total
//   const totalItems = cart.reduce((total, item) => total + item.quantity, 0); // Calculate total items

//   return (
//     <div className="container mx-auto bg-gray-200">
//       <div className='bg-gray-800 px-5'>
//         <Nav cartCount={totalItems} />
//       </div>

//       <div className='text-center mt-[100px] px-20'>
//         <h1 className="text-3xl font-bold my-5">Your Cart</h1>
//         {cart.length === 0 ? (
//           <p className="text-lg">Your cart is empty.</p>
//         ) : (
//           <div>
//             {cart.map((item) => (
//               <div key={item.id} className="border rounded-lg bg-white shadow-lg p-4 mb-4 flex justify-between items-center">
//                 <div>
//                   <h2 className="text-xl font-semibold">{item.name}</h2>
//                   <p>Price: ${item.price}</p>
//                   <p>Quantity: {item.quantity}</p> {/* Display quantity */}
//                   <Image src={item.image.src} alt={item.name} className="w-full h-[200px] object-cover" width={100} height={100}/>
//                 </div>
//                 <div className="flex items-center">
//                   <button
//                     className="bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-400 transition"
//                     onClick={() => increaseQuantity(item.id)} // Increase quantity
//                   >
//                     +
//                   </button>
//                   <button
//                     className="bg-yellow-500 text-white px-2 py-1 mx-2 rounded-md hover:bg-yellow-400 transition"
//                     onClick={() => decreaseQuantity(item.id)} // Decrease quantity
//                   >
//                     -
//                   </button>
//                   <button
//                     className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-200 transition"
//                     onClick={() => removeFromCart(item.id)} // Remove item
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             ))}
//             <div className="mt-4 font-semibold text-xl">
//               Total: ${totalAmount} {/* Display total amount */}
//             </div>
//             <div className="mt-2 font-semibold text-lg">
//               Total Items: {totalItems} {/* Display total quantity of items */}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CartPage;
