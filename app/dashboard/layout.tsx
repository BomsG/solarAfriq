import { LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../images/logo-clean.png';

export default function DashLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='bg-gray-50'>
      <header className='sticky top- z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
        <div className='containe flex h-20 items-center justify-between px-1 sm:px-10'>
          <div className='fle items-center gap-2'>
            <Link href='/'>
              <Image
                src={logo}
                alt='logo'
                width={80}
                height={54}
                sizes='(max-width: 768px) 50px, 80px'
              />
            </Link>
          </div>
          <Button variant='ghost'>
            <LogOut className='h-4 w-4' />
            <span className=''>Logout</span>
          </Button>
        </div>
      </header>
      {children}
    </div>
  );
}
