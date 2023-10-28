import { atom } from 'jotai';
import { atomFamily } from 'jotai/utils';

type countryInfoModalType = {
  country?: string;
  isOpen?: boolean;
};

export const isCountryInfoModalOpen = atomFamily(
  ({ isOpen }: countryInfoModalType) => atom({ isOpen: isOpen }),
  (a, b) => a.country === b.country
);
