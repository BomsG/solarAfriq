"use client"
import { useState, useEffect } from "react";

const Counter = ({ target }: { target: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    if (start === end) return;

    let incrementTime = Math.abs(Math.floor(2000 / end)); // 2 seconds total duration
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer); // Cleanup on unmount
  }, [target]);

  return <span>{count}</span>;
};

const StatsSection = () => {
  return (
    <div className="text-center px-[150px]">
      <h1 className='text-[55px] font-semibold'>We are experts in the world of  <br /> <span className='text-green-500'>solar energy</span></h1>
      <p className='mb-10  text-2xl font-semibold mt-5'>We offer a range of panels to choose from</p>
   
    </div>
  );
};

export default StatsSection;
