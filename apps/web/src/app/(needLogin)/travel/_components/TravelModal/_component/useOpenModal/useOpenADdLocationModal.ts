import { useAtom } from 'jotai';

import { isAddLocationOpen } from '@/store';

export const useOpenAddLocationModal = () => {
  // eslint-disable-next-line no-unused-vars
  const [isOpen, setIsOpen] = useAtom(isAddLocationOpen);

  const openAddLocationModal = () => {
    setIsOpen(true);
  };

  return openAddLocationModal;
};
