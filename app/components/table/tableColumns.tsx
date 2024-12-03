'use client';

/* eslint-disable @typescript-eslint/no-explicit-any */

import { ColumnDef } from '@tanstack/react-table';

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@radix-ui/react-dropdown-menu';
import { ChevronDown, Ellipsis } from 'lucide-react';

export type Payment = {
  id: string;
  amount: number;
  status: 'pending' | 'processing' | 'success' | 'failed';
  email: string;
};

export type TechniciansProps = {
  technicianId: string;
  email: string;
  location: string;
  // role: 'electrician' | 'installer';
  role: string;
  createdAt: string;
};

export type ProductsProps = {
  id: string;
  image: string;
  name: string;
  colour: string;
  price: string;
  edit: any;
};

export const allTechniciansCol = (
  handleAccept: (id: string) => void,
  handleReject: (id: string) => void
): ColumnDef<TechniciansProps>[] => [
  {
    accessorKey: 'technicianId',
    header: 'Technician ID',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'phone',
    header: 'Phone',
  },
  {
    accessorKey: 'location',
    header: 'Location',
  },
  {
    accessorKey: 'role',
    header: 'Role',
  },
  {
    accessorKey: 'createdAt',
    header: 'Registered On',
  },
  {
    accessorKey: 'action',
    header: 'Actions',
    cell: ({ row }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className='h-8 w-8 p-0 focus:outline-none text-gray-500'>
              <span className='sr-only'>Open menu</span>
              <Ellipsis size={20} />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            sideOffset={5}
            className='bg-white border rounded-md shadow-lg w-28 focus:outline-none'
          >
            {/* <Link href={`/dashboard/campaigns/${row.original.id}`}>
              <DropdownMenuItem className='cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none'>
                View Campaign
              </DropdownMenuItem>
            </Link> */}
            <DropdownMenuItem
              className='cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none '
              onClick={() => handleAccept(row.original.technicianId)}
            >
              Accept
            </DropdownMenuItem>
            <DropdownMenuItem
              className='cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none'
              onClick={() => handleReject(row.original.technicianId)}
            >
              Reject
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export const allProductsCol = (
  handleEdit: (id: string) => void,
  handleDelete: (id: string, name: string) => void
): ColumnDef<ProductsProps>[] => [
  // {
  //   accessorKey: 'id',
  //   header: '',
  //   cell: () => null,
  // },
  {
    accessorKey: 'image',
    header: 'Image',
    cell: ({ row }) => <img src={row.original.image} className='rounded-md w-[40px] h-[40px]' />,
  },
  {
    accessorKey: 'name',
    header: 'Product Name',
  },
  {
    accessorKey: 'colour',
    header: 'Colour',
  },
  {
    accessorKey: 'price',
    header: 'Price',
  },
  {
    accessorKey: 'action',
    header: '',
    cell: ({ row }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className='h-8  p-0 focus:outline-none text-gray-500'>
              <span className='sr-only'>Open menu</span>
              {/* <Ellipsis size={20} /> */}
              <div className='flex items-center gap-4 border rounded-md bg-white py-1 px-2'>
                <span>More</span> <ChevronDown size={20} />
              </div>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            sideOffset={5}
            className='bg-white border rounded-md shadow-lg w-28 focus:outline-none'
          >
            {/* <Link href={`/dashboard/campaigns/${row.original.id}`}>
              <DropdownMenuItem className='cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none'>
                View Campaign
              </DropdownMenuItem>
            </Link> */}
            <DropdownMenuItem
              className='cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none '
              onClick={() => handleEdit(row.original.id)}
            >
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem
              className='cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none'
              onClick={() => handleDelete(row.original.id, row.original.name)}
            >
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
  // {
  //   accessorKey: 'edit',
  //   header: '',
  //   cell: ({ row }) => (
  //     <Link href={`/dashboard/products/${row.original.id}`}>
  //       <span className='text-blue-400 underline'>edit</span>
  //     </Link>
  //   ),
  // },
];

export const allOrdersCol = (
  handleEdit: (id: string) => void,
  handleDelete: (id: string, name: string) => void
): ColumnDef<ProductsProps>[] => [
  {
    accessorKey: 'id',
    header: '',
    cell: () => null,
  },

  {
    accessorKey: 'name',
    header: 'Product Name',
  },
  {
    accessorKey: 'colour',
    header: 'Colour',
  },
  {
    accessorKey: 'price',
    header: 'Price',
  },
  {
    accessorKey: 'action',
    header: '',
    cell: ({ row }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className='h-8  p-0 focus:outline-none text-gray-500'>
              <span className='sr-only'>Open menu</span>
              {/* <Ellipsis size={20} /> */}
              <div className='flex items-center gap-4 border rounded-md bg-white py-1 px-2'>
                <span>More</span> <ChevronDown size={20} />
              </div>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            sideOffset={5}
            className='bg-white border rounded-md shadow-lg w-28 focus:outline-none'
          >
            {/* <Link href={`/dashboard/campaigns/${row.original.id}`}>
              <DropdownMenuItem className='cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none'>
                View Campaign
              </DropdownMenuItem>
            </Link> */}
            <DropdownMenuItem
              className='cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none '
              onClick={() => handleEdit(row.original.id)}
            >
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem
              className='cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none'
              onClick={() => handleDelete(row.original.id, row.original.name)}
            >
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
  // {
  //   accessorKey: 'edit',
  //   header: '',
  //   cell: ({ row }) => (
  //     <Link href={`/dashboard/products/${row.original.id}`}>
  //       <span className='text-blue-400 underline'>edit</span>
  //     </Link>
  //   ),
  // },
];
