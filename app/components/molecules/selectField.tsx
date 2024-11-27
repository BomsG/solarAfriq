/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

export const SelectField = ({
  name,
  label,
  options,
  formik,
  icon,
}: {
  name: string;
  label?: string;
  options: { label: string; value: string }[];
  formik: any;
  icon?: React.ReactNode;
}) => {
  return (
    <div>
      <label htmlFor='gender' className='block mb-2 text-sm font-medium text-gray-900 '>
        {label}
      </label>
      <div className='relative'>
        <div className='absolute inset-y-0 start-0 top-0 flex items-center ps-2 pointer-events-none [&>svg]:text-gray-300 [&>svg]:w-[20px] [&>svg]:h-[20px]'>
          {icon}
        </div>
        <select
          name={name}
          className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-4 
          ${icon && 'ps-8'}`}
          value={formik.values[name]}
          onChange={formik.handleChange}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        {formik?.touched[name] && formik?.errors[name] && (
          <div className='text-red-400 mt-1 text-sm'>{formik?.errors[name]}</div>
        )}
      </div>
    </div>
  );
};
