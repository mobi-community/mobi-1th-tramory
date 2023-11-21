'use client';
import 'react-datepicker/dist/react-datepicker.css';
import './style.css';

import { useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { Control, Controller } from 'react-hook-form';

import { useCalendar } from '@/app/(needLogin)/travel/_hooks/useCalendar';
import { InformModal } from '@/components';

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
  const {
    key,
    setKey,
    startDate,
    endDate,
    registerState,
    openModal,
    setOpenModal,
    handleDateSelect,
    differenceInDaysFunc,
  } = useCalendar();

  useEffect(() => {
    setKey(startDate.toISOString());
  }, [setKey, startDate]);

  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <>
            <DatePicker
              key={key}
              dateFormat='yyyy.MM.dd'
              selectsRange={true}
              startDate={startDate} // 시작 날짜
              endDate={
                differenceInDaysFunc([startDate, endDate]) > 10
                  ? startDate
                  : endDate
              }
              minDate={registerState == 'plan' ? new Date() : null}
              maxDate={registerState == 'record' ? new Date() : null}
              onChange={(update: Date | [Date, Date]) => {
                console.log('update', update);
                handleDateSelect(update, onChange);
                field.onChange(update);
              }}
              inline
            />
            <div className='mt-[-300px] border border-black'>
              {openModal && (
                <InformModal
                  title='10일 이상은 선택이 안됩니다'
                  size='big'
                  setOpenModal={setOpenModal}
                />
              )}
            </div>
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
