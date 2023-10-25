'use client';
import { useForm } from 'react-hook-form';

import NavigateButton from '../NavigateButton/NavigateButton';
import Step4Dates from './components/Step4Dates/Step4Dates';

const Step4How = ({ label }) => {
  const { handleSubmit, control } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className='mt-[57px] flex h-[600px] items-center justify-center '>
            <div className='bg-primaryBlue-100 absolute flex h-[600px] w-full max-w-[969px] justify-center border'>
              <div className='flex flex-col items-center'>
                <div className='text-primaryGray-500 mt-[80px] text-[30px] font-semibold'>
                  {label} 일자를 선택해 주세요
                </div>
                <Step4Dates control={control} />
              </div>
            </div>
            <NavigateButton handleSubmit={handleSubmit} onSubmit={onSubmit} />
          </div>
        </div>
      </form>
    </>
  );
};

export default Step4How;
