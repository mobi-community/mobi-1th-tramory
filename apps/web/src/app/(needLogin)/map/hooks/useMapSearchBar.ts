import { useAtom } from 'jotai';

import { MapPageAtom } from '@/store';

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

  return {
    isSearchModalOpen,
    isSelectModalOpen,
    handleSearchModal: () => setIsSearchModalOpen((prev: boolean) => !prev),
    closeSearchModal: () => setIsSearchModalOpen(false),
    handleSelectModal: () => setIsSelectModalOpen((prev: boolean) => !prev),
    searchRange,
    setSearchRange,
    isRangeCountry: searchRange === '국가',
  };
};
