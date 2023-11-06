import { useMapSearchBar } from '@/app/(needLogin)/map/hooks/useMapSearchBar';
import materialIcon from '@/utils/materialIcon';

import { suggestedKeyword } from '../../../../_mocks';
import type { modalProps } from './SuggestionModal.types';

export const SuggestionModal: React.FC<modalProps> = ({ field }) => {
  const { isSearchModalOpen, handleSearchModal } = useMapSearchBar();

  if (isSearchModalOpen)
    return (
      <div className='no-scroll border-primaryGray-200 z-100 fixed z-[100] mt-5 max-h-[200px] w-[420px] overflow-y-scroll border bg-white drop-shadow-xl'>
        {suggestedKeyword.map((word, i, array) => (
          <li
            key={word.id}
            className={`hover:bg-primaryGray-100 ml-2 mt-0 flex h-10 w-[400px] list-none items-center pl-1.5 ${
              i === array.length - 1
                ? ''
                : 'border-b-primaryGray-100 border-b-[1px]'
            }`}
            onClick={() => {
              handleSearchModal();
              field.onChange(word.keyword);
            }}
          >
            {materialIcon({
              iconName: word.category === 'searched' ? 'search' : 'location_on',
              style: 'mr-2 text-primaryGray-400',
              size: 15,
            })}
            {word.keyword}
          </li>
        ))}
      </div>
    );
};
