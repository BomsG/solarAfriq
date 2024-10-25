'use client';

import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { motion } from 'framer-motion';
import fx from '../images/image_fx_.jpg';
import comm from '../images/commercial-solar.jpg';
import consult from '../images/consult.jpg';
import maintain from '../images/maintain.jpg';

// Define a type for the service
interface Service {
  id: number;
  title: string;
  description: string;
  image: StaticImageData; // Use StaticImageData for imported images
}

const services: Service[] = [
  {
    id: 1,
    title: 'Residential Solar',
    description:
      'Install solar panels at home and save energy costs. We provide tailored residential solar solutions that maximize energy efficiency and reduce your electricity bills.',
    image: fx,
  },
  {
    id: 2,
    title: 'Commercial Solar',
    description:
      'Solar solutions for commercial buildings and enterprises. Our commercial solar services are designed to meet the energy needs of businesses, delivering cost savings and sustainability.',
    image: comm,
  },
  {
    id: 3,
    title: 'Maintenance Services',
    description:
      'We offer comprehensive solar maintenance services. We offer maintenance and monitoring services to ensure your solar systems operate at peak performance.',
    image: maintain,
  },
  {
    id: 4,
    title: 'Consultation',
    description:
      "Our energy storage solutions help you store excess solar energy, allowing you to use it when the sun isn't shining.",
    image: consult,
  },
];

const Services: React.FC = () => {
  const [activeService, setActiveService] = useState<Service>(services[0]);

  return (
    <>
      <h1 className="text-center mt-10 mb-5 text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
        We offer <span className="text-green-500">innovative</span> <br /> solutions
      </h1>
      
      <div className="flex flex-col-reverse md:flex-row justify-between items-center px-5 sm:px-10 lg:px-20">
        {/* Image Display Section */}
        <div className="w-full md:w-1/2 p-3 md:p-5 md:flex justify-center items-center hidden">
          <motion.div
            key={activeService.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={activeService.image}
              alt={activeService.title}
              className="w-full h-full object-cover mb-5 rounded-tr-[30px] sm:rounded-tr-[50px] lg:rounded-tr-[100px] rounded-bl-3xl"
              layout="responsive"
              width={500}
              height={300}
            />
          </motion.div>
        </div>
        {/* Service Details Section */}
        <div className="w-full md:w-1/2 p-3 md:p-5">
          {services.map((service) => (
            <div key={service.id} className="mb-6 md:mb-10">
              <h3
                className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold cursor-pointer ${
                  activeService.id === service.id ? 'text-black relative' : 'text-gray-500'
                }`}
                onClick={() => setActiveService(service)}
              >
                {service.title}
                {activeService.id === service.id && (
                  <>
                    <span className="absolute -bottom-1 left-0 right-0 w-0 h-0.5 bg-green-500 animate-expand"></span>
                  </>
                )}
              </h3>
              {activeService.id === service.id && (
                <motion.p
                  className="text-gray-600 mt-2 text-sm sm:text-base lg:text-lg"
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {service.description}
                </motion.p>
              )}
            </div>
          ))}
        </div>
        {/* Image Display Section */}
        <div className="w-full md:w-1/2 p-3 md:p-5 blockjustify-center items-center md:hidden">
          <motion.div
            key={activeService.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={activeService.image}
              alt={activeService.title}
              className="w-full h-full object-cover mb-5 rounded-tr-[30px] sm:rounded-tr-[50px] lg:rounded-tr-[100px] rounded-bl-3xl"
              layout="responsive"
              width={500}
              height={300}
            />
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes expand {
          0% {
            width: 0;
          }
          100% {
            width: 30%;
          }
        }

        .animate-expand {
          animation: expand 0.3s forwards;
        }
      `}</style>
    </>
  );
};

export default Services;
