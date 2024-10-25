'use client';

import Image from 'next/image';
import Link from 'next/link';
import logo from '../../images/logo-clean.png';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import useOutsideClick from '@/rest/hooks/useOutsideClick';
import Button from '../atoms/button';
import Cart from '../atoms/cart';
import { useCart } from '@/rest/hooks/useCart';

interface ListItem {
  id: number;
  href: string;
  title: string;
}

export default function Nav() {
  const [openMenu, setOpenMenu] = useState(false);
  const path = usePathname();
  const ref = useOutsideClick(() => setOpenMenu(false));
  const { itemCount } = useCart();

  const links: ListItem[] = [
    {
      id: 1,
      href: '/',
      title: 'Home',
    },
    {
      id: 2,
      href: '/about',
      title: 'About Us',
    },
    {
      id: 3,
      href: '/products',
      title: 'Products',
    },
    {
      id: 4,
      href: '/contact',
      title: 'Contact',
    },
  ];

  return (
    // <section className='w-full h-[100px] absolute top-0 left-0 z-[99] '>
    <section className='w-full absolute z-[99] py-6 px-5'>
      {/* <div className='absolute top-0 left-0 h-full bg-gradient-to-b from-black opacity-40 z0 blur-sm'></div> */}
      {/* <div className='flex justify-between items-center'>
        <Link href='/'>
          <Image src={logo} alt='logo' className='w-[150px]' />
        </Link>

        <ul className='flex gap-5 items-center'>
          {li.map((item) => (
            <Link key={item.id} href={item.link}>
              <li className={`font-semibold text-[17px] cursor-pointer`}>{item.list}</li>
            </Link>
          ))}
        </ul>
      </div> */}

      <div className='max-w-screenxl flex  items-center justify-between mx-aut  sm:px-10 md:px-[150px]'>
        <div className='flex-1'>
          <Link href='/'>
            <Image src={logo} alt='logo' className='w-[100px]' />
          </Link>
        </div>
        <button
          type='button'
          className=' flex-1 inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg min-[1000px]:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
          onClick={() => setOpenMenu(!openMenu)}
          ref={ref}
        >
          <span className='sr-only'>Open main menu</span>
          <svg
            className='w-5 h-5'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 17 14'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M1 1h15M1 7h15M1 13h15'
            />
          </svg>
        </button>
        <div className='flex-1 flex justify-center'>
          <div
            className={`${
              !openMenu ? 'hidden' : ''
            } w-full min-[1000px]:w-max min-[1000px]:block absolute top-12 pr-8 min-[1000px]:static`}
          >
            <ul className='font-medium flex flex-col p-4 min-[1000px]:p-0 mt-4 border border-gray-100 rounded-lg min-[1000px]:flex-row min-[1000px]:space-x-8 rtl:space-x-reverse min-[1000px]:mt-0 min-[1000px]:border-0'>
              {links.map((link) => (
                <li key={link.id}>
                  <Link href={link.href}>
                    <div
                      className={`block py-2 px-3 ${
                        path === link.href
                          ? 'text-white bg-color-orange min-[1000px]:text-color-orange'
                          : 'text-gray-900 hover:bg-gray-100 min-[1000px]:hover:bg-transparent min-[1000px]:hover:text-gray-400'
                      } rounded min-[1000px]:bg-transparent min-[1000px]:p-0 dark:text-white min-[1000px]:dark:text-color-orange`}
                    >
                      {link.title}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='flex-1 flex justify-end'>
          <div className=' flex gap-6 items-center'>
            <Link href='/cart'>
              <Cart count={itemCount} />
            </Link>
            <div className={`${openMenu ? 'hidden' : 'flex'} hidden min-[1000px]:flex `}>
              <Link href='/product'>
                <Button content='Contact an Installer' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
