'use client';
import 'react-datepicker/dist/react-datepicker.css';
import './style.css';

import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import { Control, Controller } from 'react-hook-form';

import { localDateAtom } from '@/store';
import { registerStateAtom } from '@/store/travelState.atom';
import { TravelPlanType } from '@/types/TravelRegister.types';
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
  const [registerState] = useAtom(registerStateAtom);
  const [dateAtom] = useAtom(localDateAtom);
  const [prevDateRange, setPrevDateRange] = useState([
    dateAtom[0],
    dateAtom[1],
  ]);
  const [dateRange, setDateRange] = useState(
    planAtom.startDate ? [dateAtom[0], dateAtom[1]] : prevDateRange
  );

  const [startDate, endDate] = dateRange;

  const start = startDate?.toISOString()?.split('T')[0];
  const end = endDate?.toISOString()?.split('T')[0];

  useEffect(() => {
    setPrevDateRange(dateRange);
    console.log('랜더링됐음');
  }, [dateRange]);

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
              minDate={registerState == 'plan' ? new Date() : undefined}
              onChange={(update) => {
                console.log(update.length);
                if (update.length < 2) {
                  setDateRange([update[0], update[0]]);
                  field.onChange([update[0], update[0]]);
                } else {
                  setDateRange(update);
                  field.onChange(update);
                }
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
