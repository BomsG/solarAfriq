/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PublicLayout from '../components/layout/publicLayout';
import useGetReq from '@/rest/hooks/useGetRequest';
import { DashButton } from '../components/molecules/dashButton';
import ProductSkeleton from '../components/organisms/productSkeleton';
import ShowProductModal from '../components/organisms/showProductModal';

// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   image: StaticImageData;
// }

const ProductPage: React.FC = () => {
  const [openProd, setOpenProd] = useState(false);
  const [mol, setMol] = useState<any>({});

  const { data: products } = useGetReq(`/product`);
  const productsData = products?.data?.data?.map((pro: any) => ({
    id: pro._id,
    image: pro.imageUrl,
    name: pro.name,
    description: pro.description,
    colour: pro.colour?.map((col: { label: string }) => col.label)?.join(', '),
    price: pro.price,
  }));

  return (
    <PublicLayout>
      <div className='containe mx-auto '>
        <div className='h-[120px] bg-black'></div>

        <div className='text-center mt-[100px] px-5 md:px-20'>
          <h1 className='text-[35px] md:text-[55px] font-bold my-5'>Our Products</h1>
          <h2 className='text-[16px] '>
            Explore our range of high-quality solar products designed to help you harness the power
            of the sun. <br className='hidden md:block' /> From efficient solar panels and inverters
            to complete solar power kits and storage batteries, <br className='hidden md:block' />{' '}
            we offer solutions tailored to residential, commercial, and industrial needs.
          </h2>
        </div>
        {!productsData ? (
          <ProductSkeleton arrayNumber={8} />
        ) : (
          <div className='px-5 mx-auto max-w-7xl md:px-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-20'>
            {productsData?.map((product: any) => (
              <div key={product.id} className=' rounded-md border overflow-hidden  '>
                <Image
                  src={product.image}
                  alt={product.name}
                  className='mb- w-full h-[200px] object-cover '
                  width={300}
                  height={300}
                />
                <div className='p-4'>
                  <div className='flex flex-col justify-betwee tems-center mb-2'>
                    <h2 className='text-md font-bold mb-1'>
                      {product.name.length > 28
                        ? product.name?.slice(0, 28) + ' ' + '...'
                        : product.name}
                    </h2>
                    <p className='mb-2 text-sm font-medium text-gray-600'>
                      Price: ₦{product.price}
                    </p>
                  </div>

                  <DashButton
                    title='View Product'
                    onClick={() => {
                      setOpenProd(true);
                      setMol(product);
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        <ShowProductModal openProd={openProd} setOpenProd={setOpenProd} data={mol} />

        <div className='text-center mt-10'>
          <Link href='/cart'>
            <button
              className='bg-black text-white px-6 py-3 mt-4 rounded-md hover:bg-green-200 transition'
              // onClick={viewCart}
            >
              View Cart
            </button>
          </Link>
        </div>
      </div>
    </PublicLayout>
  );
};

export default ProductPage;
