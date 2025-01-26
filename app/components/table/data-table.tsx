/* eslint-disable prefer-const */

'use client';

import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  total: number;
  current: number;
  pageSize: number;
  onChange: (page: number, pageSize: number) => void;
}

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  isLoading?: boolean;
  emptyText?: string;
  pagination?: PaginationProps;
}

export function DataTable<TData, TValue>({
  columns,
  data = [],
  isLoading = false,
  emptyText = 'No results.',
  pagination,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    pageCount: pagination ? Math.ceil(pagination.total / pagination.pageSize) : undefined,
  });

  // Calculate page numbers to display
  const getPageNumbers = () => {
    if (!pagination) return [];
    const totalPages = Math.ceil(pagination.total / pagination.pageSize);
    // const currentPage = pagination.current;

    let pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className='rounded-md border bg-white w-full'>
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody className='h-scree'>
          {/* {table?.getRowModel()?.rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={columns.length}
                className='absolute z-99 text-4xl h-24 w-48 bg-yellow-400 text-center'
              >
                {isLoading ? 'Loading...' : emptyText}
              </TableCell>
            </TableRow>
          )} */}
          {isLoading ? (
            <TableRow>
              <TableCell colSpan={columns.length} className='h-48 text-center'>
                {'Loading...'}
              </TableCell>
            </TableRow>
          ) : table?.getRowModel()?.rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className='h-48 text-center'>
                {emptyText}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {pagination && (
        <div className='flex items-center justify-center space-x-2 py-4'>
          <button
            className='w-9 h-9 px-2 py-1 text-sm border rounded disabled:opacity-50'
            onClick={() => pagination.onChange(pagination.current - 1, pagination.pageSize)}
            disabled={pagination.current <= 1}
          >
            <ChevronLeft size={20} />
          </button>

          {getPageNumbers().map((pageNum) => (
            <button
              key={pageNum}
              className={`w-9 h-9 px-2 py-1 text-sm border rounded ${
                pagination.current === pageNum ? 'bg-gray-200' : ''
              }`}
              onClick={() => pagination.onChange(pageNum, pagination.pageSize)}
            >
              {pageNum}
            </button>
          ))}

          <button
            className='w-9 h-9 px-2 py-1 text-sm border rounded disabled:opacity-50'
            onClick={() => pagination.onChange(pagination.current + 1, pagination.pageSize)}
            disabled={pagination.current >= Math.ceil(pagination.total / pagination.pageSize)}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    </div>
  );
}

// 'use client';

// import {
//   ColumnDef,
//   flexRender,
//   getCoreRowModel,
//   getPaginationRowModel,
//   useReactTable,
// } from '@tanstack/react-table';

// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from '@/components/ui/table';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// interface DataTableProps<TData, TValue> {
//   columns: ColumnDef<TData, TValue>[];
//   data: TData[];
//   isLoading?: boolean;
//   emptyText?: string;
//   pagination?: boolean;
// }

// export function DataTable<TData, TValue>({
//   columns,
//   data = [],
//   isLoading = false,
//   emptyText = 'No results.',
//   pagination = false,
// }: DataTableProps<TData, TValue>) {
//   const table = useReactTable({
//     data,
//     columns,
//     getCoreRowModel: getCoreRowModel(),
//     getPaginationRowModel: getPaginationRowModel(),
//   });

//   return (
//     <div className='rounded-md border bg-white w-full'>
//       <Table>
//         <TableHeader>
//           {table.getHeaderGroups().map((headerGroup) => (
//             <TableRow key={headerGroup.id}>
//               {headerGroup.headers.map((header) => {
//                 return (
//                   <TableHead key={header.id}>
//                     {header.isPlaceholder
//                       ? null
//                       : flexRender(header.column.columnDef.header, header.getContext())}
//                   </TableHead>
//                 );
//               })}
//             </TableRow>
//           ))}
//         </TableHeader>
//         <TableBody>
//           {table?.getRowModel()?.rows?.length ? (
//             table.getRowModel().rows.map((row) => (
//               <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
//                 {row.getVisibleCells().map((cell) => (
//                   <TableCell key={cell.id}>
//                     {flexRender(cell.column.columnDef.cell, cell.getContext())}
//                   </TableCell>
//                 ))}
//               </TableRow>
//             ))
//           ) : (
//             <TableRow>
//               <TableCell colSpan={columns.length} className='h-24 text-center'>
//                 {isLoading ? 'Loading...' : emptyText}
//               </TableCell>
//             </TableRow>
//           )}
//         </TableBody>
//       </Table>

//       {pagination && (
//         <div className='flex items-center justify-center space-x-2 py-4'>
//           {/* <button
//           className='px-2 py-1 text-sm border rounded disabled:opacity-50'
//           onClick={() => table.setPageIndex(0)}
//           disabled={!table.getCanPreviousPage()}
//         >
//           First
//         </button> */}
//           <button
//             className='w-9 h-9 px-2 py-1 text-sm border rounded disabled:opacity-50'
//             onClick={() => table.previousPage()}
//             disabled={!table.getCanPreviousPage()}
//           >
//             <ChevronLeft size={20} />
//           </button>
//           {table.getPageOptions().map((pageIndex) => (
//             <button
//               key={pageIndex}
//               className={`w-9 h-9 px-2 py-1 text-sm border rounded ${
//                 table.getState().pagination.pageIndex === pageIndex ? 'bg-gray-200' : ''
//               }`}
//               onClick={() => table.setPageIndex(pageIndex)}
//             >
//               {pageIndex + 1}
//             </button>
//           ))}
//           {/* <span>...</span> */}
//           <button
//             className='w-9 h-9 px-2 py-1 text-sm border rounded disabled:opacity-50'
//             onClick={() => table.nextPage()}
//             disabled={!table.getCanNextPage()}
//           >
//             <ChevronRight size={20} />
//           </button>
//           {/* <button
//           className='px-2 py-1 text-sm border rounded disabled:opacity-50'
//           onClick={() => table.setPageIndex(table.getPageCount() - 1)}
//           disabled={!table.getCanNextPage()}
//         >
//           Last
//         </button> */}
//         </div>
//       )}
//     </div>
//   );
// }
