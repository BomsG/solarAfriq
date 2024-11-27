/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useFormik } from 'formik';
import { TextField } from '../molecules/textField';
import { DashButton } from '../molecules/dashButton';
import { TextArea } from '../molecules/textArea';
import api from '@/rest/Auth/axios';
import { toast } from 'react-toastify';
import { useState } from 'react';
import ImageUploadModal from '../molecules/imageUpload';
import { UploadCloud } from 'lucide-react';
import { MultiselectField } from '../molecules/multiselectField';
import useGetReq from '@/rest/hooks/useGetRequest';

export default function EditProductModal({
  openProd,
  setOpenProd,
  id,
}: {
  openProd: boolean;
  setOpenProd: any;
  id: string;
}) {
  const [showModal, setShowModal] = useState(false);
  const [showImage, setShowImage] = useState('');
  const [loading, setLoading] = useState(false);
  const { data: products } = useGetReq(`/product/${id}`);

  const prodv = products?.data?.data;
  const productsData = {
    id: prodv?._id,
    imageUrl: prodv?.imageUrl,
    name: prodv?.name,
    description: prodv?.description,
    colour: prodv?.colour,
    price: prodv?.price,
  };

  const formik = useFormik({
    initialValues: {
      name: productsData?.name || '',
      price: productsData?.price || '',
      description: productsData?.description || '',
      colour: productsData?.colour || '',
      imageUrl: productsData?.imageUrl || '',
    },
    enableReinitialize: true,
    onSubmit: async (values, { resetForm }) => {
      const payload = {
        ...values,
        imageUrl: !!showImage ? showImage : productsData.imageUrl,
      };
      try {
        setLoading(true);
        const res = await api.put(`/product/${id}`, payload);
        toast.success(res?.data?.message);
        setOpenProd(false);
        resetForm();
      } catch (error: any) {
        toast.error(error?.response?.data?.message);
      } finally {
        setLoading(false);
      }
    },
  });

  const handleImageUploadComplete = (url: string) => {
    setShowImage(url);
  };

  return (
    <Dialog open={openProd} onOpenChange={setOpenProd}>
      <DialogContent className='sm:max-w-[425px] overflow-y-scroll max-h-[70vh]'>
        <DialogHeader>
          <DialogTitle>Edit Product</DialogTitle>
          <DialogDescription className='hidden'></DialogDescription>
        </DialogHeader>
        <div className='w-full h-[.8px] my-1 bg-slate-200'></div>
        <form onSubmit={formik.handleSubmit}>
          <section className='flex flex-col gap-3'>
            <TextField label='Name' name='name' formik={formik} />
            <TextField label='Price' name='price' formik={formik} />
            <TextArea label='Description' name='description' formik={formik} />
            <MultiselectField
              label='Colour'
              name='colour'
              options={[
                { label: 'Gray', value: 'gray' },
                { label: 'Pink', value: 'pink' },
                { label: 'Black', value: 'black' },
                { label: 'Blue', value: 'blue' },
                { label: 'Green', value: 'green' },
              ]}
              formik={formik}
            />

            <div className=''>
              <label className='block mb-2 text-sm font-medium text-gray-900'>Image</label>
              <div className='flex justify-between'>
                <button
                  className='px-2 py-1 bg-blue-200 rounded-sm text-xs h-8 flex items-center gap-3'
                  onClick={() => setShowModal(true)}
                >
                  <UploadCloud size={14} /> {!!showImage ? 'Reupload Image' : 'Upload Image'}
                </button>
                {!!showImage ? (
                  <img src={showImage} className='w-8 h-8 rounded-sm' />
                ) : (
                  <img src={productsData?.imageUrl} className='w-8 h-8 rounded-sm' />
                )}
              </div>
            </div>

            <ImageUploadModal
              onUploadComplete={handleImageUploadComplete}
              showModal={showModal}
              setShowModal={setShowModal}
            />
          </section>

          <DialogFooter className='mt-8'>
            <DashButton loading={loading} title='Update Product' />
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
