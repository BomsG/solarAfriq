import Image from 'next/image';
import teamImage from '../images/real2.jpg';
import vision from '../images/real4.jpg';
import Services from '../components/Services';
import { FaArrowRight } from 'react-icons/fa6';
import Values from '../components/Values';
import Link from 'next/link';
import PublicLayout from '../components/layout/publicLayout';

const AboutUs: React.FC = () => {
  return (
    <PublicLayout>
      <section>
        <div className='h-[120px] bg-black'></div>
        <div className='container mx-auto py-16 px-6 sm:px-12 lg:px-24'>
          <h1 className='text-[40px] sm:text-[50px] md:text-[60px] mb-8 leading-[50px] sm:leading-[60px] md:leading-[80px]'>
            Pioneering sustainable <br /> solar solutions worldwide
          </h1>
          <div className='flex flex-col lg:flex-row items-center mb-12 mt-5'>
            <div className='lg:w-1/2 lg:pl-0 mb-20'>
              <p className='text-lg leading-relaxed text-gray-700 mb-6'>
                Solar Africa is a premier digital marketplace designed to address the growing demand
                for solar energy across Africa by delivering high-quality services. The platform
                connects skilled solar installers with Photovoltaic (PV) installation contracts,
                while also offering customers access to a wide range of premium, durable solar
                installation materials. It also allows an individual to sign-up as an installer,
                view his or her installer dashboard, track service requests and view contact of
                clients he or she has been able to work with over time.
              </p>
              <Link href='/products'>
                <button className='relative h-[50px] w-40 overflow-hidden shadow-xl px-3 text-black font-semibold rounded-full transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-green-500 before:transition-all before:duration-500 hover:text-white border hover:before:left-0 hover:before:w-full'>
                  <span className='relative z-10 flex gap-2 items-center text-sm'>
                    View Products
                    <span className='bg-green-500 rounded-full p-1'>
                      <FaArrowRight />
                    </span>
                  </span>
                </button>
              </Link>
            </div>
            <div className='lg:w-1/2 mb-8 lg:mb-0'>
              <Image
                src={teamImage}
                alt='Our Team'
                className='shadow-xl'
                width={600}
                height={400}
              />
            </div>
          </div>
          <Image
            src={vision}
            alt='Vision'
            className=' mb-[0px]  md:mb-[30px] lg:-mb-[350px] pl-0 sm:pl-20'
            width={600}
            height={400}
          />
          <div className='bg-black flex justify-center lg:justify-end text-white py-16 h-[100vh] lg:h-[600px]'>
            <div className='pr-4 lg:pr-[100px] max-w-[500px]'>
              <h1 className='text-2xl mt-5 text-center lg:text-left'>Our Vision</h1>
              <h2 className='py-5 text-[35px] sm:text-[45px] md:text-[55px] text-center lg:text-left'>
                A world powered by <br />
                <span className='text-green-500'>solar energy</span>
              </h2>
              <p className='text-center lg:text-left px-5 md:px-0'>
                Lorem ipsum dolor sit amet consectetur at lacus erat lacus{' '}
                <br className='hidden md:block' />
                magna ligula porta nulla volutpat posuere in sed ultrices
                <br className='hidden md:block' /> enim ad minim veniam, quis nostrud exercitation
                <br className='hidden md:block' /> ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
              </p>
            </div>
          </div>
          <Values />
          <Services />
        </div>
      </section>
    </PublicLayout>
  );
};

export default AboutUs;
