import ArrowRight from './arrowRight';

export default function Button({ content, withArrow }: { content: string; withArrow?: boolean }) {
  return (
    <div className='flex justify-center items-center gap-2 cursor-pointer hover:before:bg-redborder-red-500 relative h-[50px] w-42 overflow-hidden bg-white px-3 text-black font-semibold rounded-xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-green-500 before:transition-all before:duration-500 hover:text-white [&_svg]:hover:fill-white hover:shadow-red-500 hover:before:left-0 hover:before:w-full'>
      <span className='relative z-10'>{content}</span>
      {withArrow && (
        <span className='hover:text-white'>
          <ArrowRight />
        </span>
      )}
    </div>
  );
}
