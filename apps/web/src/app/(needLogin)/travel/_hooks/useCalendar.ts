import { useAtom } from 'jotai';
import { useState } from 'react';

import { dateRangeAtom } from '@/store';
import { registerStateAtom } from '@/store/travelState.atom';

export const useCalendar = () => {
  const [registerState] = useAtom(registerStateAtom);
  const [openModal, setOpenModal] = useState(false);
  const [dateRange, setDateRange] = useAtom(dateRangeAtom);
  const [startDate, endDate] = dateRange;
  const [key, setKey] = useState(startDate.toISOString());
  const differenceInDaysFunc = (data) => {
    const differenceInMilliseconds =
      new Date(data[1]).getTime() - new Date(data[0]).getTime();

    return differenceInMilliseconds / (1000 * 60 * 60 * 24);
  };

  const handleDateSelect = (update: Date | [Date, Date], onChange) => {
    if (differenceInDaysFunc(update) > 10) {
      setOpenModal(true);
    }
    if (Array.isArray(update)) {
      setDateRange(update);
      onChange(update);
    } else {
      setDateRange([update, update]);
      onChange([update, update]);
    }
  };

  return {
    registerState,
    handleDateSelect,
    openModal,
    startDate,
    dateRange,
    endDate,
    key,
    setKey,
    setOpenModal,
    differenceInDaysFunc,
  };
};
