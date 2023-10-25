import { atom } from 'jotai';

export const searchKeywordAtom = atom('');
export const selectedCategoryAtom = atom('전체');
export const isSearchModalOpenAtom = atom(false);

export const storyCommunityAtoms = {
  searchKeywordAtom,
  selectedCategoryAtom,
  isSearchModalOpenAtom,
};
