import { useAtom } from 'jotai';

import {
  isSearchModalOpenAtom,
  searchKeywordAtom,
  selectedCategoryAtom,
  storyDataAtom,
  storyPageAtom,
  totalAtom,
} from '@/store';

export const useStoryCommunity = () => {
  const [storyData, setStoryData] = useAtom(storyDataAtom);
  const [searchKeyword, setSearchKeyword] = useAtom(searchKeywordAtom);
  const [selectedCategory, setSelectedCategory] = useAtom(selectedCategoryAtom);
  const [isSearchModalOpen, setIsSearchModalOpen] = useAtom(
    isSearchModalOpenAtom
  );
  const [storyPage, setStoryPage] = useAtom(storyPageAtom);
  const [total, setTotal] = useAtom(totalAtom);

  return {
    storyData,
    searchKeyword,
    selectedCategory,
    isSearchModalOpen,
    storyPage,
    total,
    setStoryData,
    setSearchKeyword,
    setSelectedCategory,
    clearCategory: () => setSelectedCategory('전체'),
    handleSearchModal: () => setIsSearchModalOpen((prev: boolean) => !prev),
    closeSearchModal: () => setIsSearchModalOpen(false),
    setStoryPage,
    setTotal,
  };
};
