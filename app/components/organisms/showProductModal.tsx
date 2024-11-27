/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

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
  setOpenProd: any;
  data: any;
}) {
  const { addToCart } = useCart();

  return (
    <Dialog open={openProd} onOpenChange={setOpenProd}>
      <DialogContent className='max-w-[50rem]'>
        <DialogHeader>
          <DialogTitle>Add Product to Cart</DialogTitle>
          <DialogDescription className='hidden'></DialogDescription>
        </DialogHeader>
        <div className='w-full h-[.8px] my-1 bg-slate-200'></div>

        <Card className='w-full max-w-4xl'>
          <CardContent className='grid p-4 grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='h-[20rem] w-[20rem] bg-pink-300 rounded-xl overflow-hidden'>
              <Image
                src={product?.image}
                alt={product?.name}
                className='mb- w-full h[200px] object-cover  '
                width={320}
                height={320}
                // objectFit='cover'
              />
            </div>
            <div className='flex flex-col justify-between'>
              <div className=''>
                <h3 className='font-bold text-lg mb-1'>{product?.name}</h3>
                <p className='mb-6 text-[12px]'>{product?.description}</p>
                <p className='text-sm text-gray mb-1'>
                  Available Colours: <span className='font-bold text-black'>{product?.colour}</span>
                </p>
                <p className='text-sm text-gray'>
                  Price: <span className='font-bold text-black'>₦{product?.price}</span>
                </p>
              </div>
              <div className='space-y-4 mt-4'>
                <DashButton title='Add to Cart' onClick={() => addToCart(product)} />
              </div>
            </div>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
}
