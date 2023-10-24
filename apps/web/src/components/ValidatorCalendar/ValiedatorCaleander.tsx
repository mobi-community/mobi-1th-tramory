'use client';
import 'react-datepicker/dist/react-datepicker.css';
import './style.css';

import { useAtom } from 'jotai';
import React from 'react';
import DatePicker from 'react-datepicker';
import { Controller } from 'react-hook-form';

import { dateRangeAtom } from '../../store/simpleRecordModal.atom';
import CustomInput from './_components/CustomInput';

const ValidatorCalendar = ({ control, name }) => {
  const [dateRange, setDateRange] = useAtom(dateRangeAtom);
  const [startDate, endDate] = dateRange;

  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <div>
            <DatePicker
              dateFormat='yyyy.MM.dd' // formmating
              className=''
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
              customInput={<CustomInput value={''} onClick={undefined} />}
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

export default ValidatorCalendar;
