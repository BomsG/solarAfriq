/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import { useState, useEffect } from 'react';
import { useCart } from '@/rest/hooks/useCart';
import { FaTrashAlt } from 'react-icons/fa';
import Image from 'next/image';
import PublicLayout from '../components/layout/publicLayout';
import { DashButton } from '../components/molecules/dashButton';
import { CartItem } from '@/rest/context/CartContext';
import api from '@/rest/Auth/axios';
import { toast } from 'react-toastify';
// import { useFormik } from 'formik';
// import { TextField } from '../components/molecules/textField';
// import { PhoneNumberField } from '../components/molecules/phoneNumberField';
import { useRouter } from 'next/navigation';
// import * as Yup from 'yup';
import { useAuthContext } from '@/rest/context/auth';

export default function CartPage() {
  const [loading, setLoading] = useState(false);
  const [subTotal, setSubTotal] = useState(0);
  // const [openContact, setOpenContact] = useState(false);
  // const [cartContent, setCartContent] = useState({});
  const { cart, removeFromCart, itemCount, clearCart } = useCart();
  const { user } = useAuthContext();
  const router = useRouter();

  const [quantities, setQuantities] = useState<Record<number, number>>(
    cart.reduce((acc: Record<number, number>, item: CartItem) => {
      acc[item.id] = item.quantity ?? 1;
      return acc;
    }, {})
  );

  const [selectedColours, setSelectedColours] = useState<Record<number, string>>(
    cart.reduce((acc: Record<number, string>, item: CartItem) => {
      const colours = item.colour?.split(',').map((colour) => colour.trim()) || [];
      acc[item.id] = colours[0] || '';
      return acc;
    }, {})
  );

  const calculateSubTotal = () => {
    const total = cart.reduce((sum, item) => {
      const quantity = quantities[item.id] ?? 1;
      const price = parseFloat(item.price.toString().replace(/,/g, '')) || 0;

      // console.log(price);
      return sum + price * quantity;
    }, 0);
    setSubTotal(total);
  };

  useEffect(() => {
    calculateSubTotal();
  }, [quantities, cart]);

  const handleQuantityChange = (id: number, newQuantity: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: newQuantity,
    }));
  };

  const handleColourChange = (id: number, newColour: string) => {
    setSelectedColours((prev) => ({
      ...prev,
      [id]: newColour,
    }));
  };

  const handleConfirmOrder = async () => {
    if (!user) {
      return toast.error('You need to be logged in to initiate an order', { autoClose: 5000 });
    }
    // setOpenContact(true);
    const cartDetails = cart.map((item) => {
      const quantity = quantities[item.id] ?? 1;
      // const price = parseFloat(item.price.toString()) || 0;
      const colour = selectedColours[item.id].toLowerCase() ?? '';

      return {
        productId: item.id,
        productName: item.name,
        quantity,
        colour,
      };
    });

    try {
      setLoading(true);
      const res = await api.post('/order', {
        // customer: values,
        items: cartDetails,
        callback_url: `${window?.location.origin}/products`,
      });

      toast.success('Please wait! You are being redirected to paystack', { autoClose: 4000 });
      router.push(res?.data?.authorization_url);

      clearCart();
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }

    // setCartContent(cartDetails);
  };

  // const formik = useFormik({
  //   initialValues: {
  //     name: '',
  //     email: '',
  //     phone: '',
  //     address: '',
  //   },
  //   validationSchema: Yup.object({
  //     name: Yup.string().required('Your name is required'),
  //     email: Yup.string().email('Invalid email format').required('Your email is required'),
  //     phone: Yup.string()
  //       .matches(/^[0-9]+$/, 'Must be only digits')
  //       .min(11, 'Must be exactly 11 digits')
  //       .max(11, 'Must be exactly 11 digits')
  //       .required('Your phone number is required'),
  //     address: Yup.string().required('Your address is required'),
  //   }),
  //   enableReinitialize: true,
  //   onSubmit: async (values, { resetForm }) => {
  //     try {
  //       setLoading(true);
  //       const res = await api.post('/order', {
  //         // customer: values,
  //         items: cartContent,
  //         callback_url: window?.location?.href,
  //       });
  //       toast.success(res?.data?.message);
  //       resetForm();
  //       router.push('/products');
  //       clearCart();
  //     } catch (error: any) {
  //       toast.error(error?.response?.data?.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   },
  // });

  return (
    <PublicLayout>
      <div className='containe mx-auto'>
        <div className='h-[120px] bg-black'></div>

        {/* {!openContact && ( */}
        <div className='max-w-lg mt-[90px] mx-auto p-6 bg-white border rounded-lg shadow'>
          <div className='flex justify-between items-center'>
            <h2 className='text-lg font-semibold mb-4'>Cart summary</h2>
            <div
              className='text-sm text-blue-300 cursor-pointer'
              onClick={() => {
                clearCart();
                router.push('/products');
              }}
            >
              clear cart
            </div>
          </div>

          {itemCount === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cart.map((item: CartItem) => {
              const colours = item.colour?.split(',').map((colour) => colour.trim()) || [];

              return (
                <div key={item.id}>
                  <div className='flex items-start py-4 border-b'>
                    <div className='w-[60px] h-[60px] overflow-hidden rounded-md mr-4'>
                      <Image src={item.image} alt='img' width={60} height={60} />
                    </div>
                    <div className='flex-grow'>
                      <div className='flex justify-between items-start'>
                        <div>
                          <h3 className='font-medium w-[80%]'>{item.name}</h3>
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
                      <div className='flex justify-between items-center mt-2'>
                        <span className='text-gray-600'>Colour:</span>
                        <select
                          className='border rounded px-2 py-1 w-20'
                          value={selectedColours[item.id]}
                          onChange={(e) => handleColourChange(item.id, e.target.value)}
                        >
                          {colours.map((colour) => (
                            <option key={colour} value={colour}>
                              {colour}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}

          <div className='my-6 space-y-3'>
            <div className='flex justify-between'>
              <span className='text-gray-600'>Subtotal</span>
              <span className='font-medium'>₦{subTotal.toLocaleString()}</span>
            </div>
          </div>

          <DashButton title='Confirm order' onClick={handleConfirmOrder} loading={loading} />
        </div>
        {/* )} */}

        {/* {openContact && (
          <div className='max-w-lg mt-[90px] mx-auto p-6 bg-white border rounded-lg shadow'>
            <h2 className='text-lg font-semibold mb-4'>Enter your Details</h2>

            <form onSubmit={formik.handleSubmit}>
              <section className='flex flex-col gap-3 mb-8'>
                <TextField label='Name' name='name' formik={formik} />
                <TextField label='Email' name='email' formik={formik} />
                <TextField label='Phone number' name='phone' formik={formik} />
                <TextField label='Address' name='address' formik={formik} />
              </section>

              <DashButton loading={loading} title='Submit' />
            </form>
          </div>
        )} */}
      </div>
    </PublicLayout>
  );
}
