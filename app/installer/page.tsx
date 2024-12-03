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

const FindInstaller = () => {
  // State for query parameters
  const [queryParams, setQueryParams] = useState({
    location: '',
    role: '',
    keyword: '',
  });

  // Fetch data with useGetReq
  const { data: products, isLoading: loading } = useGetReq(
    `/technician?location=${queryParams.location}&role=${queryParams.role}&keyword=${queryParams.keyword}`
  );

  // Formik configuration
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      location: '',
      role: '',
      projectDetails: '',
      keyword: '',
    },
    validationSchema: Yup.object({
      name: Yup.string(),
      email: Yup.string().email('Invalid email format'),
      location: Yup.string(),
      role: Yup.string(),
      projectDetails: Yup.string(),
    }),
    onSubmit: (values) => {
      // Update query parameters to trigger fetch
      setQueryParams({
        location: values.location || '',
        role: values.role || '',
        keyword: values.keyword || '',
      });
    },
  });

  return (
    <PublicLayout>
      <section>
        <div className='h-[120px] bg-black'></div>
        <div className='container mx-auto py-16 px-6 sm:px-12 lg:px-24'>
          <h1 className='text-[30px] sm:text-[40px] md:text-[50px] mb-8 leading-[50px] sm:leading-[60px] md:leading-[80px]'>
            Connect with a Technician
          </h1>

          {/* Form */}
          <form
            onSubmit={formik.handleSubmit}
            className='bg-white w-full p-6 shado border rounded mb-8 grid grid-cols-1 sm:grid-cols-3 items-end gap-6'
          >
            {/* <TextField label='Name' name='name' formik={formik} /> */}
            {/* <TextField label='Email' name='email' formik={formik} /> */}
            {/* <TextField label='Location' name='location' formik={formik} /> */}
            {/* <div className='flex items-end w-[90vw]'> */}
            <SelectField
              label='Technicians in your location'
              name='location'
              options={states}
              formik={formik}
            />
            {/* </div> */}
            {/* <div className='flex items-end'> */}
            <SelectField
              label='Role'
              name='role'
              options={[
                { label: '---Choose a role---', value: '' },
                { label: 'Installer', value: 'installer' },
                { label: 'Electrician', value: 'electrician' },
              ]}
              formik={formik}
            />
            {/* </div> */}
            {/* <TextField label='Search' name='keyword' formik={formik} /> */}
            {/* <div className='flex items-end'> */}
            <DashButton loading={loading} title='Search' />
            {/* </div> */}
          </form>

          {/* Installers List */}
          <h2 className='text-2xl font-semibold mb-4'>Available Installers</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {products?.data?.data?.length > 0 ? (
              products.data.data.map((installer: any) => (
                <Card key={installer.id} className='p-4 border rounded shadow'>
                  <h3 className='text-xl font-bold'>{installer.name}</h3>
                  <p>Location: {installer.location}</p>
                  <p>Role: {installer.role}</p>
                </Card>
              ))
            ) : (
              <p className='col-span-full text-center'>No installers found.</p>
            )}
          </div>
        </div>
      </section>
    </PublicLayout>
  );
};

export default FindInstaller;
