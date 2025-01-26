'use client';

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import useGetReq from '@/rest/hooks/useGetRequest';
import { DataTable } from '@/app/components/table/data-table';
import { allOrdersCol } from '@/app/components/table/tableColumns';
// import { useRouter } from 'next/navigation';
// import { ChevronLeft } from 'lucide-react';
import { useState } from 'react';
import readableDate from '@/rest/utils/readableDate';
import { formatCurrency } from '@/rest/utils/formatCurrency';
import ShowProductModalDBUserOnly from '@/app/components/organisms/showProductModalDBUserOnly';

export default function Orders() {
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const [orderId, setOrderId] = useState('');
  const [openModal, setOpenModal] = useState<boolean>(false);
  // const router = useRouter();
  const { data: orders, isLoading, refetch } = useGetReq(`/order?pageNumber=${pageNumber}`);
  const { data: mol } = useGetReq(`/order/${orderId}`);
  const orderMeta = orders?.data?.meta;
  const ordersData = orders?.data?.data?.map((pro: any) => ({
    id: pro._id,
    orderId: pro.orderId,
    paymentRef: pro.paymentRef,
    name: pro.customer.name,
    items: pro.items?.length,
    status: pro.status,
    total: formatCurrency(pro.total),
    createdAt: readableDate(pro.createdAt),
  }));

  // console.log(orders?.data?.meta);

  const handleModal = (id: string) => {
    // console.log(id);
    setOpenModal(true);
    setOrderId(id);
  };

  return (
    <main className='w-full sm:min-w-[80px] flex flex-col sm:flex-row flex-wrap gap-3'>
      <div className='mx-auto max-w-4xl'>
        <div className='w-full flex flex-col sm:flex-row flex-wrap gap-3'>
          <div className='w-full flex justify-between items-center gap-8 mb-2'>
            <h2 className='font-bold'>Orders</h2>
            <div className='flex gap-4'>
              {/* <button
                className=' flex items-center text-[12px] bg-white p-2 rounded-md border border-gray-200 h-[32px] hover:bg-gray-100 hover:scale-105'
                onClick={router.back}
              >
                <ChevronLeft size={16} /> Go Back
              </button> */}
            </div>
          </div>

          {!ordersData ? (
            <div>You do not have any order yet</div>
          ) : (
            <DataTable
              columns={allOrdersCol(handleModal)}
              data={ordersData}
              isLoading={isLoading}
              pagination={{
                total: orderMeta?.totalItems,
                current: pageNumber,
                pageSize: pageSize,
                onChange: (page, size) => {
                  setPageNumber(page);
                  setPageSize(size);
                },
              }}
            />
          )}

          <ShowProductModalDBUserOnly
            openProd={openModal}
            setOpenProd={setOpenModal}
            data={mol}
            // refetch={refetch}
          />
        </div>
      </div>
    </main>
  );
}
