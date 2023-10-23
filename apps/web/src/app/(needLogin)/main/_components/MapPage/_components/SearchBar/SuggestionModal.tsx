import { useAtom } from 'jotai';

import { MapAtom } from '../../../../../../../store';
import materialIcon from '../../../../../../../utils/materialIcon';
import { suggestedKeyword } from '../../_mocks';
import type { modalProps } from './SearchBar.types';

export const SuggestionModal: React.FC<modalProps> = ({ field }) => {
  const [isSearchModalOpen, setIsSearchModalOpen] = useAtom(
    MapAtom.isSearchModalOpen
  );

  if (isSearchModalOpen)
    return (
      <div className='border-primaryGray-200 absolute z-20 mt-2 max-h-[200px] w-[430px] overflow-y-scroll border bg-white drop-shadow-xl'>
        {suggestedKeyword.map((word, i, array) => (
          <li
            key={word.id}
            className={`hover:bg-primaryGray-100 ml-2 mt-0 flex h-10 w-[400px] list-none items-center pl-1.5 ${
              i === array.length - 1
                ? ''
                : 'border-b-primaryGray-100 border-b-[1px]'
            }`}
            onClick={() => {
              setIsSearchModalOpen((prev: boolean) => !prev);
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
