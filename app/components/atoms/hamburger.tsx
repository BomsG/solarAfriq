import { useState } from 'react';
import { MouseEventHandler } from 'react';

export default function Hamburger({
  onClick,
}: {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIsActive(!isActive); // Toggle active state
    if (onClick) onClick(event); // Call the external onClick handler if provided
  };

  return (
    <button className='group h-12 w-12 rounded-lg' onClick={handleClick}>
      <div className='grid justify-items-center gap-1.5'>
        <span
          className={`h-[2px] w-8 rounded-full bg-white transition ${
            isActive ? 'rotate-45 translate-y-2' : ''
          }`}
        ></span>
        <span
          className={`h-[2px] w-8 rounded-full bg-white transition ${isActive ? 'scale-x-0' : ''}`}
        ></span>
        <span
          className={`h-[2px] w-8 rounded-full bg-white transition ${
            isActive ? '-rotate-45 -translate-y-2' : ''
          }`}
        ></span>
      </div>
    </button>
  );
}

// import { MouseEventHandler } from 'react';

// export default function Hamburger({
//   onClick,
// }: {
//   onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
// }) {
//   return (
//     <button className='group h-12 w-12 rounded-lg' onClick={onClick}>
//       <div className='grid justify-items-center gap-1.5'>
//         <span className='h-[2px] w-8 rounded-full bg-white transition group-hover:rotate-45 group-hover:translate-y-2'></span>
//         <span className='h-[2px] w-8 rounded-full bg-white group-hover:scale-x-0 transition'></span>
//         <span className='h-[2px] w-8 rounded-full bg-white group-hover:-rotate-45 group-hover:-translate-y-2'></span>
//       </div>
//     </button>
//   );
// }
