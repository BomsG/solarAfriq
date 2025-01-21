/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { SelectField } from '../components/molecules/selectField';
import { DashButton } from '../components/molecules/dashButton';
import { Card } from '@/components/ui/card';
import useGetReq from '@/rest/hooks/useGetRequest';
import { states } from '@/rest/mock/mockData';
import PublicLayout from '../components/layout/publicLayout';
import { TextField } from '../components/molecules/textField';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import api from '@/rest/Auth/axios';
import { toast } from 'react-toastify';

const FindInstaller = () => {
  const [openBooking, setOpenBooking] = useState(false);
  const [loadingBooking, setLoadingBooking] = useState(false);
  const [queryParams, setQueryParams] = useState({
    state: '',
    city: '',
    role: '',
    keyword: '',
    // search: false,
  });

  // Fetch data with useGetReq
  const { data: products, isLoading: loading } = useGetReq(
    `/technician?state=${queryParams.state}&city=${queryParams.city}&role=${queryParams.role}&keyword=${queryParams.keyword}`
  );

  console.log(products?.data);

  // Formik configuration
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      state: '',
      city: '',
      role: '',
      // projectDetails: '',
      keyword: '',
      // search: false,
    },
    validationSchema: Yup.object({
      name: Yup.string(),
      email: Yup.string().email('Invalid email format'),
      state: Yup.string(),
      city: Yup.string(),
      role: Yup.string(),
      // search: Yup.boolean(),
      // projectDetails: Yup.string(),
    }),
    onSubmit: (values) => {
      // Update query parameters to trigger fetch
      setQueryParams({
        state: values.state || '',
        city: values.city || '',
        role: values.role || '',
        keyword: values.keyword || '',
        // search: values.search || false,
      });
    },
  });

  const formikG = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        setLoadingBooking(true);
        const payload = {
          ...values,
          technicianId: products.data.data.userId,
        };
        const res = await api.patch('/techncian/booking', payload);

        toast.success(res?.data?.message);
        resetForm();
        setOpenBooking(false);
      } catch (err: any) {
        toast.error(err?.response?.data?.message);
      } finally {
        setLoadingBooking(false);
      }
    },
  });

  return (
    <PublicLayout>
      <section>
        <div className='h-[120px] bg-black'></div>
        <div className='container mx-auto py-16 px-6 sm:px-12 lg:px-24'>
          <h1 className='text-[30px] sm:text-[40px] md:text-[50px] mb-8 leading-[50px] sm:leading-[60px] md:leading-[80px]'>
            Find Technicians near you
          </h1>

          <form
            onSubmit={formik.handleSubmit}
            className='bg-white w-full p-6 shado border rounded mb-8 grid grid-cols-1 sm:grid-cols-3 items-end gap-6'
          >
            {/* <TextField label='Name' name='name' formik={formik} /> */}
            {/* <TextField label='Email' name='email' formik={formik} /> */}
            {/* <TextField label='Location' name='location' formik={formik} /> */}
            {/* <div className='flex items-end w-[90vw]'> */}
            {/* <TextField label='Your name' name='name' formik={formik} /> */}
            <SelectField label='Your state' name='state' options={states} formik={formik} />
            <TextField label='Your city' name='city' formik={formik} />
            <TextField label='Your address' name='keyword' formik={formik} />
            <SelectField
              label='Type of technician you are looking for'
              name='role'
              options={[
                { label: '---Choose a role---', value: '' },
                { label: 'Installer', value: 'installer' },
                { label: 'Electrician', value: 'electrician' },
              ]}
              formik={formik}
            />

            <DashButton
              loading={loading}
              title='Search'
              // onClick={() => setQueryParams({ ...queryParams, search: true })}
            />
          </form>

          {/* Installers List */}
          <h2 className='text-xl font-semibold mb-4'>Closest Technician to you</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {products?.data?.data?.length > 0 ? (
              products.data.data.map((installer: any) => (
                <Card key={installer.id} className='p-4 border rounded shadow'>
                  <h3 className='text-xl font-bold'>{installer.name}</h3>
                  <p>Location: {installer.location}</p>
                  <p className='mb-4'>Role: {installer.role}</p>
                  <DashButton
                    button='button'
                    title='Book technician'
                    onClick={() => setOpenBooking(true)}
                  />
                </Card>
              ))
            ) : (
              <p className='col-span-full text-center'>No technician around your location</p>
            )}
          </div>
        </div>
      </section>

      <Dialog open={openBooking} onOpenChange={setOpenBooking}>
        <DialogContent className='sm:max-w-[425px] overflow-y-scroll max-h-[70vh]'>
          <DialogHeader>
            <DialogTitle>Contact details</DialogTitle>
            <DialogDescription className='hidden'></DialogDescription>
          </DialogHeader>
          <div className='w-full h-[.8px] my-1 bg-slate-200'></div>
          <form onSubmit={formikG.handleSubmit}>
            <section className='flex flex-col gap-3'>
              <TextField label='Name' name='name' formik={formikG} />
              <TextField label='Email' name='email' formik={formikG} />
              <TextField label='Phone number' name='phone' formik={formikG} />
            </section>

            <DialogFooter className='mt-8'>
              <DashButton title='Book Technician' loading={loadingBooking} />
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </PublicLayout>
  );
};

export default FindInstaller;
