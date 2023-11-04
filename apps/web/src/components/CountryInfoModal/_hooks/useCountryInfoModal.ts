import { useAtom, useSetAtom } from 'jotai';

import {
  cityDataAtom,
  countryDataAtom,
  isCountryInfoModalOpen,
  openSimpleRecordModalAtom,
} from '@/store';

export const useCountryInfoModal = (target?: string) => {
  const [isCountryInfoOpen, setIsCountryInfoOpen] = useAtom(
    isCountryInfoModalOpen({ target })
  );

  const setIsSimpleRecordModalOpen = useSetAtom(openSimpleRecordModalAtom);

  const [countryData, setCountryData] = useAtom(countryDataAtom);
  const [cityData, setCityData] = useAtom(cityDataAtom);

  return {
    isCountryInfoOpen,
    openCountryInfoModal: () => {
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
