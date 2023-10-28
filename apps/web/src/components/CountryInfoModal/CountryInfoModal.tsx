import { useAtom } from 'jotai';
import { PropsWithChildren } from 'react';

import { isCountryInfoModalOpen } from '@/store';

import ViewTravelRecordTypeModal from '../Floating_modal/TravelRecordSelectModal';

export const CountryInfoModal: React.FC<
  PropsWithChildren<{ country: string }>
> = ({ children, country }) => {
  const [isCountryInfoOpen, setIsCountryInfoOpen] = useAtom(
    isCountryInfoModalOpen({ country, isOpen: false })
  );

  return (
    <ViewTravelRecordTypeModal
      isOpen={isCountryInfoOpen.isOpen}
      onClose={() =>
        setIsCountryInfoOpen({ ...isCountryInfoOpen, isOpen: false })
      }
    >
      {children}
    </ViewTravelRecordTypeModal>
  );
};
