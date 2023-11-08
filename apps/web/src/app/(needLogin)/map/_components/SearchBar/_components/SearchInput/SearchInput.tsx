'use client';

import { useRouter } from 'next/navigation';
import { Controller, useForm } from 'react-hook-form';

import { useMapSearchBar } from '@/app/(needLogin)/map/hooks/useMapSearchBar';
import { MapPageConfig } from '@/constants';
import { useDebounce } from '@/hooks/useDebounce';
import materialIcon from '@/utils/materialIcon';

import { LocationKeywordModal } from '../KeywordModal/LocationKeywordModal';
import { StoryKeywordModal } from '../KeywordModal/StoryKeywordModal';

export const SearchInput: React.FC = () => {
  const { handleSubmit, control } = useForm();
  const {
    handleSearchModal,
    isRangeCountry,
    locationKeyword,
    setLocationKeyword,
    storyKeyword,
    setStoryKeyword,
    setKeywordData,
    keywordData,
  } = useMapSearchBar();

  const router = useRouter();

  const requestUrl = isRangeCountry
    ? `/searchKeyword/location?inputValue=${locationKeyword}`
    : `/searchKeyword/stories?inputValue=${storyKeyword}`;

  const fetchKeywordList = async () => {
    try {
      const response = await fetch(requestUrl);

      const data = await response.json();

      if (response.ok) {
        setKeywordData(data.data);
        console.log('data', keywordData);
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

  return (
    <div>
      <form
        className='flex flex-col justify-center'
        onSubmit={handleSubmit((data: { searchKeyword: string }) => {
          if (isRangeCountry) {
            console.log('data', data.searchKeyword);
          } else {
            router.push(`/story_community?keyword=${data.searchKeyword}`);
          }
        })}
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
                  onChange={(e) => {
                    field.onChange(e.target.value);
                    isRangeCountry
                      ? setLocationKeyword(e.target.value)
                      : setStoryKeyword(e.target.value);
                  }}
                  onClick={handleSearchModal}
                  className='text-align-center text-s ml-12 w-[380px] focus:outline-none'
                  placeholder={
                    isRangeCountry
                      ? MapPageConfig.locationSearchText
                      : MapPageConfig.storiesSearchText
                  }
                  autoComplete='off'
                />
                <div className='mt-1 cursor-pointer'>
                  {materialIcon({
                    iconName: 'search',
                    size: 30,
                    style: 'text-primaryGray-400 ',
                  })}
                </div>
              </div>
              {isRangeCountry ? (
                <LocationKeywordModal field={field} />
              ) : (
                <StoryKeywordModal field={field} />
              )}
            </div>
          )}
        />
      </form>
    </div>
  );
};
