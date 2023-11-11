import { atom } from 'jotai';

export interface suggestedLocationKeywordType {
  id: number;
  category: string;
  keyword: string;
}

export interface suggestedStoryKeywordType {
  keyword: string;
}

export const MapPageAtom = {
  isDarkMode: atom<boolean>(false),
  isSearchModalOpen: atom<boolean>(false),
  isSelectModalOpen: atom<boolean>(false),
  range: atom<string>('국가'),
  locationKeyword: atom<string>(''),
  storyKeyword: atom<string>(''),
  keywordData: atom<
    suggestedLocationKeywordType[] | suggestedStoryKeywordType[]
  >([]),
  focusIndex: atom<number>(-1),
  isAutoSearchMode: atom<boolean>(false),
  autoSearchKeyword: atom<string>(''),
};
