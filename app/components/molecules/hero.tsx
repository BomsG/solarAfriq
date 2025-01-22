import Image from 'next/image';
import hero from '../../images/hero2.jpg';
import Link from 'next/link';
import ArrowRight from '../atoms/arrowRight';

export default function Hero() {
  return (
    <section className='relative h-[100vh]'>
      <div className='absolute top-0 left-0 h-[100vh] w-full bg-black opacity-50 z-10'></div>
      <Image src={hero} alt='hero' className='h-[100vh] w-full absolute z-0' />

      <div className='relative h-full z-20 px-5 sm:px-10 md:px-[150px]'>
        <div className='flex flex-col justify-center items-start h-full'>
          <div className='text-white w-full min-[1024px]:w-[90%] g:w-[70%]'>
            <h1 className='text-[35px] min-[400px]:text-[35px] lg:text-[70px] font-semibold leading-[1.3]'>
              Innovative solar solutions for sustainable living
            </h1>
            <p className='text-[14px] sm:text-[16px] md:text-[18px] w-full lg:w-[65%] mt-3 font-light'>
              Through SolarAfriq, we aim to drive industry growth, promote sustainability, and
              contribute to Nigeria&apos;s energy transition.
            </p>
            <Link href='/about'>
              <p className='text-sm text-green-100 font-bold mt-5'>Read More</p>
            </Link>
            <div className='flex flex-wrap gap-5 items-center mt-20'>
              <Link href='/installer'>
                <button className='bg-white text-black rounded-xl px-5 py-2 text-[16px] font-semibold flex items-center gap-2'>
                  Connect with solar installer
                  <span className='bg-green-500 p-2 rounded-full'>
                    <ArrowRight />
                  </span>
                </button>
              </Link>
              <button className='text-[16px] font-semibold flex items-center gap-2 hover:aminate-bounce'>
                Explore Products
                <ArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
