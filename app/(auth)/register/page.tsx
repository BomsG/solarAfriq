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
import Link from 'next/link';

const Register: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    enableReinitialize: true,
    onSubmit: async (values, { resetForm }) => {
      try {
        setLoading(true);
        const res = await api.post('/register', values);

        toast.success(res?.data?.message);
        resetForm();
        router.push('/verify-email');
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
                  <h2 className='font-bold text-lg'>Register</h2>
                  <p className='text-sm'>Enter your details to get started</p>
                </div>
                <TextField label='Email' name='email' formik={formik} />
                <TextField label='Password' name='password' type='password' formik={formik} />
              </section>

              <DashButton loading={loading} title='Submit' />

              <div className='text-center text-[14px] mt-4'>
                Already have an account?
                <Link href='/login' className='ml-2 text-blue-400'>
                  Login here
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
};

export default Register;
