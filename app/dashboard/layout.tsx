'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthContext } from '@/rest/context/auth';
import { DashboardSidebar } from './_components/DashboardSidebar';
import { DashboardNav } from './_components/DashboardNav';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { user, pageIsLoaded } = useAuthContext();
  const router = useRouter();
  const [sbar, setSbar] = useState(false);
  const [isClientReady, setIsClientReady] = useState(false);

  useEffect(() => {
    setIsClientReady(true);

    if (!user && pageIsLoaded) {
      // toast.error("You're not logged in. Redirecting...");
      router.push('/login');
    }
  }, [user, pageIsLoaded, router]);

  if (!isClientReady) {
    return (
      <div className='w-full absolute bg-yellow p-12'>
        <div className='mx-auto flex justify-center'>Loading...</div>
      </div>
    );
  }

  return (
    <>
      <div className='fixe'>
        <DashboardSidebar sbar={sbar} setSbar={setSbar} />
        <main className='bg-[#F9FAFB] h-full min-h-screen p-[20px] sm:ml-64 mt-[60px] z-1 relative'>
          {children}
        </main>
        <DashboardNav sbar={sbar} setSbar={setSbar} />
      </div>
    </>
  );
}
