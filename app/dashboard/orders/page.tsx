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
import readableDate from '@/rest/utils/readableDate';
import { formatCurrency } from '@/rest/utils/formatCurrency';
import ShowProductModalDB from '@/app/components/organisms/showProductModalDB';

export default function Orders() {
  const [orderId, setOrderId] = useState('');
  const [openModal, setOpenModal] = useState<boolean>(false);
  const router = useRouter();
  const { data: orders, isLoading, refetch } = useGetReq(`/order`);
  const { data: mol } = useGetReq(`/order/${orderId}`);
  const ordersData = orders?.data?.data?.map((pro: any) => ({
    id: pro._id,
    name: pro.customer.name,
    // email: pro.customer.email,
    phone: pro.customer.phone,
    items: pro.items?.length,
    status: pro.status,
    total: formatCurrency(pro.total),
    createdAt: readableDate(pro.createdAt),
  }));

  const handleModal = (id: string) => {
    // console.log(id);
    setOpenModal(true);
    setOrderId(id);
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
              </div>
            </div>
            {isLoading ? (
              <div className='absolute top-[10%] left-[45%] h-screen '>
                <Spinner size='10' color='pink' />
              </div>
            ) : (
              <DataTable columns={allOrdersCol(handleModal)} data={ordersData} />
            )}

            <ShowProductModalDB
              openProd={openModal}
              setOpenProd={setOpenModal}
              data={mol}
              refetch={refetch}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
