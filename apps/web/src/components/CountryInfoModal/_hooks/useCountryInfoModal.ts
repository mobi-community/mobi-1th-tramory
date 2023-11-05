import { useAtom, useSetAtom } from 'jotai';

import {
  cityDataAtom,
  countryDataAtom,
  isCountryInfoModalOpen,
  openSimpleRecordModalAtom,
  targetLocationAtom,
} from '@/store';

export const useCountryInfoModal = (target?: string) => {
  const [isCountryInfoOpen, setIsCountryInfoOpen] = useAtom(
    isCountryInfoModalOpen({ target })
  );

  const setIsSimpleRecordModalOpen = useSetAtom(openSimpleRecordModalAtom);

  const [targetLocation, setTargetLocation] = useAtom(targetLocationAtom);

  const [countryData, setCountryData] = useAtom(countryDataAtom);
  const [cityData, setCityData] = useAtom(cityDataAtom);

  return {
    isCountryInfoOpen,
    targetLocation,
    setTargetLocation,
    openCountryInfoModal: () => {
      setTargetLocation(target);
      setIsCountryInfoOpen({ isOpen: true });
    },
    closeCountryInfoModal: () => {
      setIsCountryInfoOpen({ isOpen: false });
    },
    openSimpleRecordModal: () => {
      setIsSimpleRecordModalOpen(true);
    },
    countryData,
    cityData,
    setCountryData,
    setCityData,
  };
};
