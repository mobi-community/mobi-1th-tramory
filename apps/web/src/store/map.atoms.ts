import { atom } from 'jotai';

export const MapAtom = {
  isDarkMode: atom(false),
  zoom: atom(2),
  isSearchModalOpen: atom(false),
};
