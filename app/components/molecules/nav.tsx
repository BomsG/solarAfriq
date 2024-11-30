'use client';

import Image from 'next/image';
import Link from 'next/link';
import logo from '../../images/logo-clean.png';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
// import useOutsideClick from '@/rest/hooks/useOutsideClick';
import Button from '../atoms/button';
import Cart from '../atoms/cart';
import { useCart } from '@/rest/hooks/useCart';
import Hamburger from '../atoms/hamburger';

interface ListItem {
  id: number;
  href: string;
  title: string;
}

export default function Nav() {
  const [openMenu, setOpenMenu] = useState(false);
  const path = usePathname();
  // const ref = useOutsideClick(() => setOpenMenu(false));
  const { itemCount } = useCart();

  useEffect(() => {
    setOpenMenu(false);
  }, [path]);

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
    // {
    //   id: 4,
    //   href: '/contact',
    //   title: 'Contact',
    // },
    {
      id: 5,
      href: '/technician',
      title: 'Technician',
    },
  ];

  return (
    // <section className='w-full absolute z-[99] py-6 px-5'>
    // <section className='w-full fixed top-0 left-0 z-[99] py-6 px-5 bg-black/80 backdrop-blur-sm'>
    <div>
      <section
        className={`w-full ${
          path === '/' ? 'absolute' : 'fixed bg-black/40 backdrop-blur-md'
        } top-0 left-0 z-[99] py-6 px-5 `}
      >
        <div className='max-w-screenxl flex  items-center justify-between mx-aut  sm:px-10 md:px-[150px]'>
          <div className='flex-1'>
            <Link href='/'>
              <Image src={logo} alt='logo' className='w-[100px]' />
            </Link>
          </div>
          <div className='flex-1 flex justify-center'>
            <div
              className={`w-full min-[1000px]:w-max min-[1000px]:block absolute top-12 pr-8 min-[1000px]:static`}
            >
              <ul className='font-medium hidden min-[1000px]:flex'>
                {links.map((link) => (
                  <li key={link.id}>
                    <Link href={link.href}>
                      <div
                        className={`block font-medium py-2 mx-3 relative w-fit after:block after:content-[''] after:absolute after:h-[3px] after:bg-green-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center  ${
                          path === link.href ? 'text-green-500' : 'text-gray-200'
                        }`}
                      >
                        {link.title}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className='flex-1 flex justify-end gap-2'>
            <div className=' flex gap-6 items-center'>
              <Link href='/cart' className='hover:scale-105'>
                <Cart count={itemCount} />
              </Link>
              <div className={`hidden min-[1000px]:flex `}>
                <Link href='/product'>
                  <Button
                    spanContent={
                      <span className='min-[1000px]:text-[14px] '>Contact Installer</span>
                    }
                  />
                </Link>
              </div>
            </div>
            <div className='min-[1000px]:hidden'>
              <Hamburger onClick={() => setOpenMenu(!openMenu)} />
            </div>
          </div>

          {openMenu && (
            <div className='min-[1000px]:hidden absolute left-0 min-[200px]:top-24 min-[345px]:top-28 w-full bg-black h-screen pt-6'>
              <ul className='font-medium hidde min-[1000px]:flex'>
                {links.map((link) => (
                  <li key={link.id}>
                    <Link href={link.href}>
                      <div
                        className={`block py-2 mx-3 relative w-fit after:block after:content-[''] after:absolute after:h-[3px] after:bg-green-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center  ${
                          path === link.href ? 'text-green-500' : 'text-gray-200'
                        }`}
                      >
                        {link.title}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
