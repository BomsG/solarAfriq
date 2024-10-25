import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Nav from './components/molecules/nav';
import Footer from './components/Footer';
import CartProvider from '@/rest/context/CartContext';
// import ShapeAnimation from './components/PageWrapper'; // Assuming PageWrapper contains ShapeAnimation

const pjSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <CartProvider>
        <body className={` ${pjSans.className} antialiased`}>
          {/* ShapeAnimation is rendered once for the whole layout */}
          {/* <ShapeAnimation /> */}

          <Nav />
          {children}
          <Footer />
        </body>
      </CartProvider>
    </html>
  );
}
