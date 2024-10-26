import Carousel from '../CarouselComp';
import hero from '../../images/image1.jpg';
import hero2 from '../../images/image2.jpg';
import hero3 from '../../images/image3.jpg';
import hero4 from '../../images/image4.jpg';
// import ArrowRight from '../atoms/arrowRight';
import Button from '../atoms/button';

export default function CarouselSection() {
  const images = [
    { src: hero, alt: 'Image 1' },
    { src: hero2, alt: 'Image 2' },
    { src: hero3, alt: 'Image 3' },
    { src: hero4, alt: 'Image 3' },
  ];
  return (
    <div className='mt-12 sm:mt-24'>
      <div className='text-center p-2 sm:px-10 md:px-[150px]'>
        <h1 className='text-[22px] sm:text-[45px] md:text-[55px] font-bold leading-11'>
          We are experts in the world of <br className='' />
          <span className='text-green-500'>solar energy</span>
        </h1>
        <p className='mb-2 sm:mb-10 text-[14px] md:text-xl font- mt-5'>
          We offer a range of panels to choose from
        </p>
      </div>
      <div className='px-2 sm:px-10 md:px-[150px]'>
        <Carousel images={images} />
      </div>

      <div className='flex justify-center mt-5'>
        {/* <button className='shadow text-red hover:before:bg-redborder-red-500 relative h-[50px] w-40 overflow-hidden bg-white px-3 text-black font-semibold rounded-xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-green-500 before:transition-all before:duration-500 hover:text-white hover:shadow-red-500 hover:before:left-0 hover:before:w-full'>
          <span className='relative z-10 flex gap-2 items-center'>
            View Products
            <ArrowRight />
          </span>
        </button> */}
        <Button content='View Products' withArrow={true} />
      </div>
    </div>
  );
}
