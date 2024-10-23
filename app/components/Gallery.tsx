"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import hero from '../images/hero2.jpg'; // Example image
import hero2 from '../images/hero.jpg'; // Example image
import hero3 from '../images/hero3.jpg'; // Example image
import hero4 from '../images/hero4.jpg'; // Example image
import hero5 from '../images/hero5.jpg'; // Example image
import { FaArrowRight } from "react-icons/fa6";

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState(hero);

  const images = [hero, hero2, hero3, hero4, hero5]; 

  return (
    <div className='flex gap-5 bg-gray-50 px-[100px]'>
        <div className='w-full'>
        <h1 className='text-2xl font-semibold'>gallery</h1>
        <h2 className='text-5xl my-5 font-semibold'>Solar panels around the world</h2>
        <p className='mb-10'>Amet tellus mi egestas morbi curabitur sit felis ullamcorper duis tincidunt ullamcorper diam lectus interdu nulla nibh lore.</p>
        <button className="text-red hover:before:bg-redborder-red-500 relative h-[50px] w-40 overflow-hidden bg-white px-3 text-black font-semibold rounded-xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-green-500 before:transition-all before:duration-500 hover:text-white hover:shadow-red-500 hover:before:left-0 hover:before:w-full">
              <span className="relative z-10 flex gap-2 items-center"> Meet Installer  <FaArrowRight /></span>
            </button>
        <div className='flex gap-10'>
            <Image src={hero} alt='image'  className='w-[250px]'/>
            <Image src={hero2} alt='image' className='w-[250px]' />
        </div>

        </div>
        <div className='w-full'>
            <Image src={hero5} alt='image' className='h-[700px]'/>
        </div>
    {/* <div className="grid gap-4">
      <div>
        <Image className="h-[500px] max-w-full rounded-lg " src={selectedImage} alt="Selected Image" />
      </div>

      <div className="grid grid-cols-5 gap-4">
        {images.map((image, index) => (
          <div key={index} onClick={() => setSelectedImage(image)} className="cursor-pointer">
            <Image className="h-[200px] max-w-full rounded-lg" src={image} alt={`Thumbnail ${index + 1}`} />
          </div>
        ))}
      </div>
    </div> */}
    </div>
  );
};

export default Gallery;
