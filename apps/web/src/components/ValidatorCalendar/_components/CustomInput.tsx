'use client ';
import React, { forwardRef } from 'react';

const CustomInput = forwardRef(({ value, onClick }: any, ref: any) => (
  <div className='flex w-[403px] w-full '>
    <input
      type='text'
      value={value}
      readOnly
      className='ml-12 mt-1 h-8 w-[403px] rounded-sm border border-gray-300 pl-1.5 text-sm text-xs focus:outline-none'
    />
    <div className='absolute ml-[427px] mt-[11px] cursor-pointer'>
      <span
        className='material-icons-outlined '
        onClick={onClick}
        ref={ref}
        style={{ fontSize: '20px', color: 'gray' }}
      >
        calendar_month
      </span>
    </div>
  </div>
));

CustomInput.displayName = 'CustomInput';
export default CustomInput;
