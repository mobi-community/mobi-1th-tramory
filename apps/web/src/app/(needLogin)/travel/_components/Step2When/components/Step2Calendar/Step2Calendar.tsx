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
  // eslint-disable-next-line no-unused-vars
  onChange: (data: Date[]) => void;
}

const Step2Calendar: React.FC<IStep2CalendarProps> = ({
  control,
  name,
  onChange,
}) => {
  const [dateRange, setDateRange] = useAtom(dateRangeAtom);
  const [startDate, endDate] = dateRange;

  const handleDateSelect = (update: Date | [Date, Date]) => {
    if (Array.isArray(update)) {
      setDateRange(update);
      onChange(update);
    } else {
      setDateRange([update, update]);
      onChange([update, update]);
    }
  };

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
              onChange={(update: Date | [Date, Date]) => {
                handleDateSelect(update);
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
