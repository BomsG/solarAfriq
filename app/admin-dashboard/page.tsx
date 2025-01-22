'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Link from 'next/link';
import { ReactNode } from 'react';
import { BiCartDownload } from 'react-icons/bi';
import { AiOutlineProduct } from 'react-icons/ai';
// import { BsPerson } from 'react-icons/bs';
import { FaScrewdriver } from 'react-icons/fa';
import { ChevronLeft } from 'lucide-react';

interface DashboardTile {
  title: string;
  description: string;
  rating: number;
  progress: number;
  color: string;
  size?: 'default' | 'large';
  icon?: ReactNode;
  href: string;
}

const tiles: DashboardTile[] = [
  {
    title: 'Orders',
    description: 'Manage and fulfil orders',
    rating: 4.1,
    progress: 12,
    color: 'bg-[#E57373]',
    icon: <BiCartDownload />,
    href: '/admin-dashboard/orders',
  },
  {
    title: 'Products',
    description: 'Create new products, delete etc.',
    rating: 4.5,
    progress: 32,
    color: 'bg-[#4DB6AC]',
    icon: <AiOutlineProduct />,
    href: '/admin-dashboard/products',
  },
  {
    title: 'Technicians',
    description: 'See all technicians, approve, reject etc.',
    rating: 5.0,
    progress: 80,
    color: 'bg-[#F4511E]',
    icon: <FaScrewdriver />,
    href: '/admin-dashboard/technicians',
  },
  // {
  //   title: 'Profile',
  //   description: 'Learn how to strategize and formulate your own professional goals.',
  //   rating: 4.6,
  //   progress: 100,
  //   color: 'bg-[#E91E63]',
  //   size: 'large',
  //   icon: <BsPerson />,
  //   href: '/dashboard/profile',
  // },
  //   {
  //     title: 'Goal Orientation',
  //     description: 'Adapt your strategies to maximize personal and professional success.',
  //     rating: 4.2,
  //     progress: 48,
  //     color: 'bg-[#5C6BC0]',
  //   },
  //   {
  //     title: 'Self-belief',
  //     description: 'Gain confidence in your abilities and foment an empowered mindset.',
  //     rating: 3.9,
  //     progress: 60,
  //     color: 'bg-[#7E57C2]',
  //   },
];

export default function Dashboard() {
  return (
    <div className='min-h-screen px-1 sm:px-10'>
      <main className='container py-6 mt-6 sm:mt-40'>
        <div className='mx-auto max-w-4xl'>
          <div className='w-full flex justify-between items-center gap-8 mb-8'>
            <h2 className='font-bold'>Admin Dashboard</h2>
            <div className='flex gap-4'>
              <Link href='/dashboard'>
                <div className=' flex items-center text-[12px] bg-white p-2 rounded-md border border-gray-200 h-[32px] hover:bg-gray-100 hover:scale-105'>
                  <ChevronLeft size={16} /> Go to user dashboard
                </div>
              </Link>
            </div>
          </div>
          <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
            {tiles.map((tile, index) => (
              <Link href={tile.href} key={tile.title}>
                <Card
                  key={index}
                  className={`group relative overflow-hidden transition-all hover:shadow-lg h-32 min-[286px]:h-48 cursor-pointer`}
                >
                  <div
                    className={`absolute inset-0 opacity-90 transition-opacity group-hover:opacity-100 ${tile.color} `}
                  />
                  <CardHeader className='relative top-4 min-[286px]:top-0'>
                    {/* <div className='text-xs font-medium text-white/80'>Organizational</div> */}
                    <div className='text-[18px] min-[286px]:text-[25px] text-white'>
                      {tile.icon}
                    </div>
                  </CardHeader>
                  <CardContent className='relative -top-2 min-[286px]:-top-4 space-y-4 text-md min-[286px]:text-2xl font-bold text-white'>
                    {tile.title}
                    <div className='hidden min-[286px]:flex text-xs md:text-sm font-medium text-white mt-3'>
                      {tile.description}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
