import { useAtom } from 'jotai';

import { isAddLocationOpen, isLocationSearchModalOpen } from '@/store';

export const useAddLocationModal = () => {
  const [isAddLocationModalOpen, setIsAddLocationModalOpen] =
    useAtom(isAddLocationOpen);

  const [isSearchModalOpen, setIsSearchModalOpen] = useAtom(
    isLocationSearchModalOpen
  );

  return {
    isAddLocationModalOpen,
    handleOpenModal: () => setIsAddLocationModalOpen(true),
    handleCloseModal: () => setIsAddLocationModalOpen(false),
    isSearchModalOpen,
    setIsSearchModalOpen,
  };
};
