'use client';
import { useForm } from 'react-hook-form';

import NavigateButton from '../NavigateButton/NavigateButton';
import WhenCalener from './components/WhenCalendar/WhenCalendar';

const WhenTravel = ({ title }) => {
  const { handleSubmit, control } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='mt-[57px] flex h-[600px] items-center justify-center '>
        <div className='bg-primaryBlue-100 absolute flex h-[600px] w-full max-w-[969px] justify-center '>
          <div>
            <div className='text-primaryGray-500 ml-[103px] mt-[25px] text-[30px] font-semibold'>
              {title}
            </div>
            <div className='mt-[14px]'>
              <WhenCalener control={control} name='planDate' />
            </div>
          </div>
        </div>
        <NavigateButton handleSubmit={handleSubmit} onSubmit={onSubmit} />
      </div>
    </form>
  );
};

export default WhenTravel;
