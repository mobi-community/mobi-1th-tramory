'use client';
import { useForm } from 'react-hook-form';

import { useTravelForm } from '../../_hooks/useTravelRegister';
import { IStep2Props } from '../../Travel.type';
import NavigateButton from '../NavigateButton/NavigateButton';
import Step2Calendar from './components/Step2Calendar/Step2Calendar';

const Step2When: React.FC<IStep2Props> = ({ config }) => {
  const { step2onSubmit, setIsDateSelected } = useTravelForm();

  const { handleSubmit, control } = useForm();

  const handleDateSelect = (data: Date[]) => {
    setIsDateSelected(data.length > 0);
  };

  return (
    <form onSubmit={handleSubmit(step2onSubmit)}>
      <div className='mt-[57px] flex h-[600px] items-center justify-center '>
        <div className='bg-primaryBlue-100 absolute flex h-[600px] w-full max-w-[969px] justify-center '>
          <div>
            <div className='text-primaryGray-500 my-3 mt-10 h-[50px] w-full text-center text-[30px] font-semibold'>
              {config.label}
            </div>
            <div className='mt-[14px]'>
              <Step2Calendar
                control={control}
                name='postDate'
                onChange={handleDateSelect}
              />
            </div>
          </div>
        </div>
        <NavigateButton handleSubmit={handleSubmit} onSubmit={step2onSubmit} />
      </div>
    </form>
  );
};

export default Step2When;
