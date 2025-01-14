'use client';

import Link from 'next/link';
import { BsMegaphone, BsMegaphoneFill, BsPieChart } from 'react-icons/bs';
// import { usePathname, useRouter } from 'next/navigation';
import { RiAdminLine, RiKey2Fill, RiSettingsFill } from 'react-icons/ri';
import { Dispatch, ReactNode, SetStateAction } from 'react';
import {
  MdClose,
  MdCreate,
  MdHandshake,
  MdOutlineCampaign,
  MdPayment,
  MdSupport,
} from 'react-icons/md';
import { usePathname, useRouter } from 'next/navigation';
import { useAuthContext } from '@/rest/context/auth';

interface MenuProps {
  id: number;
  title: string;
  icon: ReactNode;
  notif: string;
  href: string;
}

export function DashboardSidebar({
  sbar,
  setSbar,
}: {
  sbar: boolean;
  setSbar: Dispatch<SetStateAction<boolean>>;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const { handleLogOut } = useAuthContext();
  // const userIsClient = user?.roles.includes(1);
  // const userIsAdmin = user?.Role.includes(2);

  const navItems: MenuProps[] = [
    {
      id: 1,
      title: 'All Campaigns',
      icon: <MdOutlineCampaign size={20} />,
      notif: '',
      href: '/allcampaigns',
    },
    {
      id: 2,
      title: 'My Campaigns',
      icon: <BsMegaphone />,
      notif: '',
      href: '/mycampaigns',
    },
    {
      id: 3,
      title: 'Create Campaign',
      icon: <MdCreate />,
      notif: '',
      href: '/createcampaign',
    },
    {
      id: 4,
      title: 'My Accepted Bids',
      icon: <MdHandshake />,
      notif: '',
      href: '/mycampaignbids',
    },
    {
      id: 5,
      title: 'My Campaign Stats',
      icon: <BsPieChart />,
      notif: '',
      href: '/mycampaignstats',
    },

    // {
    //   id: 2,
    //   title: 'Transactions',
    //   icon: <FaMoneyBill />,
    //   notif: 4,
    //   href: '/dashboard/transactions',
    // },
    // {
    //   id: 3,
    //   title: 'Campaigns',
    //   icon: <RiMegaphoneFill />,
    //   notif: 4,
    //   href: '/dashboard/campaigns',
    // },

    {
      id: 6,
      title: 'Payment',
      icon: <MdPayment />,
      notif: '',
      href: '/payment',
    },
    {
      id: 7,
      title: 'Settings',
      icon: <RiSettingsFill />,
      notif: '',
      href: '/settings',
    },
    {
      id: 8,
      title: 'Support',
      icon: <MdSupport />,
      notif: '',
      href: '/support',
    },
    {
      id: 9,
      title: 'Admin Center',
      icon: <RiAdminLine />,
      notif: '',
      href: '/admincenter',
    },
    // {
    //   id: 6,
    //   title: 'Dashboard Tester',
    //   icon: <RiEqualizerFill />,
    //   notif: '',
    //   href: '/dashboard/tester',
    // },
  ];

  // const influencerNavId = [1, 4, 6, 7, 8];
  // const clientNavId = [1, 2, 3, 5, 6, 7, 8];
  // const adminNavId = [1, 2, 3, 5, 7, 9];

  // const clientMenu = navItems.filter((item) => clientNavId.includes(item.id));
  // const influencerMenu = navItems.filter((item) => influencerNavId.includes(item.id));
  // const adminMenu = navItems.filter((item) => adminNavId.includes(item.id));

  const filteredMenu = navItems;

  // const filteredMenu = userIsClient ? clientMenu : influencerMenu;
  // const filteredMenu = userIsClient ? clientMenu : userIsAdmin ? adminMenu : influencerMenu;
  // const filteredMenu = adminMenu ? userIsAdmin : clientMenu ? userIsClient : influencerMenu;
  // const filteredMenu = userIsAdmin ? adminMenu : userIsClient ? clientMenu : influencerMenu;

  // console.log(filteredMenu);

  // const formik = useFormik({
  //   initialValues: {
  //     Message: '',
  //   },
  //   onSubmit: async (values) => {
  //     const payload = {
  //       FirstName: user?.FirstName,
  //       Email: user?.Email,
  //       Phone: user?.PhoneNumber,
  //       Message: values?.Message,
  //     };

  //     try {
  //       setLoading(true);
  //       const res = await api.post('/postSupport', payload);
  //       successHandler(res);
  //       setOpenSupport(false);
  //     } catch (err) {
  //       errorHandler(err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   },
  // });
  return (
    // <aside
    //   className={`fixed top-0 left-0 z-40 w-64 h-screen  transition-transform ${
    //     !sbar ? '-translate-x-full' : ''
    //   } bg-white border-r border-gray-200 sm:translate-x-0 `}
    //   aria-label='Sidebar'
    // >
    <aside
      className={`fixed top-0 left-0 z-40 w-64 h-screen  transition-transform ${
        !sbar ? '-translate-x-full' : ''
      } bg-white border-r border-gray-200 sm:translate-x-0 `}
      aria-label='Sidebar'
    >
      <div className='h-full overflow-y-auto bg-[#873A7A] '>
        <div className='h-[60px] flex justify-between items-center border-b border-[#77346c] mb-4 p-4'>
          <Link href='/'>
            <div className='font-bold text-white flex items-center gap-1'>
              <BsMegaphoneFill /> <h3>kreators</h3>
            </div>
          </Link>

          <div
            className='flex sm:hidden justify-center items-center w-6 h-6 rounded-full text-white cursor-pointer bg-[#77346c]'
            onClick={() => setSbar(!sbar)}
          >
            <MdClose />
          </div>
        </div>

        <ul className='space-y-2 font-medium px-4 text-sm'>
          {filteredMenu.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                className={`${
                  pathname === item.href ? 'bg-[#77346c] text-gray-100' : 'text-gray-300'
                } flex items-center justify-between p-3  rounded-[4px]  hover:bg-[#833b77]  group`}
              >
                <div className='flex items-center'>
                  <div className='text-white'>{item.icon}</div>
                  <span className='ms-3'>{item.title}</span>
                </div>
                {item?.notif && (
                  <span className='inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full'>
                    {item?.notif}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>

        <div className='absolute w-full bottom-6 space-y-2 font-medium px-4 text-sm'>
          {/* <Link
            href='/dashboard/settings'
            className={`${
              pathname === '/dashboard/settings' ? 'bg-[#77346c] text-gray-100' : 'text-gray-300'
            } flex items-center justify-between p-3  rounded-[4px]  hover:bg-[#833b77]  group`}
          >
            <RiSettingsFill />
            <span className='flex-1 ms-3 whitespace-nowrap'>Settings</span>
          </Link> */}

          {/* <div
            className='flex items-center p-2 text-gray-100 rounded-lg hover:bg-[#833b77] group cursor-pointer'
            onClick={() => setOpenSupport(true)}
          >
            <MdSupport />
            <span className='flex-1 ms-3 whitespace-nowrap'>Support</span>
          </div> */}

          <div
            className='flex items-center p-2 text-gray-100 rounded-lg hover:bg-[#833b77] group cursor-pointer'
            onClick={() => {
              router.push('/');
              handleLogOut();
            }}
          >
            <RiKey2Fill />
            <span className='flex-1 ms-3 whitespace-nowrap'>Sign Out</span>
          </div>
        </div>
      </div>

      {/* <Dialog open={openSupport} onOpenChange={setOpenSupport}>
        <DialogContent className='sm:max-w-[425px] overflow-y-scroll max-h-[70vh]'>
          <DialogHeader>
            <DialogTitle>Support</DialogTitle>
            <DialogDescription className='hidden'></DialogDescription>
          </DialogHeader>
          <div className='w-full h-[.8px] my-1 bg-slate-200'></div>
          <form onSubmit={formik.handleSubmit}>
            <section className='flex flex-col gap-3'>
              <TextField label='Type your message' name='Message' formik={formik} />
            </section>

            <DialogFooter className='mt-8'>
              <BamButton title='Submit' loading={loading} />
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog> */}
    </aside>
  );
}
