import type { Metadata } from "next";
import localFont from "next/font/local";
import { Poppins, Inter, Open_Sans, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// const inter = Poppins({ subsets: ['latin'] })

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
      <body className={` ${pjSans.className} antialiased`}>{children}</body>
    </html>
  );
}
