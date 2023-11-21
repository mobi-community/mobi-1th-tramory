import { useAtom } from 'jotai';
import { useState } from 'react';

import { selectedDateIdAtom, travelDateAtom } from '@/store';

export const useDate = (itemsPerPage, currentPage) => {
  const [date, setDate] = useAtom(travelDateAtom);
  const [selectedDateId, setSelectedDateId] = useAtom(selectedDateIdAtom);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const startIdx = currentPage * itemsPerPage;
  const endIdx = (currentPage + 1) * itemsPerPage;

  const getDates = async () => {
    try {
      const res = await fetch('/dates');
      const data = await res.json();

      // console.log('성공', data);
      setDate(data);
    } catch (error) {
      console.error('에러', error);
    }
  };

  const openModal = (id) => {
    setSelectedDateId(id);
    setIsModalOpen(true);
  };

  return {
    getDates,
    openModal,
    date,
    selectedDateId,
    setSelectedDateId,
    isModalOpen,
    setIsModalOpen,
    startIdx,
    endIdx,
  };
};
