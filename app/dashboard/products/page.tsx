'use client';

/* eslint-disable @typescript-eslint/no-explicit-any */

import useGetReq from '@/rest/hooks/useGetRequest';
import { DataTable } from '@/app/components/table/data-table';
import { allProductsCol } from '@/app/components/table/tableColumns';
import { Spinner } from '@/app/components/molecules/spinner';
import { useRouter } from 'next/navigation';
import { ChevronLeft, PlusCircle } from 'lucide-react';
import { useState } from 'react';
import AddProductModal from '@/app/components/organisms/addProductModal';

export default function Products() {
  const [openProd, setOpenProd] = useState(false);
  const router = useRouter();
  const { data: products, isLoading } = useGetReq(`/product`);
  const productsData = products?.data?.data?.map((pro: any) => ({
    id: pro._id,
    image: pro.imageUrl,
    name: pro.name,
    colour: pro.colour,
    price: pro.price,
  }));

  return (
    <div className='relative min-h-screen px-1 sm:px-10'>
      <main className='container py-6 mt-6 sm:mt-20'>
        <div className='mx-auto max-w-4xl'>
          <div className='w-full flex flex-col sm:flex-row flex-wrap gap-3'>
            <div className='w-full flex justify-between items-center gap-8 mb-8'>
              <h2 className='font-bold'>Products</h2>
              <div className='flex gap-4'>
                <button
                  className=' flex items-center text-[12px] bg-white p-2 rounded-md border border-gray-200 h-[32px] hover:bg-gray-100 hover:scale-105'
                  onClick={router.back}
                >
                  <ChevronLeft size={16} /> Go Back
                </button>
                <button
                  className=' flex items-center gap-2 font-bold text-[12px] bg-green-500 p-2 rounded-md  text-white  h-[32px] hover:bg-green-600'
                  onClick={() => setOpenProd(true)}
                >
                  <PlusCircle size={16} /> Add Product
                </button>
              </div>
            </div>
            {isLoading ? (
              <div className='absolute top-[10%] left-[45%] h-screen '>
                <Spinner size='10' color='pink' />
              </div>
            ) : (
              <DataTable columns={allProductsCol} data={productsData} />
            )}

            <AddProductModal openProd={openProd} setOpenProd={setOpenProd} />
          </div>
        </div>
      </main>
    </div>
  );
}
