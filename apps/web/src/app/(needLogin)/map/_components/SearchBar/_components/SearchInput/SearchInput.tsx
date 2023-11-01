'use client';

import { useRouter } from 'next/navigation';
import { Controller, useForm } from 'react-hook-form';

import { useMapSearchBar } from '@/app/(needLogin)/map/hooks/useMapSearchBar';
import { MapPageConfig } from '@/constants';
import materialIcon from '@/utils/materialIcon';

import { SuggestionModal } from '../SuggestionModal/SuggestionModal';

export const SearchInput: React.FC = () => {
  const { handleSubmit, control } = useForm();
  const { handleSearchModal, isRangeCountry } = useMapSearchBar();

  const router = useRouter();

  return (
    <>
      <form
        className='flex flex-col justify-center'
        onSubmit={handleSubmit((data: { searchKeyword: string }) => {
          if (isRangeCountry) {
            console.log('data', data);
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
            <div className='relative mt-1'>
              <div className='relative flex w-[400px]'>
                <input
                  {...field}
                  onClick={handleSearchModal}
                  className='text-align-center text-s ml-12 w-[380px] focus:outline-none'
                  placeholder={MapPageConfig.searchBarText}
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
              <SuggestionModal field={field} />
            </div>
          )}
        />
      </form>
    </>
  );
};
