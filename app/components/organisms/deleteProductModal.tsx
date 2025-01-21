/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  // DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { DashButton } from '../molecules/dashButton';
import api from '@/rest/Auth/axios';
import { toast } from 'react-toastify';
import { useState } from 'react';

export default function DeleteProductModal({
  openProd,
  setOpenProd,
  id,
  name,
  refetch,
}: {
  openProd: boolean;
  setOpenProd: any;
  id: string;
  name: string;
  refetch?: any;
}) {
  const [loading, setLoading] = useState(false);

  const handleDelete = async (id: string) => {
    try {
      setLoading(true);
      const res = await api.delete(`/product/${id}`);
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
    <Dialog open={openProd} onOpenChange={setOpenProd}>
      <DialogContent className='sm:max-w-[425px] overflow-y-scroll max-h-[70vh]'>
        <DialogHeader>
          <DialogTitle>Delete Product</DialogTitle>
          <DialogDescription className='hidden'></DialogDescription>
        </DialogHeader>
        <div className='w-full h-[.8px] my-1 bg-slate-200'></div>
        <section className='flex flex-col'>
          <h4>Are you sure you want to delete this product?</h4> <br />
          <p className='text-red-300 font-bold'>{name}</p>
        </section>

        <DialogFooter className='mt-8'>
          <DashButton
            loading={loading}
            deleteBtn={true}
            title='Delete Product'
            onClick={() => handleDelete(id)}
          />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
