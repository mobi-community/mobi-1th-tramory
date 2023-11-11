'use client';

import { useRouter } from 'next/navigation';
import type { ChangeEvent, KeyboardEvent } from 'react';
// eslint-disable-next-line no-duplicate-imports
import { useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';
import type {
  ControllerRenderProps,
  FieldValues,
} from 'react-hook-form/dist/types';

import { useMapSearchBar } from '@/app/(needLogin)/map/hooks/useMapSearchBar';
import { useCountryInfoModal } from '@/components';
import { MapPageConfig } from '@/constants';
import { useDebounce } from '@/hooks/useDebounce';
import materialIcon from '@/utils/materialIcon';

import { LocationKeywordModal } from '../KeywordModal/LocationKeywordModal';
import { StoryKeywordModal } from '../KeywordModal/StoryKeywordModal';

export const SearchInput: React.FC = () => {
  const { handleSubmit, control } = useForm();
  const {
    searchRange,
    handleSearchModal,
    openSearchModal,
    closeSearchModal,
    isRangeCountry,
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
  } = useMapSearchBar();

  const { setTargetLocation, setIsCountryInfoOpen, setIsCountry } =
    useCountryInfoModal(locationKeyword);

  const router = useRouter();

  const isKeyworlNotNull = locationKeyword.length || storyKeyword.length;

  const requestUrl = isRangeCountry
    ? `/searchKeyword/location?inputValue=${locationKeyword}`
    : `/searchKeyword/stories?inputValue=${storyKeyword}`;

  const fetchKeywordList = async () => {
    if (isKeyworlNotNull)
      try {
        const response = await fetch(requestUrl);

        const data = await response.json();

        if (response.ok) {
          setKeywordData(data.data);
        } else {
          console.error(data.message);
        }
      } catch (error) {
        console.error(
          '연관 검색어 목록을 가져오는 중 오류가 발생했습니다:',
          error
        );
      }
  };

  useDebounce(fetchKeywordList, 500, [
    storyKeyword,
    locationKeyword,
    isRangeCountry,
  ]);

  const handleSubmitData = handleSubmit((data: { searchKeyword: string }) => {
    if (data.searchKeyword) {
      console.log('data', data.searchKeyword);
      if (isRangeCountry) {
        handleSubmitCountry({
          searchKeyword: data.searchKeyword,
          setIsCountry,
          setTargetLocation,
          setIsCountryInfoOpen,
        });
      } else {
        router.push(`/story_community?keyword=${data.searchKeyword}`);
      }
    }
  });

  const listRef = useRef(null);
  const focusRef = useRef(null);

  const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!!KeyEvent[e.key]) KeyEvent[e.key]();
    else openSearchModal();
  };

  const targetKeyword = () =>
    searchRange === '국가' ? locationKeyword : storyKeyword;

  const targetKeywordHandler = (value: string) =>
    searchRange === '국가' ? setLocationKeyword(value) : setStoryKeyword(value);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    field: ControllerRenderProps<FieldValues, 'searchKeyword'>
  ) => {
    field.onChange(e.target.value);
    targetKeywordHandler(e.target.value);
    setIsAutoSearchMode(false);
    setFocusIndex(-1);
  };

  const KeyEvent = {
    Enter: () => {
      handleSubmitData();
    },
    ArrowDown: () => {
      if (targetKeyword().length === 0) {
        return;
      }
      if (focusIndex === keywordData.length - 1) {
        return;
      }
      if (focusIndex === -1) {
        setIsAutoSearchMode(true);
      }
      setFocusIndex((index) => index + 1);
      setAutoSearchKeyword(keywordData[focusIndex + 1].keyword);
      targetKeywordHandler(keywordData[focusIndex + 1].keyword);
    },
    ArrowUp: () => {
      if (focusIndex === -1) {
        return;
      }
      if (focusIndex === 0) {
        setAutoSearchKeyword('');
        setFocusIndex((index) => index - 1);
        setIsAutoSearchMode(false);
        return;
      }

      setFocusIndex((index) => index - 1);
      setAutoSearchKeyword(keywordData[focusIndex - 1].keyword);
      targetKeywordHandler(keywordData[focusIndex + 1].keyword);
    },
    Escape: () => {
      setAutoSearchKeyword('');
      setFocusIndex(-1);
      setIsAutoSearchMode(false);
      closeSearchModal();
    },
  };

  return (
    <div>
      <form
        className='flex flex-col justify-center'
        onSubmit={handleSubmitData}
      >
        <Controller
          name='searchKeyword'
          control={control}
          defaultValue=''
          render={({ field }) => (
            <div className='relative z-[100] mt-1'>
              <div className='relative flex w-[400px]'>
                <input
                  {...field}
                  value={isAutoSearchMode ? autoSearchKeyword : targetKeyword()}
                  onChange={(e) => handleInputChange(e, field)}
                  onClick={handleSearchModal}
                  className='text-align-center text-s ml-12 w-[380px] focus:outline-none'
                  placeholder={
                    isRangeCountry
                      ? MapPageConfig.locationSearchText
                      : MapPageConfig.storiesSearchText
                  }
                  autoComplete='off'
                  onKeyUp={handleKeyUp}
                />
                <div className='mt-1 cursor-pointer'>
                  <button>
                    {materialIcon({
                      iconName: 'search',
                      size: 30,
                      style: 'text-primaryGray-400 ',
                    })}
                  </button>
                </div>
              </div>
              {isRangeCountry ? (
                <LocationKeywordModal
                  field={field}
                  listRef={listRef}
                  focusRef={focusRef}
                />
              ) : (
                <StoryKeywordModal
                  field={field}
                  listRef={listRef}
                  focusRef={focusRef}
                />
              )}
            </div>
          )}
        />
      </form>
    </div>
  );
};
