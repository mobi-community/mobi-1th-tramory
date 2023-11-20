import { useAtom, useSetAtom } from 'jotai';

import { MapAtom, MapPageAtom } from '@/store';

import { getGoogleGeocode } from '../apis/geocoding';
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

  const setCenter = useSetAtom(MapAtom.center);
  const setZoom = useSetAtom(MapAtom.zoom);

  const handleSubmitCountry = ({
    searchKeyword,
    setIsCountry,
    setTargetLocation,
    setIsCountryInfoOpen,
  }: submitFuncProps) => {
    setIsAutoSearchMode(false);

    const isCountry = !searchKeyword.includes(',');

    const location = isCountry ? searchKeyword : searchKeyword.split(',')[0];

    console.log('submit', searchKeyword);
    getGoogleGeocode(searchKeyword).then((res) => {
      if (res.results) {
        setCenter(res.results[0].geometry.location);
        setZoom(5);
      }
    });
    setIsCountry(isCountry);
    setTargetLocation(location);
    setIsCountryInfoOpen({ isOpen: true });
    setLocationKeyword('');
    setAutoSearchKeyword('');
    // 모달 닫아줌
    setIsSearchModalOpen(false);
  };

  const [focusIndex, setFocusIndex] = useAtom(MapPageAtom.focusIndex);
  const [isAutoSearchMode, setIsAutoSearchMode] = useAtom(
    MapPageAtom.isAutoSearchMode
  );
  const [autoSearchKeyword, setAutoSearchKeyword] = useAtom(
    MapPageAtom.autoSearchKeyword
  );

  return {
    isSearchModalOpen,
    isSelectModalOpen,
    handleSearchModal: () =>
      setIsSearchModalOpen((prev: boolean) => {
        if (!prev) {
          setIsSelectModalOpen(false);
          if (!locationKeyword) setKeywordData([]);
        }
        if (prev) setIsAutoSearchMode(true);
        return !prev;
      }),
    openSearchModal: () => setIsSearchModalOpen(true),
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
    focusIndex,
    setFocusIndex,
    isAutoSearchMode,
    setIsAutoSearchMode,
    autoSearchKeyword,
    setAutoSearchKeyword,
  };
};
