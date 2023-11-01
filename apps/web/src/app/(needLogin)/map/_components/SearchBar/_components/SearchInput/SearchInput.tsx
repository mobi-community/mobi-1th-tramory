import { useSetAtom } from 'jotai';
import { Controller, useForm } from 'react-hook-form';

import { MapPageConfig } from '@/constants';
import { MapPageAtom } from '@/store';
import materialIcon from '@/utils/materialIcon';

import { SuggestionModal } from '../SuggestionModal/SuggestionModal';

export const SearchInput: React.FC = () => {
  const { handleSubmit, control } = useForm();
  const setIsSearchModalOpen = useSetAtom(MapPageAtom.isSearchModalOpen);

  return (
    <>
      <form
        className='flex flex-col justify-center'
        onSubmit={handleSubmit((data: string) => console.log('data', data))}
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
                  onClick={() => setIsSearchModalOpen((prev: boolean) => !prev)}
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
