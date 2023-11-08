'use client';
import { useAtom } from 'jotai';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { formModePlanAtom, formModeRecordAtom, localDateAtom } from '@/store';
import { registerStateAtom } from '@/store/travelState.atom';

import type { IStep2Props } from '../../Travel.type';
import NavigateButton from '../NavigateButton/NavigateButton';
import Step2Calendar from './components/Step2Calendar/Step2Calendar';

const Step2When: React.FC<IStep2Props> = ({ config }) => {
  const [registerState] = useAtom(registerStateAtom);
  const [planAtom, setPlanAtom] = useAtom(formModePlanAtom);
  // eslint-disable-next-line no-unused-vars
  const [recordAtom, setRecordAtom] = useAtom(formModeRecordAtom);
  const { handleSubmit, control } = useForm();
  // eslint-disable-next-line no-unused-vars
  const [dateAtom, setDateAtom] = useAtom(localDateAtom);
  const [prevDates, setPrevDates] = useState({
    startDate: dateAtom[0],
    endDate: dateAtom[1],
  });

  const onSubmit = (data) => {
    const newStartDate =
      data?.postDate?.[0]?.toISOString()?.split('T')[0] || prevDates.startDate;
    const newEndDate =
      data?.postDate?.[1]?.toISOString()?.split('T')[0] || prevDates.endDate;

    if (registerState == 'plan') {
      setPlanAtom((prev) => ({
        ...prev,
        startDate: newStartDate,
        endDate: newEndDate,
      }));
      setDateAtom([new Date(newStartDate), new Date(newEndDate)]);
    } else {
      setRecordAtom((prev) => ({
        ...prev,
        startDate: newStartDate,
        endDate: newEndDate,
      }));
      setDateAtom([new Date(newStartDate), new Date(newEndDate)]);
    }
    setPrevDates({ startDate: newStartDate, endDate: newEndDate });
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
              <Step2Calendar
                control={control}
                name='postDate'
                planAtom={planAtom}
              />
            </div>
          </div>
        </div>
        <NavigateButton handleSubmit={handleSubmit} onSubmit={onSubmit} />
      </div>
    </form>
  );
};

export default Step2When;
