// ProductPage.tsx
'use client'; // Ensure this is at the top if you are using hooks

import React from 'react';
// import Nav from '../components/Nav';
import Image, { StaticImageData } from 'next/image';
// import { useRouter } from 'next/navigation';
// import { useCart } from '../components/CartContext'; // Ensure this is correctly imported
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import image4 from '../images/image4.jpg';
import image5 from '../images/image5.jpg';
import image6 from '../images/hero.jpg';
import image7 from '../images/hero2.jpg';
import image8 from '../images/hero3.jpg';
import image9 from '../images/hero4.jpg';
import image10 from '../images/hero5.jpg';
import image11 from '../images/consult.jpg';
import image12 from '../images/maintain.jpg';
// import Nav2 from '../components/Nav2';
// import Footer from '../components/Footer';
import Link from 'next/link';
import { useCart } from '@/rest/hooks/useCart';
// import vision from '../images/image4.jpg';

interface Product {
  id: number;
  name: string;
  price: number;
  image: StaticImageData;
}

const products: Product[] = [
  { id: 1, name: 'Solar Panel', price: 500, image: image1 },
  { id: 2, name: 'Battery Storage', price: 300, image: image2 },
  { id: 3, name: 'Inverter', price: 200, image: image3 },
  { id: 4, name: 'Inverter', price: 200, image: image4 },
  { id: 5, name: 'Inverter', price: 200, image: image5 },
  { id: 6, name: 'Inverter', price: 200, image: image6 },
  { id: 7, name: 'Inverter', price: 200, image: image7 },
  { id: 8, name: 'Inverter', price: 200, image: image8 },
  { id: 9, name: 'Inverter', price: 200, image: image9 },
  { id: 10, name: 'Inverter', price: 200, image: image10 },
  { id: 11, name: 'Inverter', price: 200, image: image11 },
  { id: 12, name: 'Inverter', price: 200, image: image12 },
];

const ProductPage: React.FC = () => {
  // const router = useRouter();
  const { addToCart } = useCart();

  // const viewCart = () => {
  //   router.push('/cart'); // Redirect to cart page
  // };

  return (
    <div className='containe mx-auto '>
      <div className='h-[120px] bg-black'></div>
      {/* <Nav cartCount={cart.length} textColor="black"/> Pass cart item count to Nav */}
      {/* <Nav2 /> */}
      <div className='text-center mt-[100px] px-20'>
        <h1 className='text-[55px] font-bold my-5'>Our Products</h1>
        <h2 className='text-[16px] '>
          Explore our range of high-quality solar products designed to help you harness the power of
          the sun. <br /> From efficient solar panels and inverters to complete solar power kits and
          storage batteries, <br /> we offer solutions tailored to residential, commercial, and
          industrial needs.
        </h2>
      </div>
      <div className='px-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-20'>
        {products.map((product) => (
          <div key={product.id} className=' rounded-lg  shadow-lg'>
            <Image
              src={product.image}
              alt={product.name}
              className='mb-4 w-full h-[300px] object-cover rounded-lg'
            />
            <div className='p-4'>
              <div className='flex justify-between items-center'>
                <h2 className='text-xl font-semibold mb-2'>{product.name}</h2>
                <p className='mb-2'>Price: ${product.price}</p>
              </div>
              <button
                className='bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-200 transition '
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className='text-center mt-10'>
        <Link href='/Cart'>
          <button
            className='bg-black text-white px-6 py-3 mt-4 rounded-md hover:bg-green-200 transition'
            // onClick={viewCart}
          >
            View Cart
          </button>
        </Link>
      </div>
      {/* <hr className='my-20' />
      <Footer /> */}
    </div>
  );
};

export default ProductPage;
