'use client';
import { useForm } from 'react-hook-form';

import { TravelPlanStep3Config } from '@/constants/travelStep3.constants';
import { IregisterFormvalue } from '@/types/registerStep.types';

import { travelTag } from '../../../../../constants/travelStep3Tag.constants';
import NavigateButton from '../NavigateButton/NavigateButton';
import Step3Category from './components/Step3Category/Step3Category';
import Step3Tag from './components/Step3Tag/Step3Tag';

interface IStep3Props {
  config: TravelPlanStep3Config;
}

const Step3What: React.FC<IStep3Props> = ({ config }) => {
  const { handleSubmit, control } = useForm<IregisterFormvalue>();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mt-[57px] flex h-[600px] items-center justify-center '>
          <div className='bg-primaryBlue-100 absolute flex h-[600px] w-full max-w-[969px] justify-center '>
            <div>
              <div className='mt-[14px]'>
                <div className='text-primaryGray-500  mb-[10px] ml-[150px] mt-[60px] text-[30px] font-semibold'>
                  {config.label}
                </div>
                <Step3Category control={control} />
                <div className='text-primaryGray-500  mb-[10px] ml-[93px] mt-[60px] text-[30px] font-semibold'>
                  {config.subLabel}
                </div>
                <div className='mt-[30px] flex justify-center '>
                  {travelTag.map((tag) => (
                    <div key={tag.id}>
                      <Step3Tag control={control} id={tag.id} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <NavigateButton handleSubmit={handleSubmit} onSubmit={onSubmit} />
        </div>
      </form>
    </>
  );
};

export default Step3What;
