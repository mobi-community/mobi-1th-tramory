'use client';
import { useAtom } from 'jotai';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from 'ui';

import { formModePlanAtom, formModeRecordAtom } from '@/store';
import { registerStateAtom } from '@/store/travelState.atom';

import type { IStep2Props } from '../../Travel.type';
import Step2Calendar from './components/Step2Calendar/Step2Calendar';

const Step2When: React.FC<IStep2Props> = ({ config }) => {
  const [registerState] = useAtom(registerStateAtom);
  const [planAtom, setPlanAtom] = useAtom(formModePlanAtom);
  // eslint-disable-next-line no-unused-vars
  const [recordAtom, setRecordAtom] = useAtom(formModeRecordAtom);
  const { handleSubmit, control } = useForm();
  const [range, setRange] = useState([]);

  // date 값이 제대로 안 들어가고 있음
  const onSubmit = (data) => {
    if (registerState == 'plan') {
      setPlanAtom((prev) => ({
        ...prev,
        startDate: data.postDate[0].toISOString().split('T')[0],
        endDate: data.postDate[1].toISOString().split('T')[0],
      }));
      setRange([data.postDate[0], data.postDate[1]]);
      console.log(data);
      console.log(data.postDate);
    } else {
      setRecordAtom((prev) => ({
        ...prev,
        startDate: data.postDate[0].toISOString().split('T')[0],
        endDate: data.postDate[1].toISOString().split('T')[0],
      }));
    }
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
                range={range}
              />{' '}
              <Button variant='roundednavy' font='xs' className='h-[36px]'>
                중복 확인
              </Button>
            </div>
          </div>
        </div>

        {/* <NavigateButton handleSubmit={handleSubmit} onSubmit={onSubmit} /> */}
      </div>
    </form>
  );
};

export default Step2When;
