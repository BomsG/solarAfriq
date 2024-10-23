"use client";
import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
// import { FaArrowRight } from "react-icons/fa6";

interface CarouselProps {
  images: { src: StaticImageData; alt: string }[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full mx-auto ">
      {/* Image Display */}
      <div className="relative w-full h-[300px] md:h-[500px] overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
              index === currentIndex ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
            }`}
          >
            {index === currentIndex && (
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover rounded-xl "
              />
            )}
          </div>
        ))}
      </div>

      {/* Left Button */}
      <button
        onClick={goToPrevious}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/30 text-white p-2 rounded-full hover:bg-white/50 focus:bg-white/50 transition-all duration-300"
      >
        ❮
      </button>

      {/* Right Button */}
      <button
        onClick={goToNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/30 text-white p-2 rounded-full hover:bg-white/50 focus:bg-white/50 transition-all duration-300"
      >
        ❯
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              index === currentIndex ? 'bg-white scale-110' : 'bg-gray-400'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
