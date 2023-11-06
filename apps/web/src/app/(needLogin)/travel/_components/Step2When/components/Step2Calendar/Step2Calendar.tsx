'use client';
import 'react-datepicker/dist/react-datepicker.css';
import './style.css';

import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { Control, Controller } from 'react-hook-form';

import { TravelPlanType } from '@/types/TravelRegister.types';
interface IStep2CalendarProps {
  control: Control;
  name: string;
  planAtom: TravelPlanType;
  range: any;
}

const Step2Calendar: React.FC<IStep2CalendarProps> = ({
  control,
  name,
  planAtom,
  range,
}) => {
  const [dateRange, setDateRange] = useState(
    planAtom.startDate == '' ? [new Date(), null] : [range[0], range[1]]
  );
  const [startDate, endDate] = dateRange;

  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <>
            <DatePicker
              dateFormat='yyyy.MM.dd'
              selected={startDate}
              selectsRange={true}
              startDate={startDate} // 시작 날짜
              endDate={endDate}
              onChange={(update) => {
                setDateRange(update);
                field.onChange(update);
              }}
              inline
            />
            <div className='mt-2 flex'>
              <div className='jusify-center border-primaryGray flex  h-[40px] w-[214px] items-center justify-center border bg-white font-semibold text-[#2c5c84]'>
                start : {startDate && startDate.toLocaleDateString()}
              </div>

              <div className='jusify-center border-primaryGray ml-[13px] flex h-[40px] w-[214px]  items-center justify-center border bg-white font-semibold text-[#2c5c84]'>
                end : {endDate && endDate.toLocaleDateString()}
              </div>
            </div>
          </>
        )}
      />
    </>
  );
};

export default Step2Calendar;
