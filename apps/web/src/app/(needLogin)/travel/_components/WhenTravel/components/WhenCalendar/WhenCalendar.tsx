'use client';
import 'react-datepicker/dist/react-datepicker.css';
import './style.css';

import { useAtom } from 'jotai';
import DatePicker from 'react-datepicker';

import { dateRangeAtom } from '../../../../../../../store/simpleRecordModal.atom';

const WhenCalener = () => {
  const [dateRange, setDateRange] = useAtom(dateRangeAtom);
  const [startDate, endDate] = dateRange;

  return (
    <DatePicker
      dateFormat='yyyy.MM.dd'
      selected={startDate}
      selectsRange={true}
      startDate={startDate} // 시작 날짜
      endDate={endDate}
      onChange={(update) => {
        setDateRange(update);
      }}
      inline
    />
  );
};

export default WhenCalener;
