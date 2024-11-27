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
import { useFormik } from 'formik';
import { TextField } from '../molecules/textField';
import { DashButton } from '../molecules/dashButton';
import { TextArea } from '../molecules/textArea';
import { SelectField } from '../molecules/selectField';
import api from '@/rest/Auth/axios';
import { toast } from 'react-toastify';
import { useState } from 'react';

export default function AddProductModal({
  openProd,
  setOpenProd,
}: {
  openProd: boolean;
  setOpenProd: any;
}) {
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: '',
      price: '',
      description: '',
      colour: '',
      imageUrl: '',
    },
    onSubmit: async (values, { resetForm }) => {
      console.log(values);
      try {
        setLoading(true);
        const res = await api.post('/product', values);
        toast.success(res?.data?.message);
        // console.log(res);
        setOpenProd(false);
        resetForm();
      } catch (error: any) {
        toast.error(error?.response?.data?.message);
      } finally {
        setLoading(false);
      }
    },
  });
  return (
    <Dialog open={openProd} onOpenChange={setOpenProd}>
      <DialogContent className='sm:max-w-[425px] overflow-y-scroll max-h-[70vh]'>
        <DialogHeader>
          <DialogTitle>Add Product</DialogTitle>
          <DialogDescription className='hidden'></DialogDescription>
        </DialogHeader>
        <div className='w-full h-[.8px] my-1 bg-slate-200'></div>
        <form onSubmit={formik.handleSubmit}>
          <section className='flex flex-col gap-3'>
            <TextField label='Name' name='name' formik={formik} />
            <TextField label='Price' name='price' formik={formik} />
            <TextArea label='Description' name='description' formik={formik} />
            <SelectField
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
            <TextField label='Image Link' name='imageUrl' formik={formik} />
          </section>

          <DialogFooter className='mt-8'>
            {/* <BamButton title='Submit' loading={loading} /> */}
            {/* <Button loading={loading}>Add Product</Button> */}
            <DashButton loading={loading} title='Add Product' />
            {/* <DashButton title='Add Product' /> */}
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
