'use client';

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import useGetReq from '@/rest/hooks/useGetRequest';
import { DataTable } from '@/app/components/table/data-table';
import { allOrdersCol } from '@/app/components/table/tableColumns';
import { Spinner } from '@/app/components/molecules/spinner';
import { useRouter } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';
import { useState } from 'react';
// import AddProductModal from '@/app/components/organisms/addProductModal';
// import EditProductModal from '@/app/components/organisms/editProductModal';
// import DeleteProductModal from '@/app/components/organisms/deleteProductModal';
import readableDate from '@/rest/utils/readableDate';

export default function Orders() {
  // const [openProd, setOpenProd] = useState(false);
  // const [openEditProd, setOpenEditProd] = useState(false);
  // const [openDeleteProd, setOpenDeleteProd] = useState(false);
  // const [showId, setShowId] = useState('');
  // const [showName, setShowName] = useState('');
  const router = useRouter();
  const { data: orders, isLoading } = useGetReq(`/order`);
  const ordersData = orders?.data?.data?.map((pro: any) => ({
    id: pro._id,
    name: pro.customer.name,
    email: pro.customer.email,
    address: pro.customer.address,
    items: pro.items?.length,
    status: pro.status,
    createdAt: readableDate(pro.createdAt),
  }));

  const handleEdit = (id: string) => {
    // setOpenEditProd(true);
    console.log('here');
    // setShowId(id);
  };
  const handleDelete = (id: string, name: string) => {
    // setOpenDeleteProd(true);
    // setShowId(id);
    // setShowName(name);

    console.log('here');
  };

  return (
    <div className='relative min-h-screen px-1 sm:px-10'>
      <main className='container py-6 mt-6 sm:mt-20'>
        <div className='mx-auto max-w-4xl'>
          <div className='w-full flex flex-col sm:flex-row flex-wrap gap-3'>
            <div className='w-full flex justify-between items-center gap-8 mb-8'>
              <h2 className='font-bold'>Orders</h2>
              <div className='flex gap-4'>
                <button
                  className=' flex items-center text-[12px] bg-white p-2 rounded-md border border-gray-200 h-[32px] hover:bg-gray-100 hover:scale-105'
                  onClick={router.back}
                >
                  <ChevronLeft size={16} /> Go Back
                </button>
                {/* <button
                  className=' flex items-center gap-2 font-bold text-[12px] bg-green-500 p-2 rounded-md  text-white  h-[32px] hover:bg-green-600'
                  onClick={() => setOpenProd(true)}
                >
                  <PlusCircle size={16} /> Add Product
                </button> */}
              </div>
            </div>
            {isLoading ? (
              <div className='absolute top-[10%] left-[45%] h-screen '>
                <Spinner size='10' color='pink' />
              </div>
            ) : (
              <DataTable columns={allOrdersCol(handleEdit, handleDelete)} data={ordersData} />
            )}

            {/* <AddProductModal openProd={openProd} setOpenProd={setOpenProd} />
            <EditProductModal openProd={openEditProd} setOpenProd={setOpenEditProd} id={showId} />
            <DeleteProductModal
              openProd={openDeleteProd}
              setOpenProd={setOpenDeleteProd}
              id={showId}
              name={showName}
            /> */}
          </div>
        </div>
      </main>
    </div>
  );
}
