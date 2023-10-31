'use client';

import { Controller, useForm } from 'react-hook-form';

import { useAddLocationModal } from '@/components/AddLocationModal';
import { MapPageConfig } from '@/constants';
import materialIcon from '@/utils/materialIcon';

import { KeywordModal } from '../KeywordModal/KeywordModal';

export const SearchInput: React.FC = () => {
  const { handleSubmit, control } = useForm();
  const { isSearchModalOpen, setIsSearchModalOpen } = useAddLocationModal();

  console.log('click', isSearchModalOpen);

  return (
    <div>
      <form
        onSubmit={handleSubmit((data: string) => console.log('data', data))}
      >
        <Controller
          name='searchKeyword'
          control={control}
          defaultValue=''
          render={({ field }) => (
            <div className='relative mt-1 flex w-[750px] justify-between'>
              <input
                {...field}
                onClick={() => setIsSearchModalOpen((prev: boolean) => !prev)}
                className='w-[720px] bg-transparent text-center text-xl placeholder:text-center  focus:outline-none'
                placeholder={MapPageConfig.searchBarText}
                autoComplete='off'
              />
              <button className='cursor-pointer pr-[20px] pt-2'>
                {materialIcon({
                  iconName: 'search',
                  size: 30,
                  style: 'text-primaryGray-400 ',
                })}
              </button>
              <KeywordModal field={field} />
            </div>
          )}
        />
      </form>
    </div>
  );
};
