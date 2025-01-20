/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-expressions */

'use client';

import { TextField } from '@/app/components/molecules/textField';
import api from '@/rest/Auth/axios';
import { useAuthContext } from '@/rest/context/auth';
import { useFormik } from 'formik';
import { ReactNode, useState } from 'react';
import { toast } from 'react-toastify';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DashButton } from '@/app/components/molecules/dashButton';
import ImageUploadModal from '@/app/components/molecules/imageUpload';
import { InfoIcon, UploadCloud } from 'lucide-react';
import { MultiselectField } from '@/app/components/molecules/multiselectField';
import { SelectField } from '@/app/components/molecules/selectField';
import { states } from '@/rest/mock/mockData';

const SettingsItems = ({ children }: { children: ReactNode }) => {
  return (
    <div className='bg-white-400 py-2 sm:p-4 border-b-[1px] border-gray-200'>
      <div className='flex flex-col min-[1050px]:flex-row'>
        <div className='title w-[350px]'>
          <h1 className=''>Profile Photo</h1>
          {/* <p className='text-[12px]'>Enter first name</p> */}
        </div>

        {children}
      </div>
    </div>
  );
};

const SettingsField = ({ title, name, formik }: { title: string; name: string; formik: any }) => (
  <div className='bg-white-400 py-2 sm:p-4 border-b-[1px] border-gray-200'>
    <div className='flex flex-col min-[1050px]:flex-row'>
      <div className='title w-full sm:w-[350px]'>
        <h1 className='text-[14px]'>{title}</h1>
      </div>

      <div className='input-field w-full sm:w-[350px]'>
        <TextField name={name} placeholder='' formik={formik} />
      </div>
    </div>
  </div>
);

export default function Settings() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showIDModal, setShowIDModal] = useState<boolean>(false);
  const [avatar, setAvatar] = useState('');
  const [idDoc, setIdDoc] = useState('');
  const [loading, setLoading] = useState(false);
  const [openPwd, setOpenPwd] = useState(false);
  const [openTech, setOpenTech] = useState(false);
  const { user, handleSetUser } = useAuthContext();

  console.log(user);

  const formik = useFormik({
    initialValues: {
      name: user?.name || '',
      email: user?.email || '',
      phone: user?.phone || '',
      state: user?.state || '',
      city: user?.city || '',
      address: user?.address || '',
      profile: user?.profile || '',
      idDoc: user?.idDoc || '',
    },
    enableReinitialize: true,
    onSubmit: async (values, { resetForm }) => {
      const payload = {
        name: values.name,
        email: values?.email,
        phone: values?.phone,
        state: values?.state,
        city: values?.city,
        address: values?.address,
        profile: avatar || user?.profile,
        idDoc: idDoc || user?.idDoc,
      };

      try {
        setLoading(true);
        const res = await api.put('/user', payload);

        // console.log('user data', res?.data?.user);

        handleSetUser(res?.data?.user);
        toast.success(res.data?.message);
      } catch (err: any) {
        toast.error(err?.response?.data?.message);
      } finally {
        setLoading(false);
      }

      // console.log(values);
    },
  });

  const handleImageUploadComplete = (url: string) => {
    setAvatar(url);
  };

  const handleIDUploadComplete = (url: string) => {
    setIdDoc(url);
  };

  const handleOpenModal = () => {
    setShowModal(!showModal);
  };

  const handleOpenIDModal = () => {
    setShowIDModal(!showIDModal);
  };

  const formikG = useFormik({
    initialValues: {
      oldPassword: '',
      Password: '',
    },
    onSubmit: async (values) => {
      try {
        setLoading(true);
        const res = await api.patch('/changePassword', values);

        // successHandler(res);
        toast;
        setOpenPwd(false);
      } catch (err: any) {
        // errorHandler(err);
      } finally {
        setLoading(false);
      }
    },
  });

  const formikH = useFormik({
    initialValues: {
      role: [''],
    },
    onSubmit: async (values) => {
      try {
        setLoading(true);
        const res = await api.put('/technician', values);

        setOpenTech(false);
        toast.success(res.data?.message);
      } catch (err: any) {
        toast.error(err?.response?.data?.message, { autoClose: 5000 });
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    // <main className='bg-[#F9FAFB] h-full p-1 sm:p-[20px] sm:ml-64 mt-[60px] z-1'>
    <main>
      <div className='sm:border-[1px] border-gray-200 rounded-lg overflow-hidden'>
        <div className='flex bg-[#F9FAFB] p-4 border-b-[1px] border-gray-200 font-semibold justify-between'>
          <div className='border-r-[1px] border-gray-200 pr-6 text-[#b8bfcb]'>Update Profile</div>
          {user?.technicianStatus === 'pending' ? (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <InfoIcon color='orange' />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Your Technician application is awaiting approval</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ) : user?.technicianStatus === 'accepted' ? (
            <div className='text-xs w-max py-1 px-3 rounded-full bg-blue-200 text-blue-400'>
              Approved Technician
            </div>
          ) : (
            <div
              className='text-sm font-normal text-blue-500 cursor-pointer'
              onClick={() => setOpenTech(true)}
            >
              Become a technician
            </div>
          )}
        </div>
        <form onSubmit={formik.handleSubmit}>
          <SettingsItems>
            <div className='flex flex-col items-center gap-4'>
              <Avatar className='w-20 h-20'>
                {/* <AvatarImage src='https://github.com/shadcn.png' /> */}
                <AvatarImage src={avatar ? avatar : user?.profile} />
                <AvatarFallback>{user?.email?.slice(0, 2)}</AvatarFallback>
              </Avatar>

              <div className='input-field w[350px]'>
                <button
                  className='bg-green-600 hover:bg-green-800 text-white text-[12px] px-4 py-1 rounded-md'
                  onClick={handleOpenModal}
                  type='button'
                >
                  Upload a new image
                </button>
              </div>
            </div>
          </SettingsItems>

          <SettingsField title='Full Name' name='name' formik={formik} />
          <SettingsField title='Email' name='email' formik={formik} />
          <SettingsField title='Phone' name='phone' formik={formik} />
          <div className='bg-white-400 py-2 sm:p-4 border-b-[1px] border-gray-200'>
            <div className='flex flex-col min-[1050px]:flex-row'>
              <div className='title w-full sm:w-[350px]'>
                <h1 className='text-[14px]'>State</h1>
              </div>

              <div className='input-field w-full sm:w-[350px]'>
                <SelectField name='state' options={states} formik={formik} />
              </div>
            </div>
          </div>
          <SettingsField title='City' name='city' formik={formik} />
          <SettingsField title='Address' name='address' formik={formik} />

          <div className='bg-white-400 py-2 sm:p-4 border-b-[1px] border-gray-200 sm:max-w-[50vw]'>
            <label className='block mb-2 text-sm font-medium text-gray-900'>
              Upload ID (NIN) <span className='text-[10px] ml-2'>(for technicians only)</span>
            </label>
            <div className='flex flex-col sm:flex-row justify-start gap-4 sm:gap-12'>
              <button
                className='px-2 py-1 bg-blue-200 rounded-sm text-xs h-8 w-48 flex items-center gap-3'
                onClick={handleOpenIDModal}
                type='button'
              >
                <UploadCloud size={14} />{' '}
                {user?.idDoc ? 'Reupload Image' : !!idDoc ? 'Reupload Image' : 'Upload Image'}
              </button>
              {!!user?.idDoc ? (
                <img src={user?.idDoc} className='w-8 h-8 rounded-sm' />
              ) : (
                !!idDoc && <img src={idDoc} className='w-8 h-8 rounded-sm' />
              )}
            </div>
          </div>

          <div className='max-w-[720px] sm:p-4'>
            <div className='my-12 ml-4 flex justify-start sm:justify-end   '>
              <div className='w-[200px]'>
                <DashButton title='Update Profile' loading={loading} />
              </div>
            </div>
          </div>
        </form>

        <Dialog open={openPwd} onOpenChange={setOpenPwd}>
          <DialogContent className='sm:max-w-[425px] overflow-y-scroll max-h-[70vh]'>
            <DialogHeader>
              <DialogTitle>Change Password</DialogTitle>
              <DialogDescription className='hidden'></DialogDescription>
            </DialogHeader>
            <div className='w-full h-[.8px] my-1 bg-slate-200'></div>
            <form onSubmit={formikG.handleSubmit}>
              <section className='flex flex-col gap-3'>
                <TextField label='Current Password' name='oldPassword' formik={formikG} />
                <TextField label='New Password' name='Password' formik={formikG} />
              </section>

              <DialogFooter className='mt-8'>
                <DashButton title='Submit' loading={loading} />
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>

        <Dialog open={openTech} onOpenChange={setOpenTech}>
          <DialogContent className='sm:max-w-[425px] overflow-y-scroll max-h-[70vh]'>
            <DialogHeader>
              <DialogTitle>Become a Technician</DialogTitle>
              <DialogDescription className='hidden'></DialogDescription>
            </DialogHeader>
            <div className='w-full h-[.8px] my-1 bg-slate-200'></div>
            <form onSubmit={formikH.handleSubmit}>
              <section className='flex flex-col gap-3'>
                <MultiselectField
                  label='Choose a role'
                  name='role'
                  options={[
                    { label: '---Choose a role---', value: '' },
                    { label: 'Installer', value: 'installer' },
                    { label: 'Electrician', value: 'electrician' },
                  ]}
                  formik={formikH}
                />
              </section>

              <DialogFooter className='mt-8'>
                <DashButton title='Submit' loading={loading} />
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>

        <ImageUploadModal
          onUploadComplete={handleImageUploadComplete}
          showModal={showModal}
          setShowModal={setShowModal}
        />

        <ImageUploadModal
          onUploadComplete={handleIDUploadComplete}
          showModal={showIDModal}
          setShowModal={setShowIDModal}
        />
      </div>
    </main>
  );
}
