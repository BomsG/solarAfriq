"use client"
import Image from "next/image";
import React from "react";
import Nav from "./components/Nav";
import { FaArrowRight } from "react-icons/fa6";
import Services from "./components/Services";
import Reach from "./components/Reach";
// import Products from "./components/Products";
import ProductCom from "./components/ProductCom";
import World from "./components/World";
import AboutComp from "./components/AboutComp";
import Review from "./components/Review";
// import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import { useCart } from './components/CartContext';
import { useRouter } from "next/navigation";
import hero from "./images/hero2.jpg"



const page = () => {
  const { cart } = useCart();
  const router = useRouter();

  // Function to navigate to the cart page
  // const viewCart = () => {
  //   router.push('/cart'); // Redirect to cart page
  // };

  // const cartItemCount = 0;
  return (
    <div className="">
      <section className="relative h-[100vh]">
        <Image
          src={hero}
          alt="hero"
          className="h-[100vh] w-full absolute z-0"
        />
        <div className="absolute top-0 left-0 h-[100vh] w-full bg-black opacity-50 z-10"></div>
        <div className="relative z-20 px-[150px]">
        <Nav cartCount={cart.length}/> {/* Pass cart item count to Nav */}
          <div className="flex justify-between">
            <div className="text-white mt-[60px] w-[70%]">
              <h1 className="text-[70px] font-semibold leading-[1.3]">
                Innovative solar solutions for sustainable living
              </h1>
              <p className="text-[18px] w-[65%] mt-3">
                We&apos;re committed to respecting our environment, sustaining our communities, investing in our team and growing shareholder value.
              </p>
              <div className="flex gap-5 items-center mt-20">
                <button className="bg-white text-black rounded-xl px-5 py-2 text-[16px] font-semibold flex items-center gap-2">
                  Meet installer
                  <span className="bg-green-500 p-2 rounded-full">
                    <FaArrowRight />
                  </span>
                </button>
                <button className="text-[16px] font-semibold flex items-center gap-2">
                  Explore Products
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" mt-20">
        <Reach />
        <ProductCom />
        <div className="flex justify-center mt-5">
        <button className="shadow text-red hover:before:bg-redborder-red-500 relative h-[50px] w-40 overflow-hidden bg-white px-3 text-black font-semibold rounded-xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-green-500 before:transition-all before:duration-500 hover:text-white hover:shadow-red-500 hover:before:left-0 hover:before:w-full">
              <span className="relative z-10 flex gap-2 items-center"> View Products<FaArrowRight /></span>
            </button>
            </div>
        <hr className="my-10"/>
        <AboutComp />
        <hr className="my-10"/>
        <Services />
        <hr className="my-10"/>
        <World />
        <hr className="mb-10"/>
        <Review />
        <hr className="mt-[100px]"/>
        <Footer />
      </section>
    </div>
  );
};


export default page;
