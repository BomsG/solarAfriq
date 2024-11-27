import { Skeleton } from '@/components/ui/skeleton';

export default function ProductSkeleton({ arrayNumber = 1 }: { arrayNumber?: number }) {
  return (
    <div className='w-full flex flex-col justify-between sm:flex-row lg:flex-wra gap-3'>
      <div className='w-full mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
        {new Array(arrayNumber).fill(1).map((_, index) => (
          <div
            className='w-full flex flex-col justify-center items-center space-y-3'
            // key={index.toString + _}
            key={index}
          >
            <Skeleton className='h-[300px] w-full sm:w-[270px] flex justify-center items-center rounded-xl bg-[#4c084125] p-4'>
              <div className='space-y- w-full flex flex-col justify-start items-center'>
                <Skeleton className='h-[150px] w-full bg-white mb-4' />
                <Skeleton className='h-4 w-[200px] bg-white mt-4' />
                <Skeleton className='h-4 w-[100px] bg-white mt-4' />
              </div>
            </Skeleton>
          </div>
        ))}
      </div>
    </div>
  );
}
