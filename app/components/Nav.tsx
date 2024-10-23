import Image from "next/image";
import logo from "../images/Logo.png";
import React, { useState } from "react";
import Link from "next/link";
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';  


interface ListItem {
  id: number;
  list: string | React.ElementType; 
  link: string;
}

interface NavProps {
  cartCount: number;  // Prop for cart item count
  textColor?: string;  // Optional prop for text color
  bgColor?: string;    // Optional prop for background color
}

const Nav: React.FC<NavProps> = ({ cartCount, textColor = "white", bgColor = "transparent" }) => {
  const [menuOpen, setMenuOpen] = useState(false); 

  const li: ListItem[] = [
    {
      id: 1,
      list: "About",
      link: "/About"
    },
    {
      id: 2,
      list: "Products",
      link: "/Product"
    },
    {
      id: 3,
      list: "Contact",
      link: "/Contact"
    },
  ];

  return (
    <div style={{ backgroundColor: bgColor }}>
      <section className="relative">
        {/* Background Gradient */}
        <div className="pt-10 absolute top-0 left-0 h-[100px] w-full bg-gradient-to-b from-black opacity-40 z-0 blur-sm"></div>

        {/* NavBar */}
        <div className="relative z-10 flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <Image
              src={logo}
              alt="logo"
              className="w-[150px]"
            />
          </Link>

          {/* Hamburger Menu Icon */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FaTimes size={24} color={textColor} /> : <FaBars size={24} color={textColor} />}
            </button>
          </div>

          {/* Navigation Links for larger screens */}
          <ul className="hidden md:flex gap-5 items-center">
            {li.map((item) => (
              <Link key={item.id} href={item.link}>
                <li className={`font-semibold text-[17px] cursor-pointer`} style={{ color: textColor }}>
                  {typeof item.list === "string" ? item.list : <item.list />}
                </li>
              </Link>
            ))}
          </ul>

          {/* Cart and Button */}
          <div className="hidden md:flex items-center gap-5">
            {/* Cart Icon with Badge */}
            <Link href="/Cart">
              <div className="relative cursor-pointer">
                <FaShoppingCart size={24} color={textColor} />
                {cartCount > 0 && (
                  <span className="absolute top-[-5px] right-[-10px] bg-red-600 text-white text-xs font-bold rounded-full px-2">
                    {cartCount}
                  </span>
                )}
              </div>
            </Link>

            {/* Meet Installer Button */}
            <Link href="/Product">
              <button className="text-red hover:before:bg-redborder-red-500 relative h-[50px] w-40 overflow-hidden bg-white px-3 text-black font-semibold rounded-xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-green-500 before:transition-all before:duration-500 hover:text-white hover:shadow-red-500 hover:before:left-0 hover:before:w-full">
                <span className="relative z-10">Meet Installer</span>
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col items-center bg-black py-4">
            <ul className="flex flex-col gap-5 items-center">
              {li.map((item) => (
                <Link key={item.id} href={item.link} onClick={() => setMenuOpen(false)}>
                  <li className={`font-semibold text-[17px] cursor-pointer`} style={{ color: textColor }}>
                    {typeof item.list === "string" ? item.list : <item.list />}
                  </li>
                </Link>
              ))}
            </ul>

            {/* Cart Icon with count */}
            <Link href="/Cart" onClick={() => setMenuOpen(false)}>
              <div className="relative cursor-pointer mt-4">
                <FaShoppingCart size={24} color={textColor} />
                {cartCount > 0 && (
                  <span className="absolute top-[-5px] right-[-10px] bg-red-600 text-white text-xs font-bold rounded-full px-2">
                    {cartCount}
                  </span>
                )}
              </div>
            </Link>

            {/* Meet Installer Button */}
            <Link href="/Product" onClick={() => setMenuOpen(false)}>
              <button className="text-red hover:before:bg-redborder-red-500 relative h-[50px] w-40 overflow-hidden bg-white px-3 text-black font-semibold rounded-xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-green-500 before:transition-all before:duration-500 hover:text-white hover:shadow-red-500 hover:before:left-0 hover:before:w-full mt-4">
                <span className="relative z-10">Meet Installer</span>
              </button>
            </Link>
          </div>
        )}
      </section>
    </div>
  );
};

export default Nav;
