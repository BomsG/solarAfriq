/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import PublicLayout from '../components/layout/publicLayout';
import { useState } from 'react';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import api from '@/rest/Auth/axios';
import { TextField } from '../components/molecules/textField';
import { DashButton } from '../components/molecules/dashButton';
import { SelectField } from '../components/molecules/selectField';
import { states } from '@/rest/mock/mockData';
import { PhoneNumberField } from '../components/molecules/phoneNumberField';

const Technician: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      location: 'abia',
      role: 'installer',
    },
    onSubmit: async (values, { resetForm }) => {
      //   console.log(values);
      //   toast.success('clicked for fun');
      try {
        setLoading(true);
        const res = await api.post('/technician', values);
        toast.success(res?.data?.message);
        // console.log(res);
        resetForm();
      } catch (error: any) {
        toast.error(error?.response?.data?.message);
      } finally {
        setLoading(false);
      }
    },
  });
  return (
    <PublicLayout>
      <section>
        <div className='h-[120px] bg-black'></div>
        <div className='container mx-auto py-16 px-6 sm:px-12 lg:px-24 '>
          <div className='mx-auto max-w-xl border p-8 rounded-lg'>
            <form onSubmit={formik.handleSubmit}>
              <section className='flex flex-col gap-3 mb-8'>
                <TextField label='Name' name='name' formik={formik} />
                <TextField label='Email' name='email' formik={formik} />
                <PhoneNumberField label='Phone number' name='phone' formik={formik} />
                <SelectField label='Location' name='location' options={states} formik={formik} />
                <SelectField
                  label='Role'
                  name='role'
                  options={[
                    { label: 'Installer', value: 'installer' },
                    { label: 'Electrician', value: 'electrician' },
                  ]}
                  formik={formik}
                />
              </section>

              <DashButton loading={loading} title='Submit' />
            </form>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
};

export default Technician;