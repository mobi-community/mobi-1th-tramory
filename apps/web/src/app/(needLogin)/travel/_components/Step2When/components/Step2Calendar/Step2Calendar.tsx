'use client';
import 'react-datepicker/dist/react-datepicker.css';
import './style.css';

import { useAtom } from 'jotai';
import DatePicker from 'react-datepicker';
import { Control, Controller } from 'react-hook-form';

import { dateRangeAtom } from '@/store';

interface IStep2CalendarProps {
  control: Control;
  name: string;
}

const Step2Calendar: React.FC<IStep2CalendarProps> = ({ control, name }) => {
  const [dateRange, setDateRange] = useAtom(dateRangeAtom);
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
                const newStartDate = update[0].toISOString().split('T')[0]; // 'YYYY-MM-DD' 형식의 시작 날짜
                const newEndDate = update[1].toISOString().split('T')[0]; // 'YYYY-MM-DD' 형식의 끝 날짜

                setDateRange(update);
                field.onChange([newStartDate, newEndDate]);
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
