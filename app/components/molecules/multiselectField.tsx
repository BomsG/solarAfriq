/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React from 'react';
import Select from 'react-select';

export const MultiselectField = ({
  label,
  name,
  placeholder = 'Select...',
  options,
  formik,
  // style,
  isDisabled = false,
}: {
  label?: string;
  name: string;
  placeholder?: string;
  options: { value: string; label: string }[];
  formik: any;
  // style?: React.CSSProperties | undefined;
  isDisabled?: boolean;
}) => {
  const customStyles = {
    control: (base: any, state: any) => ({
      ...base,
      backgroundColor: '#f9fafb',
      borderColor: state.isFocused ? '#3b82f6' : '#d1d5db',
      borderWidth: '1px',
      boxShadow: state.isFocused ? '0 0 0 2px rgba(59, 130, 246, 0.5)' : 'none',
      borderRadius: '0.5rem',
      // paddingLeft: '0.5rem',
      paddingLeft: '0',
      cursor: isDisabled ? 'not-allowed' : 'default',
    }),
    placeholder: (base: any) => ({
      ...base,
      color: '#6b7280',
      fontSize: '0.875rem',
    }),
    multiValue: (base: any) => ({
      ...base,
      backgroundColor: '#e5e7eb',
      borderRadius: '0.375rem',
    }),
    multiValueLabel: (base: any) => ({
      ...base,
      color: '#374151',
    }),
    multiValueRemove: (base: any) => ({
      ...base,
      color: '#9ca3af',
      ':hover': {
        backgroundColor: '#f3f4f6',
        color: '#374151',
      },
    }),
  };

  return (
    <div>
      {label && (
        <label htmlFor={name} className='block mb-2 text-sm font-medium text-gray-900'>
          {label}
        </label>
      )}
      <Select
        id={name}
        name={name}
        isMulti
        options={options}
        placeholder={placeholder}
        isDisabled={isDisabled}
        styles={customStyles}
        value={formik.values[name]}
        onChange={(selected) => formik.setFieldValue(name, selected)}
        onBlur={() => formik.setFieldTouched(name, true)}
        className='block w-full'
      />
      {formik.touched[name] && formik.errors[name] && (
        <div className='text-red-400 mt-1 text-sm'>{formik.errors[name]}</div>
      )}
    </div>
  );
};
