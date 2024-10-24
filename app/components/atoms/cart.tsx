import { BiCart } from 'react-icons/bi';

export default function Cart({ count }: { count: number }) {
  return (
    <div className='relative'>
      {count > 0 && (
        <div className='absolute -right-2 -top-2 bg-white rounded-full py-[2px] px-[6px] font-semibold text-[9px]'>
          {count}
        </div>
      )}
      <BiCart color='white' size={20} />
    </div>
  );
}
