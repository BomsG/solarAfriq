"use client";
import { usePathname } from 'next/navigation';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Nav from './components/molecules/nav';
import Footer from './components/Footer';
import CartProvider from '@/rest/context/CartContext';
import ShapeAnimation from './components/PageWrapper'; 
import Head from 'next/head'; 

const pjSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname(); // Get the current path


  const noLayoutPaths = ['/admin', '/admin/products', '/admin/orders', '/admin/users', '/installer/form'];

  // Check if the current path matches any of the paths where Nav and Footer should be hidden
  const hideLayout = noLayoutPaths.some((path) => pathname.startsWith(path));

  return (
    <html lang='en'>
      <Head>
        <title>SolarAfriq</title>
        <link rel="icon" href="/Logo.png" type="image/png" /> {/* Path to the logo in the public folder */}
        <meta name="description" content="Manage your products, orders, and users efficiently with the SolarAfriq admin dashboard." />
      </Head>
      <CartProvider>
        <body className={` ${pjSans.className} antialiased`}>
          {/* ShapeAnimation is rendered for the whole layout */}
          <ShapeAnimation />

          {/* Conditionally render Nav and Footer */}
          {!hideLayout && <Nav />}
          {children}
          {!hideLayout && <Footer />}
        </body>
      </CartProvider>
    </html>
  );
}
