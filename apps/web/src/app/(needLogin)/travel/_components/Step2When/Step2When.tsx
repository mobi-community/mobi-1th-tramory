'use client';
import { useAtom } from 'jotai';
import { useForm } from 'react-hook-form';

import type { TravelPlanStep2Config } from '@/constants/travelStep2.constants';
import { formModeAtom } from '@/store';
import { TravelPlanType } from '@/types/travelPlan.types';

import NavigateButton from '../NavigateButton/NavigateButton';
import Step2Calendar from './components/Step2Calendar/Step2Calendar';

interface IStep2Props {
  config: TravelPlanStep2Config;
}

const Step2When: React.FC<IStep2Props> = ({ config }) => {
  const [formAtom, setFormAtom] = useAtom(formModeAtom);
  const { handleSubmit, control } = useForm<TravelPlanType>({
    defaultValues: formAtom,
  });
  const onSubmit = (data) => {
    setFormAtom((prev) => ({
      ...prev,
      startDate: data.postDate[0],
      endDate: data.postDate[1],
    }));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='mt-[57px] flex h-[600px] items-center justify-center '>
        <div className='bg-primaryBlue-100 absolute flex h-[600px] w-full max-w-[969px] justify-center '>
          <div>
            <div className='text-primaryGray-500 ml-[120px] mt-[25px] text-[30px] font-semibold'>
              {config.label}
            </div>
            <div className='mt-[14px]'>
              <Step2Calendar control={control} name='postDate' />
            </div>
          </div>
        </div>
        <NavigateButton handleSubmit={handleSubmit} onSubmit={onSubmit} />
      </div>
    </form>
  );
};

export default Step2When;
