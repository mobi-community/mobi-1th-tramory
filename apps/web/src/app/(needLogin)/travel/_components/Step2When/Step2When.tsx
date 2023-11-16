'use client';

import { useAtom, useSetAtom } from 'jotai';
import { useForm } from 'react-hook-form';

import { formModePlanAtom, formModeRecordAtom } from '@/store';
import { getStepBarAtom } from '@/store/stepNavbar.atom';
import { registerStateAtom } from '@/store/travelState.atom';

import { IStep2Props } from '../../Travel.type';
import NavigateButton from '../NavigateButton/NavigateButton';
import { useDateSelection } from '../NavigateButton/use-data-selection';
import Step2Calendar from './components/Step2Calendar/Step2Calendar';

const Step2When: React.FC<IStep2Props> = ({ config }) => {
  const [registerState] = useAtom(registerStateAtom);
  const setPlanAtom = useSetAtom(formModePlanAtom);
  const setRecordAtom = useSetAtom(formModeRecordAtom);
  const setStepbarAtom = useSetAtom(getStepBarAtom(2));
  const { handleSubmit, control } = useForm();
  const { isDateSelected, setIsDateSelected } = useDateSelection();

  const onSubmit = (data) => {
    console.log('data', data);
    if (isDateSelected) {
      setStepbarAtom(true);
      registerState == 'plan'
        ? setPlanAtom((prev) => ({
            ...prev,
            startDate: data.postDate[0].toISOString().split('T')[0],
            endDate: data.postDate[1].toISOString().split('T')[0],
          }))
        : setRecordAtom((prev) => ({
            ...prev,
            startDate: data.postDate[0].toISOString().split('T')[0],
            endDate: data.postDate[1].toISOString().split('T')[0],
          }));
    } else {
      alert('날짜를 선택해주세요');
    }
  };

  const handleDateSelect = (data: Date[]) => {
    setIsDateSelected(data.length > 0);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='mt-[57px] flex h-[600px] items-center justify-center '>
        <div className='bg-primaryBlue-100 absolute flex h-[600px] w-full max-w-[969px] justify-center '>
          <div>
            <div className='text-primaryGray-500 my-3 h-[50px] w-full text-center text-[30px] font-semibold'>
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
        <NavigateButton handleSubmit={handleSubmit} onSubmit={onSubmit} />
      </div>
    </form>
  );
};

export default Step2When;
