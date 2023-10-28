import { useAtom } from 'jotai';

import { isCountryInfoModalOpen, targetLocationAtom } from '@/store';

export const useCountryInfoModal = (country: string) => {
  const [isCountryInfoOpen, setIsCountryInfoOpen] = useAtom(
    isCountryInfoModalOpen({ country })
  );
  const [targetLocation, setTargetLocation] = useAtom(targetLocationAtom);

  return {
    isCountryInfoOpen,
    targetLocation,
    openCountryInfoModal: () => {
      setIsCountryInfoOpen({ isOpen: true });
      setTargetLocation(country);
    },
    closeCountryInfoModal: () => {
      setIsCountryInfoOpen({ isOpen: false });
      setTargetLocation('');
    },
  };
};
