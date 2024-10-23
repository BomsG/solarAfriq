import Image from "next/image";
import logo from "../images/Logo.png" 
import React from "react";
import Link from "next/link";
import { FaShoppingCart } from 'react-icons/fa';  // For cart icon with badge



const Nav = () => {
  const li = [
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
    <div className="px-20">
      <section className="relative">
        {/* Background Gradient */}
      
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
          {/* Navigation Links */}
          <ul className="flex gap-5 items-center">
            {li.map((item) => (
              <Link key={item.id} href={item.link}>
                <li className="text-black font-semibold text-[17px] cursor-pointer">
                  {item.list}
                </li>
              </Link>
            ))}
          </ul>

          {/* Cart and Button */}
          <div className="flex items-center gap-5">
            {/* Cart Icon with Badge */}
            <Link href="/Cart">
              <div className="relative cursor-pointer">
                <FaShoppingCart size={24}  />
              </div>
            </Link>

            {/* Meet Installer Button */}
            <Link href="/Product">
              <button className="text-red hover:before:bg-redborder-red-500 relative h-[50px] w-40 overflow-hidden bg-black px-3 text-white font-semibold rounded-xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-green-500 before:transition-all before:duration-500 hover:text-white hover:shadow-red-500 hover:before:left-0 hover:before:w-full">
                <span className="relative z-10">Meet Installer</span>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nav;
