'use client';
import { useAtom, useSetAtom } from 'jotai';

import {
  cityDataAtom,
  countryDataAtom,
  isCountryAtom,
  isCountryInfoModalOpen,
  openSimpleRecordModalAtom,
  targetLocationAtom,
} from '@/store';

export const useCountryInfoModal = (target?: string) => {
  const setIsSimpleRecordModalOpen = useSetAtom(openSimpleRecordModalAtom);

  const [targetLocation, setTargetLocation] = useAtom(targetLocationAtom);

  const [isCountryInfoOpen, setIsCountryInfoOpen] = useAtom(
    isCountryInfoModalOpen({ target })
  );

  const [countryData, setCountryData] = useAtom(countryDataAtom);
  const [cityData, setCityData] = useAtom(cityDataAtom);

  const [isCountry, setIsCountry] = useAtom(isCountryAtom);

  const openCountryInfoModal = (target: string, isCountry?: boolean) => {
    if (isCountry) setIsCountry(isCountry);
    console.log('모달모달', target);
    setTargetLocation(target);
    setIsCountryInfoOpen({ isOpen: true });
  };

  return {
    isCountryInfoOpen,
    targetLocation,
    setTargetLocation,
    setIsCountryInfoOpen,
    openCountryInfoModal,
    closeCountryInfoModal: () => {
      setIsCountryInfoOpen({ isOpen: false });
      setTargetLocation('');
    },
    openSimpleRecordModal: () => {
      setIsSimpleRecordModalOpen(true);
    },
    countryData,
    cityData,
    setCountryData,
    setCityData,
    isCountry,
    setIsCountry,
  };
};
