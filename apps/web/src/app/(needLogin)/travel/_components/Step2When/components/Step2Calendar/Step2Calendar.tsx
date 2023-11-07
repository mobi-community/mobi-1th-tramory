'use client';
import 'react-datepicker/dist/react-datepicker.css';
import './style.css';

import { useAtom } from 'jotai';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { Control, Controller } from 'react-hook-form';

import { localDateAtom } from '@/store';
import { TravelPlanType } from '@/types/TravelRegister.types';
import { formattedDateFunc } from '@/utils/formattedDate';
interface IStep2CalendarProps {
  control: Control;
  name: string;
  planAtom: TravelPlanType;
}

const Step2Calendar: React.FC<IStep2CalendarProps> = ({
  control,
  name,
  planAtom,
}) => {
  // date 데이터 뒤로가기 해도 유지, date타입 오류 해결해주기
  const [dateAtom] = useAtom(localDateAtom);
  const [dateRange, setDateRange] = useState(
    planAtom.startDate == '' ? [new Date(), null] : [dateAtom[0], dateAtom[1]]
  );

  const [startDate, endDate] = dateRange;

  const start = formattedDateFunc(startDate);
  const end = formattedDateFunc(endDate);

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
                start :{start}
              </div>

              <div className='jusify-center border-primaryGray ml-[13px] flex h-[40px] w-[214px]  items-center justify-center border bg-white font-semibold text-[#2c5c84]'>
                end : {end}
              </div>
            </div>
          </>
        )}
      />
    </>
  );
};

export default Step2Calendar;
