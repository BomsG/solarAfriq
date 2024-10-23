"use client"
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const ShapeAnimation: React.FC = () => {
  const controls = useAnimation();

  useEffect(() => {
    // Start the animation when the page loads
    controls.start({
      y: 0,     // Moves to the center
      opacity: 1,  // Becomes visible
      scale: 1,    // Grows to full size
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    });

    // After 2 seconds, animate the shape to disappear
    const timeout = setTimeout(() => {
      controls.start({
        y: -200,  // Moves up and off the screen
        opacity: 0,  // Fades out
        scale: 0.5,   // Shrinks the size
        transition: {
          duration: 0.8,
          ease: "easeInOut",
        },
      });
    }, 2000);  // 2-second delay before disappearing

    return () => clearTimeout(timeout);  // Cleanup timeout on unmount
  }, [controls]);

  return (
    <motion.div
      animate={controls}
      initial={{ y: 200, opacity: 0, scale: 0.5 }}  // Starts below the screen, invisible, and small
      className="fixed bottom-0 left-0 right-0 z-50 mx-auto bg-green-500 rounded-full w-32 h-32"
      style={{ width: '8rem', height: '8rem' }}  // Explicit width and height for the shape
    />
  );
};

export default ShapeAnimation;
