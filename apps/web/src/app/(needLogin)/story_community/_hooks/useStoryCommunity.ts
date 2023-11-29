import { useAtom } from 'jotai';
import type { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

import { StoryType } from '@/components/CommonStory/CommonStory.types';
import {
  isSearchModalOpenAtom,
  keywordDataAtom,
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

  const [keywordData, setKeywordData] = useAtom(keywordDataAtom);

  const handleCategory = (category: string, router: AppRouterInstance) => {
    setSelectedCategory(category);
    router.push(`/story_community?category=${category}`);
  };

  const filterWithSearchedContent = (searchedKeyword: string): StoryType[] =>
    searchedKeyword
      ? storyData?.filter(
          (story) =>
            story.content.title.includes(searchedKeyword) ||
            story.content.text.includes(searchedKeyword) ||
            story.content.tags.some((tag: string) =>
              tag.includes(searchedKeyword)
            ) ||
            story.user.userId.includes(searchedKeyword)
        )
      : storyData;

  const filterWithCategory = (searchedKeyword: string): StoryType[] =>
    selectedCategory && selectedCategory !== '전체'
      ? filterWithSearchedContent(searchedKeyword)?.filter(
          (story) => story.content.category === selectedCategory
        )
      : filterWithSearchedContent(searchedKeyword);

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
    keywordData,
    setKeywordData,
    handleCategory,
    filterWithSearchedContent,
    filterWithCategory,
  };
};
