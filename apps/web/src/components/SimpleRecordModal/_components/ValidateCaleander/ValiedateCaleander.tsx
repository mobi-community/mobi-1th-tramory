'use client';
import 'react-datepicker/dist/react-datepicker.css';
import './style.css';

import { useAtom } from 'jotai';
import React from 'react';
import DatePicker from 'react-datepicker';
import { Controller } from 'react-hook-form';

import { dateRangeAtom } from '../../../../store/simpleRecordModal.atom';
import CustomInput from './_components/CustomInput';

const CalendarCustom = ({ control }) => {
  const [dateRange, setDateRange] = useAtom(dateRangeAtom);
  const [startDate, endDate] = dateRange;

  return (
    <>
      <div className='text-primaryGray-500 ml-12  mt-7 flex'>
        일자<p className='text-primaryGreen mb-1 ml-1'>*</p>
      </div>
      <Controller
        name='date'
        control={control}
        defaultValue=''
        render={({ field }) => (
          <div className='custom-wrap3'>
            <DatePicker
              dateFormat='yyyy.MM.dd' // formmating
              className='react-datepicker__triangle relative z-10 w-[403px]'
              selected={startDate}
              selectsRange={true} // 기간 설정 가능하게
              startDate={startDate} // 시작 날짜
              endDate={endDate} // 끝 날짜
              onChange={(update) => {
                setDateRange(update);
                field.onChange(update);
              }}
              showDisabledMonthNavigation
              maxDate={new Date()}
              customInput={<CustomInput />}
              popperModifiers={[
                {
                  name: 'offset',
                  options: {
                    offset: [460, -80], // x축, y축 오프셋 (px)
                  },
                },
              ]}
            />
          </div>
        )}
      />
    </>
  );
};

export default CalendarCustom;
