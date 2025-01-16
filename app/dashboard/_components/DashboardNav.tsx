'use client';

// import useOutsideClick from '@/hooks/useOutsideClick';
// import { useAuthContext } from '@/lib/contexts/auth';
import React, { Dispatch, SetStateAction } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuthContext } from '@/rest/context/auth';
import useOutsideClick from '@/rest/hooks/useOutsideClick';

export function DashboardNav({
  sbar,
  setSbar,
}: {
  sbar: boolean;
  setSbar: Dispatch<SetStateAction<boolean>>;
}) {
  const router = useRouter();
  const { user, handleLogOut } = useAuthContext();
  // const userIsClient = user?.roles.includes;
  // const initials =
  //   (user?.FirstName?.slice(0, 1) as string) || '' + user?.LastName?.slice(0, 1) || '';

  // const devEnv = process.env.NODE_ENV === 'development';

  const ref = useOutsideClick(() => setSbar(false));

  // const { data: notifications, isLoading, refetch: refetchAll } = useGetReq(`/getNotification`);

  // const notif = notifications?.data?.data;

  return (
    <>
      <nav className='fixed top-0 z-30 h-[60px] w-full bg-white border-b border-gray-200 '>
        {/* <nav className='fixe top0 z-30 h-[60px] w-full bg-white border-b border-gray-200 '> */}
        <div className='px-3 py-3 lg:px-5 lg:pl-3'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center justify-start rtl:justify-end sm:invisible'>
              <button
                // data-drawer-target='logo-sidebar'
                // data-drawer-toggle='logo-sidebar'
                aria-controls='logo-sidebar'
                type='button'
                className='inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 '
                onClick={() => setSbar(!sbar)}
                ref={ref}
              >
                <span className='sr-only'>Open sidebar</span>
                <svg
                  className='w-6 h-6'
                  aria-hidden='true'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    clipRule='evenodd'
                    fillRule='evenodd'
                    d='M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z'
                  ></path>
                </svg>
              </button>
              {/* <div className={`${sbar ? 'hidden' : 'flex'} justify-start items-center`}>
              <Link href='/' className='flex ms-2 md:me-24 px-4'>
                <div className='font-bold text-pink-400 flex items-center gap-1'>
                  <BsMegaphoneFill /> <h3>kreators</h3>
                </div>
              </Link>
            </div> */}
            </div>
            <div className='flex items-center'>
              <div className='flex items-center ms-3'>
                {/* {devEnv && (
                  <div className='mr-6 text-xs w-max py-1 px-3 rounded-full bg-blue-200'>
                    {userIsClient ? 'client' : 'influencer'}
                  </div>
                )} */}

                <DropdownMenu>
                  {/* <DropdownMenuTrigger asChild>
                    <div className='mr-3'>
                      <button
                        className='py4 px-1 relative border-2 border-transparent text-gray-800 rounded-full hover:text-gray-400 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out'
                        aria-label='Cart'
                      >
                        <MdOutlineNotifications />
                        {notifications?.data?.totalCount > 0 && (
                          <span className='absolute -top-4'>
                            <div className='inline-flex items-center px-[4px] py-[2px] border-2 border-white rounded-full text-[9px] font-semibold leading-none bg-red-500 text-white'>
                              {notifications?.data?.totalCount}
                            </div>
                          </span>
                        )}
                      </button>
                    </div>
                  </DropdownMenuTrigger> */}

                  {/* <DropdownMenuContent className='bg-white border rounded-md shadow-lg w-72 focus:outline-none relative right-6'>
                    <div className='px-4 py-3 text-sm bg-gray-100 font-semibold'>Notifications</div>

                    {notif &&
                      notif?.map((items: any) => (
                        <div key={items?._id}>
                          <DropdownMenuItem className='cursor-pointer px-4 py-4 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none p-4 '>
                            {items?.message}
                          </DropdownMenuItem>
                        </div>
                      ))}

                    {!notif ||
                      (!notif?.length && (
                        <div className='flex justify-center items-center my-12'>
                          <div className='flex flex-col justify-center items-center'>
                            <BsMailbox size={70} color='#e7e7e7' />
                            <p className='text-[12px] text-[#cdcdcd]'>
                              You do not have any notification
                            </p>
                          </div>
                        </div>
                      ))}
                  </DropdownMenuContent> */}
                </DropdownMenu>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <div>
                      <button
                        type='button'
                        className='flex text-sm bg-pink-500 rounded-full focus:ring-4 focus:ring-gray-300 '
                        aria-expanded='false'
                        data-dropdown-toggle='dropdown-user'
                      >
                        <span className='sr-only'>Open user menu</span>
                        <div className='w-8 h-8 rounded-full text-white flex justify-center items-center uppercase'>
                          {user?.email?.slice(0, 2)}
                        </div>
                      </button>
                    </div>
                  </DropdownMenuTrigger>
                  {/* <DropdownMenuTrigger asChild>
                    <div>
                      <button
                        type='button'
                        className='flex text-sm bg-pink-500 rounded-full focus:ring-4 focus:ring-gray-300 '
                        aria-expanded='false'
                        data-dropdown-toggle='dropdown-user'
                      >
                        <span className='sr-only'>Open user menu</span>

                        {user?.ProfilePicLink ? (
                          <img
                            className='w-8 h-8 rounded-full'
                            src={user?.ProfilePicLink}
                            alt='user photo'
                          />
                        ) : initials ? (
                          <div className='w-8 h-8 rounded-full text-white flex justify-center items-center'>
                            {initials}
                          </div>
                        ) : (
                          '00'
                        )}
                      </button>
                    </div>
                  </DropdownMenuTrigger> */}

                  <DropdownMenuContent
                    // align='start'
                    sideOffset={5}
                    className='bg-white border rounded-md shadow-lg w-28 focus:outline-none relative right-4'
                  >
                    <DropdownMenuItem className='cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none'>
                      <Link href={`/`}>Home</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className='cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none'>
                      <Link href={`/settings`}>Settings</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className='cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none'
                      onClick={() => {
                        router.push('/');
                        handleLogOut();
                      }}
                    >
                      Sign Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
