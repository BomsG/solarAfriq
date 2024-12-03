'use client';

/* eslint-disable @typescript-eslint/no-explicit-any */

import useGetReq from '@/rest/hooks/useGetRequest';
import { DataTable } from '@/app/components/table/data-table';
import { allTechniciansCol } from '@/app/components/table/tableColumns';
import readableDate from '@/rest/utils/readableDate';
import capitalizeFirstLetter from '@/rest/utils/capitalizeFirstLetter';
import { Spinner } from '@/app/components/molecules/spinner';
import { useRouter } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';

export default function Technicians() {
  const router = useRouter();
  const { data: tech, isLoading } = useGetReq(`/technician`);
  const techniciansData = tech?.data?.data?.map((tec: any) => ({
    technicianId: tec._id,
    email: tec.email,
    location: capitalizeFirstLetter(tec.location),
    role: capitalizeFirstLetter(tec.role),
    createdAt: readableDate(tec.createdAt),
    phone: tec.phone,
    // status: 'approved | awaiting approval | rejected',
    status: 'approved ',
  }));

  const handleAccept = (id: string) => {
    console.log('Accepted ', id);
  };

  const handleReject = (id: string) => {
    console.log('Rejected ', id);
  };

  return (
    <div className='relative min-h-screen px-1 sm:px-10'>
      <main className='container py-6 mt-6 sm:mt-20'>
        <div className='mx-auto max-w-4xl'>
          <div className='w-full flex flex-col sm:flex-row flex-wrap gap-3'>
            <div className='w-full flex justify-between items-center gap-8 mb-8'>
              <h2 className='font-bold'>Technicians</h2>
              <button
                className=' flex items-center text-[12px] bg-white p-2 rounded-md border border-gray-200 h-[32px] hover:bg-gray-100 hover:scale-105'
                onClick={router.back}
              >
                <ChevronLeft size={16} /> Go Back
              </button>
            </div>
            {isLoading ? (
              <div className='absolute top-[10%] left-[45%] h-screen '>
                <Spinner size='10' color='pink' />
              </div>
            ) : (
              <DataTable
                columns={allTechniciansCol(handleAccept, handleReject)}
                data={techniciansData}
              />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
