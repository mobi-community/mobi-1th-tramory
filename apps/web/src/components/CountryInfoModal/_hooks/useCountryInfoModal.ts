import { useAtom, useSetAtom } from 'jotai';

import {
  isCountryInfoModalOpen,
  openSimpleRecordModalAtom,
  targetLocationAtom,
} from '@/store';

export const useCountryInfoModal = (country?: string) => {
  const [isCountryInfoOpen, setIsCountryInfoOpen] = useAtom(
    isCountryInfoModalOpen({ country })
  );
  const [targetLocation, setTargetLocation] = useAtom(targetLocationAtom);

  const setIsSimpleRecordModalOpen = useSetAtom(openSimpleRecordModalAtom);

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
    openSimpleRecordModal: () => {
      setIsSimpleRecordModalOpen(true);
    },
  };
};
