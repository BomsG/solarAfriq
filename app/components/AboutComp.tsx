import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import consult from "../images/consult.jpg"
import img from '../images/image1.jpg';

const AboutComp = () => {
  return (
    <div>
      <section className=' relative px-5 md:px-[150px]'>
        <div className='w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto'>
          <div className='w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1'>
            <div className='w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last'>
              <div className='pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex'>
                <Image className=' rounded-xl object-cover' src={consult} alt='about Us image' />
              </div>
              <Image
                className='sm:ml-0 ml-auto rounded-xl object-cover'
                src={img}
                alt='about Us image'
              />
            </div>
            <div className='w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex'>
              <div className='w-full flex-col justify-center items-start gap-8 flex'>
                <div className='w-full flex-col justify-start lg:items-start items-center gap-3 flex'>
                  <h2 className='text-gray-900 text-[18px] sm:text-[30px] md:text-[40px] font-bold leading-snug lg:text-start text-center'>
                    Energizing Our Installations for a Brighter Future
                  </h2>
                  <p className='text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center'>
                    Every solar project we&apos;ve undertaken has been a collaborative effort, where
                    each person involved has contributed to shaping a sustainable future. Together,
                    we&apos;ve not only installed solar solutions but also built lasting
                    relationships that illuminate our journey toward a greener, brighter world.
                    These connections define our success and drive our mission forward.
                  </p>
                </div>
                <div className='w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex'>
                  <div className='flex-col justify-start items-start inline-flex'>
                    <h3 className='text-gray-900 text-4xl font-bold font-manrope leading-normal'>
                      33+
                    </h3>
                    <h6 className='text-gray-500 text-base font-normal leading-relaxed'>
                      Years of Experience
                    </h6>
                  </div>
                  <div className='flex-col justify-start items-start inline-flex'>
                    <h4 className='text-gray-900 text-4xl font-bold font-manrope leading-normal'>
                      125+
                    </h4>
                    <h6 className='text-gray-500 text-base font-normal leading-relaxed'>
                      Successful Projects
                    </h6>
                  </div>
                  <div className='flex-col justify-start items-start inline-flex'>
                    <h4 className='text-gray-900 text-4xl font-bold font-manrope leading-normal'>
                      52+
                    </h4>
                    <h6 className='text-gray-500 text-base font-normal leading-relaxed'>
                      Happy Clients
                    </h6>
                  </div>
                </div>
              </div>
              <Link href='/About'>
                <button className='sm:w-fit w-full px-3.5 py-2 bg-green-500 hover:bg-black transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex'>
                  <span className='px-1.5 text-white text-sm font-medium leading-6'>Read More</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutComp;
