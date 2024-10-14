import Image from "next/image";
import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";

// Define the type for list items
interface ListItem {
  id: number;
  list: string | React.ElementType; // It can be a string or a React component (like an icon)
}

const Nav: React.FC = () => {
  const li: ListItem[] = [
    {
      id: 1,
      list: "About",
    },
    {
      id: 2,
      list: "Products",
    },
    {
      id: 3,
      list: "Contact",
    },
  ];

  return (
    <div>
      <section className="">
        <div className="pt-10 absolute top-0 left-0 h-[100px] w-full  bg-gradient-to-b from-black  opacity-40 z-0 blur-sm "></div>
        <div className="relative z-10 flex justify-between items-center">
          <Image
            src={require("../images/Logo.png")}
            alt="logo"
            className="w-[150px]"
          />
          <ul className="flex gap-5 items-center">
            {li.map((item) => (
              <li
                key={item.id}
                className="text-white font-semibold  text-[17px]">
                {typeof item.list === "string" ? item.list : <item.list />}
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-5">
            <MdOutlineShoppingCart size={20} color="white" />
            {/* <button className="bg-white text-black text-[15px] font-semibold px-5 py-3 rounded-xl tracking-wider hover:before:bg-redborder-red-500 relative h-[50px] w-40 overflow-hidden border border-red-500">
              Meet Installer
            </button> */}
            <button className="text-red hover:before:bg-redborder-red-500 relative h-[50px] w-40 overflow-hidden bg-white px-3 text-black font-semibold rounded-xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-green-500 before:transition-all before:duration-500 hover:text-white hover:shadow-red-500 hover:before:left-0 hover:before:w-full">
              <span className="relative z-10"> Meet Installer</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nav;
