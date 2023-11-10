import { useAtom } from 'jotai';

import { MapPageAtom } from '@/store';

import type { submitFuncProps } from './useMapSearchBar.types';

export const useMapSearchBar = () => {
  // 검색 범위 지정: 국가 / 스토리
  const [searchRange, setSearchRange] = useAtom(MapPageAtom.range);

  // 국가 / 스토리 선택 모달 열림 여부
  const [isSelectModalOpen, setIsSelectModalOpen] = useAtom(
    MapPageAtom.isSelectModalOpen
  );

  // 연관검색어 모달 열림 여부
  const [isSearchModalOpen, setIsSearchModalOpen] = useAtom(
    MapPageAtom.isSearchModalOpen
  );

  const [locationKeyword, setLocationKeyword] = useAtom(
    MapPageAtom.locationKeyword
  );
  const [storyKeyword, setStoryKeyword] = useAtom(MapPageAtom.storyKeyword);

  const [keywordData, setKeywordData] = useAtom(MapPageAtom.keywordData);

  const handleSubmitCountry = ({
    searchKeyword,
    setIsCountry,
    setTargetLocation,
    setIsCountryInfoOpen,
  }: submitFuncProps) => {
    const isCountry = !searchKeyword.includes(',');

    const location = isCountry ? searchKeyword : searchKeyword.split(',')[0];

    setIsCountry(isCountry);
    setTargetLocation(location);
    setIsCountryInfoOpen({ isOpen: true });
    setLocationKeyword('');
    setIsSearchModalOpen(false);
  };

  return {
    isSearchModalOpen,
    isSelectModalOpen,
    handleSearchModal: () =>
      setIsSearchModalOpen((prev: boolean) => {
        if (!prev) {
          setIsSelectModalOpen(false);
          if (!locationKeyword) setKeywordData([]);
        }
        return !prev;
      }),
    closeSearchModal: () => {
      setLocationKeyword('');
      setIsSearchModalOpen(false);
    },
    handleSelectModal: () =>
      setIsSelectModalOpen((prev: boolean) => {
        if (!prev) setIsSearchModalOpen(false);
        return !prev;
      }),
    searchRange,
    setSearchRange,
    isRangeCountry: searchRange === '국가',
    locationKeyword,
    setLocationKeyword,
    storyKeyword,
    setStoryKeyword,
    keywordData,
    setKeywordData,
    handleSubmitCountry,
  };
};
