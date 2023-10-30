'use client';
import { useAtom } from 'jotai';
import { PropsWithChildren } from 'react';

import { isCountryInfoModalOpen } from '@/store';
import ViewTravelRecordType from '../Floating_modal/TravelRecordSelect';


export const CountryInfoModal: React.FC<PropsWithChildren> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useAtom(isCountryInfoModalOpen);

  return (
    <ViewTravelRecordType
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
    >
      {children}
    </ViewTravelRecordType>
  );
};
