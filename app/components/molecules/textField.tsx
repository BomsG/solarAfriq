/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

export const TextField = ({
  label,
  type = 'text',
  name,
  placeholder,
  icon,
  formik,
  style,
  disabled,
}: {
  label?: string;
  type?: string;
  name: string;
  placeholder?: string;
  icon?: React.ReactNode;
  formik: any;
  style?: React.CSSProperties | undefined;
  disabled?: boolean;
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputType = type === 'password' && showPassword ? 'text' : type;
  return (
    <div>
      <label htmlFor='firstName' className='block mb-2 text-sm font-medium text-gray-900 '>
        {label}
      </label>
      <div className='relative'>
        <div className='absolute inset-y-0 start-0 top-0 flex items-center ps-2 pointer-events-none [&>svg]:text-gray-300 [&>svg]:w-[20px] [&>svg]:h-[20px]'>
          {icon}
        </div>
        <div
          className='absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 cursor-pointer [&>svg]:text-gray-400 [&>svg]:w-[20px] [&>svg]:h-[20px]'
          onClick={() => setShowPassword(!showPassword)}
        >
          {type === 'password' ? showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye /> : null}
        </div>
        <input
          type={inputType}
          name={name}
          value={formik.values[name]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
          ${icon && 'ps-8'} ${disabled && 'cursor-not-allowed'} ${type === 'password' && 'pr-9'}`}
          placeholder={placeholder}
          style={{ ...style }}
          disabled={disabled ? true : false}
        />
      </div>
      <div>
        {formik?.touched[name] && formik?.errors[name] && (
          <div className='text-red-400 mt-1 text-sm'>{formik?.errors[name]}</div>
        )}
      </div>
    </div>
  );
};
