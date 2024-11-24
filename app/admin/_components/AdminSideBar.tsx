'use client';
import Link from 'next/link';
import { FaStore } from 'react-icons/fa';
import { FaHouse } from 'react-icons/fa6';
import { TiShoppingCart } from 'react-icons/ti';
import { IoSettings } from 'react-icons/io5';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const AdminSidebar: React.FC = () => {
  const inactiveLink = 'flex gap-1 p-1';
  const activeLink = `${inactiveLink} bg-white text-black rounded-sm`;
  const pathname = usePathname();

  return (
    <div className='w-64 h-full bg-green-900 text-white fixed'>
      {/* <Image src={'/images/Logo.png'} className='w-[150px]' alt='logo' /> */}
      <Image src='/../images/Logo.png' className='w-[150px]' width={350} height={200} alt='logo' />
      <ul className='mt-5 space-y-3'>
        <li>
          <Link href='#' className={pathname === '/admin' ? activeLink : inactiveLink}>
            <p className='flex items-center gap-2 p-3 text-xl'>
              <FaHouse /> Dashboard
            </p>
          </Link>
        </li>
        <li>
          <Link
            href='/admin/products'
            className={pathname.includes('/admin/products') ? activeLink : inactiveLink}
          >
            <p className='flex items-center gap-2 p-3 text-xl'>
              <FaStore /> Manage Products
            </p>
          </Link>
        </li>
        <li>
          <Link
            href='/admin/orders'
            className={pathname.includes('/admin/orders') ? activeLink : inactiveLink}
          >
            <p className='flex items-center gap-2 p-3 text-xl'>
              <TiShoppingCart /> Orders
            </p>
          </Link>
        </li>
        <li>
          <Link
            href='/admin/setting'
            className={pathname.includes('/admin/setting') ? activeLink : inactiveLink}
          >
            <p className='flex items-center gap-2 p-3 text-xl'>
              <IoSettings />
              Setting
            </p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
