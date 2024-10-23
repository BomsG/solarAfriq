import React from 'react'
import Image from 'next/image'
import img from '../images/image5.jpg'
import { FaArrowRight } from "react-icons/fa6";

const World = () => {
  return (
    <div className='my-20 flex text-white px-[150px]'>
        <div className='bg-black w-full flex justify-center items-center text-center'>
            <div className=''>
            <h1 className='text-[50px] font-semibold mb-10'>Connects with our <br/> installers</h1>
            <button className="text-red hover:before:bg-redborder-red-500 relative h-[50px] w-40 overflow-hidden bg-white px-3 text-black font-semibold rounded-xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-green-500 before:transition-all before:duration-500 hover:text-white hover:shadow-red-500 hover:before:left-0 hover:before:w-full">
              <span className="relative z-10 flex gap-2 items-center"> Meet Installer  <FaArrowRight /></span>
            </button>
            </div>   
        </div>
        <div className='w-full'>
            <Image src={img} alt='imgae' />
        </div>
    </div>
  )
}

export default World