/* eslint-disable  @typescript-eslint/no-explicit-any */

'use client';

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { DashButton } from '../molecules/dashButton';
import { useCart } from '@/rest/hooks/useCart';

export default function ShowProductModal({
  openProd,
  setOpenProd,
  data: product,
}: {
  openProd: boolean;
  setOpenProd: (open: boolean) => void;
  data: any;
}) {
  const { addToCart } = useCart();

  return (
    <Dialog open={openProd} onOpenChange={setOpenProd}>
      <DialogContent className='max-w-[50rem] mx-auto rounded-lg p-2 sm:p-4'>
        <DialogHeader className='mb-1'>
          <DialogTitle className='text-base sm:text-lg font-bold'>Add Product to Cart</DialogTitle>
        </DialogHeader>

        <Card className='w-full'>
          <CardContent className='max-h-[70vh] overflow-y-auto scrollbar-thin scrollbar-rounded-lg scrollbar-thumb-gray-300 scrollbar-track-gray-100  grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 p-2 sm:p-4'>
            {/* Image Container */}
            <div className='flex justify-center items-center'>
              <div className='w-full max-w-[250px] aspect-square bg-gray-100 rounded-xl overflow-hidden'>
                <Image
                  src={product?.image}
                  alt={product?.name}
                  className='w-full h-full object-cover'
                  width={250}
                  height={250}
                />
              </div>
            </div>

            {/* Product Details */}
            <div className='flex flex-col justify-between space-y-2'>
              <div>
                <h3 className='text-base sm:text-lg font-bold mb-1'>{product?.name}</h3>
                <p className='text-xs sm:text-sm text-gray-600 mb-2'>{product?.description}</p>

                <div className='space-y-1'>
                  <p className='text-xs sm:text-sm'>
                    Colours: <span className='font-bold'>{product?.colour}</span>
                  </p>
                  <p className='text-xs sm:text-sm'>
                    Price: <span className='font-bold text-base'>₦{product?.price}</span>
                  </p>
                </div>
              </div>

              <DashButton title='Add to Cart' onClick={() => addToCart(product)} />
            </div>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
}
