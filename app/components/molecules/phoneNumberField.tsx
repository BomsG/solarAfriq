/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import React, { useState } from 'react';
import ReactIntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';
import { AiOutlinePhone } from 'react-icons/ai';

export const PhoneNumberField = ({
  label,
  name,
  formik,
  style,
  disabled,
}: {
  label?: string;
  name: string;
  formik: any;
  style?: React.CSSProperties | undefined;
  disabled?: boolean;
}) => {
  const [phoneValue, setPhoneValue] = useState('');

  // const handlePhoneChange = (isValid: boolean, value: string, countryData: any) => {
  const handlePhoneChange = (isValid: boolean, value: string) => {
    if (isValid) {
      formik.setFieldValue(name, value);
    }
    setPhoneValue(value);
  };

  return (
    <div>
      <label htmlFor={name} className='block mb-2 text-sm font-medium text-gray-900'>
        {label}
      </label>
      <div className='relative'>
        <div className='absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none [&>svg]:text-gray-300 [&>svg]:w-[20px] [&>svg]:h-[20px]'>
          <AiOutlinePhone />
        </div>
        <ReactIntlTelInput
          preferredCountries={['ng', 'gh']}
          defaultCountry='ng'
          value={phoneValue}
          containerClassName={`intl-tel-input ${disabled && 'cursor-not-allowed'} block w-full`}
          inputClassName={`form-control bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
          ${'ps-8'}`}
          onPhoneNumberChange={(status, value) => handlePhoneChange(status, value)}
          fieldId={name}
          disabled={disabled}
          style={{ ...style }}
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
