import { useAtom } from 'jotai';
import { PropsWithChildren } from 'react';

import { isCountryInfoModalOpen } from '@/store';

import ViewTravelRecordTypeModal from '../Floating_modal/TravelRecordSelectModal';

export const CountryInfoModal: React.FC<PropsWithChildren> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useAtom(isCountryInfoModalOpen);

  return (
    <ViewTravelRecordTypeModal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
    >
      {children}
    </ViewTravelRecordTypeModal>
  );
};
