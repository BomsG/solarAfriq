import React from 'react';
import Image from 'next/image';
import teamImage from '../images/image3.jpg'; // Replace with your team image
import vision from '../images/image4.jpg'; // Replace with your team image
import { FaSolarPanel, FaHandsHelping, FaLeaf, FaLightbulb } from 'react-icons/fa';
import Nav from '../components/Nav';
import { useCart } from '../components/CartContext'; // Import the CartContext
import Products from '../components/Products';
import Footer from '../components/Footer';
import Services from '../components/Services';
import { FaArrowRight } from "react-icons/fa6";
import Values from '../components/Values';
import Nav2 from "../components/Nav2"

const AboutUs: React.FC = () => {
//   const { cart } = useCart(); // Access cart from context

  return (
    <section className="">
        <Nav2 />
      {/* <Nav cartCount={cart.length} /> Pass cart count to Nav */}
      <div className="container mx-auto py-16 px-6 sm:px-12 lg:px-24">
        {/* Section Title */}
        <h1 className="text-[60px]  mb-8 leading-[80px]">
        Pioneering sustainable <br/> solar solutions worldwid
        </h1>

        {/* About Section */}
        <div className="flex flex-col lg:flex-row items-center mb-12 mt-5">
          <div className="lg:w-1/2 lg:pl-8 mb-20">
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              We envision a world where solar energy is a primary source of power for all, creating a sustainable future for generations to come. Our goal is to lead the renewable energy transition, fostering innovation in every project we undertake.
            </p>
            <button className=" text-red hover:before:bg-redborder-red-500 relative h-[50px] w-40 overflow-hidden  shadow-xl px-3 text-black font-semibold rounded-full transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-green-500 before:transition-all before:duration-500 hover:text-white border hover:before:left-0 hover:before:w-full">
              <span className="relative z-10 flex gap-2 items-center text-sm"> View Products<span  className='bg-green-500 rounded-full p-1'><FaArrowRight/></span></span>
            </button>
           
          </div>
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <Image
              src={teamImage}
              alt="Our Team"
              className=" shadow-xl"
              width={600}
              height={400}
            />
          </div>

        </div>
        <Image
              src={vision}
              alt="Our Team"
              className=" shadow-xl -mb-[350px] pl-20"
              width={600}
              height={400}
            />
        <div className='bg-black flex justify-end text-white h-[500px]'>
            {/* <div>
                <Image src={vision} alt='vision' className='h-[900px] -mb-10'/>
            </div> */}
            <div className='pr-[100px]'>
                <h1 className='text-2xl mt-20'>our vision</h1>
                <h2 className='py-5 text-[55px]'>A world powered by <br /><span className='text-green-500'>solar energy</span> </h2>
                <p >Lorem ipsum dolor sit amet consectetur at lacus erat lacus <br />magna ligula porta nulla volutpat posuere in sed ultrices<br /> enim ad minim veniam, quis nostrud exercitation<br /> ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        </div>
        <Values />
        <Services />
        <hr className='my-20'/>
        <Footer />
      </div>
    </section>
  );
};

export default AboutUs;
