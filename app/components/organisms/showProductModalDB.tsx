/* eslint-disable  @typescript-eslint/no-explicit-any */

'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Spinner } from '../molecules/spinner';
import { DataTable } from '../table/data-table';
import { singleOrderItemsCol } from '../table/tableColumns';
import readableDate from '@/rest/utils/readableDate';
import { useState } from 'react';
import { toast } from 'react-toastify';
import api from '@/rest/Auth/axios';

const statuses = [
  {
    label: 'Cancel',
    action: 'cancelled',
    bgColor: 'bg-red-500',
    hoverColor: 'hover:bg-red-600',
    ringColor: 'focus:ring-red-400',
  },
  {
    label: 'Pending',
    action: 'pending',
    bgColor: 'bg-yellow-500',
    hoverColor: 'hover:bg-yellow-600',
    ringColor: 'focus:ring-yellow-400',
  },
  {
    label: 'Contacted',
    action: 'contacted',
    bgColor: 'bg-blue-500',
    hoverColor: 'hover:bg-blue-600',
    ringColor: 'focus:ring-blue-400',
  },
  {
    label: 'Delivered',
    action: 'delivered',
    bgColor: 'bg-green-500',
    hoverColor: 'hover:bg-green-600',
    ringColor: 'focus:ring-green-400',
  },
];

const StatusButtons = ({
  orderId,
  refetch,
  setOpenProd,
}: {
  orderId: string;
  refetch: any;
  setOpenProd: any;
}) => {
  const [loading, setLoading] = useState(false);

  const handleClick = async (status: string) => {
    const payload = {
      status,
    };

    try {
      setLoading(true);
      const res = await api.put(`/order/${orderId}`, payload);
      toast.success(res?.data?.message);
      setOpenProd(false);
      refetch();
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex space-x-4'>
      {statuses.map((status) => {
        return (
          <button
            key={status.label}
            onClick={() => handleClick(status.action)}
            className={`px-4 py-2 text-white font-bold rounded focus:outline-none focus:ring-2 transition-opacity
              ${status.bgColor} ${status.ringColor}  ${status.hoverColor}`}
          >
            {loading ? 'Loading...' : status.label}
          </button>
        );
      })}
    </div>
  );
};

export default function ShowProductModalDB({
  openProd,
  setOpenProd,
  data: product,
  refetch,
}: {
  openProd: boolean;
  setOpenProd: (open: boolean) => void;
  data: any;
  refetch: any;
}) {
  const productClean = product?.data?.data?.items?.map((item: any) => ({
    id: item.productId,
    name: item.productName,
    qty: item.quantity,
    colour: item.colour.join(', '),
  }));

  const customer = {
    name: product?.data?.data?.customer?.name,
    email: product?.data?.data?.customer?.email,
    phone: product?.data?.data?.customer?.phone,
    address: product?.data?.data?.customer?.address,
  };

  // console.log(product?.data?.data?.status);

  return (
    <Dialog open={openProd} onOpenChange={setOpenProd}>
      <DialogContent className='relativ max-w[50rem] mx-auto rounded-lg p-2 sm:p-4'>
        <DialogHeader className='mb-1'>
          <DialogTitle className='text-base sm:text-lg font-bold text-left'>
            Update product status
          </DialogTitle>
        </DialogHeader>
        <DialogDescription className='hidden'>c</DialogDescription>

        {!product && (
          <div className='absolute top-[50%] left-[45%] h-screen '>
            <Spinner size='10' color='pink' />
          </div>
        )}

        <div className='flex flex-col sm:flex-row items-start justify-between mb-6'>
          <div className='space-y-1 mb-2 sm:mb-0'>
            <h3 className='text-md font-bold'>Customer:</h3>
            <p className='text-xs sm:text-sm'>
              Name: <span className='font-medium'>{customer?.name}</span>
            </p>
            <p className='text-xs sm:text-sm'>
              Email: <span className='font-medium'>{customer?.email}</span>
            </p>
            <p className='text-xs sm:text-sm'>
              Phone: <span className='font-medium'>{customer?.phone}</span>
            </p>
            <p className='text-xs sm:text-sm'>
              Address: <span className='font-medium'>{customer?.address}</span>
            </p>
          </div>

          <div className='space-y-1'>
            <h3 className='text-md font-bold'>Order:</h3>
            <p className='text-xs sm:text-sm'>
              Order ID: <span className='font-medium'>{product?.data?.data?._id}</span>
            </p>
            <p className='text-xs sm:text-sm'>
              Order total: <span className='font-medium'>₦{product?.data?.data?.total}</span>
            </p>
            <p className='text-xs sm:text-sm'>
              Order status: <span className='font-medium'>{product?.data?.data?.status}</span>
            </p>
            <p className='text-xs sm:text-sm'>
              Order created on:{' '}
              <span className='font-medium'>{readableDate(product?.data?.data?.createdAt)}</span>
            </p>
          </div>
        </div>

        <div className='overflow-x-auto'>
          {product && <DataTable columns={singleOrderItemsCol()} data={productClean} />}
        </div>

        <StatusButtons
          orderId={product?.data?.data?._id}
          refetch={refetch}
          setOpenProd={setOpenProd}
        />
      </DialogContent>
    </Dialog>
  );
}
