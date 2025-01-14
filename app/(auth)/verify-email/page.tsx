/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import { useState } from 'react';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import api from '@/rest/Auth/axios';
import PublicLayout from '@/app/components/layout/publicLayout';
import { TextField } from '@/app/components/molecules/textField';
import { DashButton } from '@/app/components/molecules/dashButton';
import { useRouter } from 'next/navigation';

const VerifyEmail: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      token: '',
    },
    enableReinitialize: true,
    onSubmit: async (values, { resetForm }) => {
      try {
        setLoading(true);
        const res = await api.post('/verify-email', values);

        toast.success(res?.data?.message);
        resetForm();
        router.push('/login');
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
                <div className='flex flex-col mb-4'>
                  <h2 className='font-bold text-lg'>Verify Email</h2>
                  <p className='text-sm'>Enter the code you received in your email</p>
                </div>
                <TextField label='Verification code' name='token' formik={formik} />
              </section>

              <DashButton loading={loading} title='Submit' />
            </form>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
};

export default VerifyEmail;
