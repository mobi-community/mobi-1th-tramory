'use client';

import { Controller, useForm } from 'react-hook-form';

import { useAddLocationModal } from '@/components/AddLocationModal/_hooks/useAddLocationModal';
import { MapPageConfig } from '@/constants';
import materialIcon from '@/utils/materialIcon';

import { KeywordModal } from '../KeywordModal/KeywordModal';

export const SearchInput: React.FC = () => {
  const { handleSubmit, control } = useForm();
  const { setIsSearchModalOpen } = useAddLocationModal();

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
            <div className='relative mt-1 flex w-[530px] justify-between'>
              <input
                {...field}
                onClick={() => setIsSearchModalOpen((prev: boolean) => !prev)}
                className='w-[530px] bg-transparent text-center text-lg placeholder:text-center focus:outline-none'
                placeholder={MapPageConfig.searchBarText}
                autoComplete='off'
              />
              <div
                className='cursor-pointer pr-3 pt-[5px]'
                onClick={() => field.onChange('')}
              >
                {materialIcon({
                  iconName: 'close',
                  size: 20,
                  style: 'text-primaryGray-300 ',
                })}
              </div>
              <button className='cursor-pointer pt-2'>
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
