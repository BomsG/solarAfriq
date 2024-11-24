/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

export const TextArea = ({
  label,
  // type = 'text',
  name,
  placeholder,
  icon,
  formik,
  style,
  disabled,
}: {
  label?: string;
  name: string;
  placeholder?: string;
  icon?: React.ReactNode;
  formik: any;
  style?: React.CSSProperties | undefined;
  disabled?: boolean;
}) => {
  return (
    <div>
      <label htmlFor='firstName' className='block mb-2 text-sm font-medium text-gray-900 '>
        {label}
      </label>
      <div className='relative'>
        <div className='absolute inset-y-0 start-0 top-0 flex items-center ps-2 pointer-events-none [&>svg]:text-gray-300 [&>svg]:w-[20px] [&>svg]:h-[20px]'>
          {icon}
        </div>
        <textarea
          name={name}
          value={formik.values[name]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
          ${icon && 'ps-8'} ${disabled && 'cursor-not-allowed'} `}
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
