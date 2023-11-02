'use client';

import { useAtom } from 'jotai';

import {
  addressValueAtom,
  isAddLocationOpen,
  isEditLocationAtom,
  isLocationSearchModalOpen,
  locationValueAtom,
} from '@/store';

export const useAddLocationModal = () => {
  const [isAddLocationModalOpen, setIsAddLocationModalOpen] =
    useAtom(isAddLocationOpen);

  const [isSearchModalOpen, setIsSearchModalOpen] = useAtom(
    isLocationSearchModalOpen
  );

  const [isEditLocation, setIsEditLocation] = useAtom(isEditLocationAtom);
  const [locationVal, setLocationVal] = useAtom(locationValueAtom);
  const [addressVal, setAddressVal] = useAtom(addressValueAtom);

  return {
    isAddLocationModalOpen,
    handleOpenModal: () => setIsAddLocationModalOpen(true),
    handleCloseModal: () => setIsAddLocationModalOpen(false),
    isSearchModalOpen,
    setIsSearchModalOpen,
    isEditLocation,
    handleEditLocation: (isEditMode: boolean) => setIsEditLocation(isEditMode),
    locationVal,
    addressVal,
    setLocationVal,
    setAddressVal,
    trackData: () => {
      console.log('location', locationVal);
      console.log('address', addressVal);
    },
    clearValue: () => {
      setAddressVal('');
      setLocationVal('');
    },
  };
};
