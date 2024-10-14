import Image from "next/image";
import React from "react";
import Nav from "./components/Nav";
import { FaArrowRight } from "react-icons/fa6";

const page = () => {
  return (
    <div className="">
      <section className="relative ">
        <Image
          src={require("../app/images/hero2.jpg")}
          alt="hero"
          className="h-[100vh] w-full absolute z-0  "
        />
        <div className="absolute top-0 left-0 h-[100vh] w-full bg-black opacity-50 z-10"></div>
        <div className="relative z-20 px-[150px] ">
          <Nav />
          <div className="flex justify-between">
            <div className="text-white mt-[60px] w-[70%]">
              <h1 className="text-[70px] font-semibold leading-[1.3]">
                Innovative solar solutions for sustainable living
              </h1>
              <p className="text-[18px] w-[65%] mt-3">
                Lorem ipsum dolor sit amet consectetur at lacus erat lacus magna
                ligula porta nulla volutpat posuere insed ultrices tristique.
              </p>
              <div className="flex gap-5 items-center mt-20">
                <button className="bg-white text-black rounded-xl px-5 py-2 text-[16px] font-semibold flex items-center gap-2">
                  Meet installer
                  <span className="bg-green-500 p-2 rounded-full">
                    <FaArrowRight />
                  </span>
                </button>
                <button className="text-[16px] font-semibold flex items-center gap-2">
                  Browse All Products
                  <FaArrowRight />
                </button>
              </div>
            </div>
            {/* <div></div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
