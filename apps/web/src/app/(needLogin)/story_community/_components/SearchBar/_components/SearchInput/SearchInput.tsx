'use client';

import { useRouter } from 'next/navigation';
import type { ChangeEvent } from 'react';
import { Controller, useForm } from 'react-hook-form';
import type {
  ControllerRenderProps,
  FieldValues,
} from 'react-hook-form/dist/types';

import { useStoryCommunity } from '@/app/(needLogin)/story_community/_hooks/useStoryCommunity';
import { useDebounce } from '@/hooks/useDebounce';
import materialIcon from '@/utils/materialIcon';

import { SuggestionModal } from '../SuggestionModal/SuggestionModal';

export const SearchInput: React.FC = () => {
  const { handleSubmit, control } = useForm();
  const {
    handleSearchModal,
    closeSearchModal,
    searchKeyword,
    setSearchKeyword,
    setKeywordData,
  } = useStoryCommunity();
  const router = useRouter();

  const fetchKeywordList = async () => {
    if (searchKeyword)
      try {
        const response = await fetch(
          `/searchKeyword/stories?inputValue=${searchKeyword}`
        );

        const data = await response.json();

        if (response.ok) {
          console.log('searchkeyword', data);
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

  useDebounce(fetchKeywordList, 300, [searchKeyword]);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    field: ControllerRenderProps<FieldValues, 'searchKeyword'>
  ) => {
    field.onChange(e.target.value);
    setSearchKeyword(e.target.value);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit((data: { searchKeyword: string }) => {
          if (data.searchKeyword)
            router.push(`/story_community?keyword=${data.searchKeyword}`);
          closeSearchModal();
        })}
      >
        <Controller
          name='searchKeyword'
          control={control}
          defaultValue=''
          render={({ field }) => (
            <div className=''>
              <div className='flex'>
                <input
                  {...field}
                  onClick={handleSearchModal}
                  onChange={(e) => handleInputChange(e, field)}
                  className='outline-none'
                  placeholder='스토리 검색'
                  autoComplete='off'
                />
                <div>
                  <button>
                    {materialIcon({
                      iconName: 'search',
                      size: 30,
                      style: 'text-primaryGray-400 ',
                    })}
                  </button>
                </div>
              </div>
              <SuggestionModal field={field} />
            </div>
          )}
        />
      </form>
    </>
  );
};
