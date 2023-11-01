'use client';

import { useAtom } from 'jotai';

import {
  addressValueAtom,
  isAddLocationOpen,
  isEditAddressAtom,
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
  const [isEditAddress, setIsEditAddress] = useAtom(isEditAddressAtom);
  const [locationVal, setLocationVal] = useAtom(locationValueAtom);
  const [addressVal, setAddressVal] = useAtom(addressValueAtom);

  return {
    isAddLocationModalOpen,
    handleOpenModal: () => setIsAddLocationModalOpen(true),
    handleCloseModal: () => setIsAddLocationModalOpen(false),
    isSearchModalOpen,
    setIsSearchModalOpen,
    isEditLocation,
    isEditAddress,
    handleEditLocation: (isEditMode: boolean) => setIsEditLocation(isEditMode),
    handleEditAddress: (isEditMode: boolean) => setIsEditAddress(isEditMode),
    locationVal,
    addressVal,
    setLocationVal,
    setAddressVal,
    trackData: () => {
      console.log('location', locationVal);
      console.log('address', addressVal);
    },
  };
};
