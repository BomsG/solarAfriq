/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Calendar } from 'lucide-react';

export const DateField = ({
  label,
  name,
  placeholder = 'Select a date',
  formik,
  disabled,
}: {
  label?: string;
  name: string;
  placeholder?: string;
  formik: any;
  style?: React.CSSProperties;
  disabled?: boolean;
}) => {
  const [startDate, setStartDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    setStartDate(date);
    formik.setFieldValue(name, date);
  };

  return (
    <div className='w-full'>
      {label && (
        <label htmlFor={name} className='block mb-2 text-sm font-medium text-gray-900'>
          {label}
        </label>
      )}
      <div className='relative w-full [&_.react-datepicker-wrapper]:w-full'>
        <ReactDatePicker
          selected={formik.values[name] || startDate}
          onChange={handleDateChange}
          onBlur={formik.handleBlur[name]}
          dateFormat='dd/MM/yyyy'
          placeholderText={placeholder}
          className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-10 
            ${disabled && 'cursor-not-allowed'}`}
          disabled={disabled}
          //   style={{ ...style }}
        />
        <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
          <Calendar className='w-5 h-5 text-gray-400' />
        </div>
      </div>
      {formik?.touched[name] && formik?.errors[name] && (
        <div className='text-red-400 mt-1 text-sm'>{formik?.errors[name]}</div>
      )}
    </div>
  );
};
