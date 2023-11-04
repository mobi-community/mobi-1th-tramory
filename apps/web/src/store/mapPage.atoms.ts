import { atom } from 'jotai';

export const MapPageAtom = {
  isDarkMode: atom<boolean>(false),
  isSearchModalOpen: atom<boolean>(false),
  isSelectModalOpen: atom<boolean>(false),
  range: atom<string>('국가'),
};
