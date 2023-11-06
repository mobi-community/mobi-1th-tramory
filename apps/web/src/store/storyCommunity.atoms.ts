import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

export const storyDataAtom = atom([]);
export const searchKeywordAtom = atom('');
export const selectedCategoryAtom = atomWithStorage('category', '전체');
export const isSearchModalOpenAtom = atom(false);
export const storyPageAtom = atom(0);
export const totalAtom = atom(1);

export const storyCommunityAtoms = {
  storyDataAtom,
  searchKeywordAtom,
  selectedCategoryAtom,
  isSearchModalOpenAtom,
  storyPageAtom,
};
