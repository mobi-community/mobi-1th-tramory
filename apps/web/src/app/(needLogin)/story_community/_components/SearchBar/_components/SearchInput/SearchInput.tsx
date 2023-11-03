'use client';

import { Controller, useForm } from 'react-hook-form';

import { useStoryCommunity } from '@/app/(needLogin)/story_community/_hooks/useStoryCommunity';
import materialIcon from '@/utils/materialIcon';

import { SuggestionModal } from '../SuggestionModal/SuggestionModal';

export const SearchInput: React.FC = () => {
  const { handleSubmit, control } = useForm();
  const { handleSearchModal } = useStoryCommunity();

  return (
    <>
      <form
        onSubmit={handleSubmit((data: string) => console.log('data', data))}
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
                  className='outline-none'
                  placeholder='스토리 검색'
                  autoComplete='off'
                />
                <div>
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
