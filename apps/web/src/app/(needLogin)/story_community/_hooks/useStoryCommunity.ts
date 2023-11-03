import { useAtom } from 'jotai';

import {
  isSearchModalOpenAtom,
  searchKeywordAtom,
  selectedCategoryAtom,
  storyDataAtom,
  storyPageAtom,
} from '@/store';

export const useStoryCommunity = () => {
  const [storyData, setStoryData] = useAtom(storyDataAtom);
  const [searchKeyword, setSearchKeyword] = useAtom(searchKeywordAtom);
  const [selectedCategory, setSelectedCategory] = useAtom(selectedCategoryAtom);
  const [isSearchModalOpen, setIsSearchModalOpen] = useAtom(
    isSearchModalOpenAtom
  );
  const [storyPage, setStoryPage] = useAtom(storyPageAtom);

  return {
    storyData,
    searchKeyword,
    selectedCategory,
    isSearchModalOpen,
    storyPage,
    setStoryData,
    setSearchKeyword,
    setSelectedCategory,
    clearCategory: () => setSelectedCategory('전체'),
    handleSearchModal: () => setIsSearchModalOpen((prev: boolean) => !prev),
    setStoryPage,
  };
};
