/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import { useState } from 'react';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import api from '@/rest/Auth/axios';
import PublicLayout from '@/app/components/layout/publicLayout';
import { TextField } from '@/app/components/molecules/textField';
import { DashButton } from '@/app/components/molecules/dashButton';
import { useAuthContext } from '@/rest/context/auth';
import { useRouter } from 'next/navigation';

const Login: React.FC = () => {
  const { handleSetToken, handleSetUser } = useAuthContext();
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
        const res = await api.post('/login', values);

        if (res?.data?.token) {
          handleSetToken(res?.data?.token);
          try {
            const user = await api('/user');
            handleSetUser(user?.data?.data);
            toast.success('Login successful');
            router.push('/dashboard/settings');
            resetForm();
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
          } catch (error: any) {
            toast.error('Unable to fetch user');
            // toast.error(error?.respose?.data?.message);
          }
        }
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
                  <h2 className='font-bold text-lg'>Login</h2>
                  <p className='text-sm'>Log into your dashboard</p>
                </div>
                <TextField label='Email' name='email' formik={formik} />
                <TextField type='password' label='Password' name='password' formik={formik} />
              </section>

              <DashButton loading={loading} title='Submit' />
            </form>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
};

export default Login;
