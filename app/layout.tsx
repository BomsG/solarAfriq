import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { CartProvider } from './components/CartContext';
import ShapeAnimation from "./components/PageWrapper"; // Assuming PageWrapper contains ShapeAnimation

const pjSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${pjSans.className} antialiased`}>
        {/* ShapeAnimation is rendered once for the whole layout */}
        <ShapeAnimation /> 
        
        {/* Wrap children in CartProvider */}
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
