import { useSetAtom } from 'jotai';
import { Controller, useForm } from 'react-hook-form';

import { MapPageConfig } from '../../../../../../../constants';
import { MapAtom } from '../../../../../../../store';
import materialIcon from '../../../../../../../utils/materialIcon';
import { SuggestionModal } from './SuggestionModal';

const SearchInput: React.FC = () => {
  const { handleSubmit, control } = useForm();
  const setIsSearchModalOpen = useSetAtom(MapAtom.isSearchModalOpen);

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
            <div className='relative mt-1'>
              <div className='flex min-h-[60px] pt-4'>
                <input
                  {...field}
                  onClick={() => setIsSearchModalOpen((prev: boolean) => !prev)}
                  className='text-align-center text-m ml-12 h-full w-full max-w-[430px] focus:outline-none'
                  placeholder={MapPageConfig.searchBarText}
                ></input>
                <div className='absolute ml-[380px] cursor-pointer'>
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

export default SearchInput;
