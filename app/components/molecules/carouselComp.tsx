'use client';
import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';

interface CarouselProps {
  images: { src: StaticImageData; alt: string }[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const imagesPerSlide = 2; // Default number of images per slide
  const isSmallScreen = typeof window !== 'undefined' && window.innerWidth < 768;

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide
      ? Math.ceil(images.length / imagesPerSlide) - 1
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === Math.ceil(images.length / imagesPerSlide) - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const displayedImages = images.slice(
    currentIndex * (isSmallScreen ? 1 : imagesPerSlide),
    (currentIndex + 1) * (isSmallScreen ? 1 : imagesPerSlide)
  );

  return (
    <div className='relative w-full mx-auto'>
      {/* Image Display */}
      <div className='relative w-full h-[250px] md:h-[500px] flex justify-center items-center gap-x-4 overflow-hidden'>
        {displayedImages.map((image, index) => (
          <div
            key={index}
            className='relative w-full h-full transition-all duration-700 ease-in-out'
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className='w-full h-auto object-cover rounded-xl'
            />
          </div>
        ))}
      </div>

      {/* Left Button */}
      <button
        onClick={goToPrevious}
        className='absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/30 text-white p-2 rounded-full hover:bg-white/50 focus:bg-white/50 transition-all duration-300'
      >
        ❮
      </button>

      {/* Right Button */}
      <button
        onClick={goToNext}
        className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/30 text-white p-2 rounded-full hover:bg-white/50 focus:bg-white/50 transition-all duration-300'
      >
        ❯
      </button>

      {/* Dots Indicator */}
      <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2'>
        {Array.from({
          length: Math.ceil(images.length / (isSmallScreen ? 1 : imagesPerSlide)),
        }).map((_, index) => (
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
