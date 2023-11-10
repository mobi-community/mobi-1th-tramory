import { useMapSearchBar } from '@/app/(needLogin)/map/hooks/useMapSearchBar';
import { MapPageConfig } from '@/constants';
import materialIcon from '@/utils/materialIcon';

import type { modalProps } from './KeywordModal.types';

export const LocationKeywordModal: React.FC<modalProps> = ({ field }) => {
  const {
    isSearchModalOpen,
    handleSearchModal,
    locationKeyword,
    keywordData,
    setLocationKeyword,
  } = useMapSearchBar();

  const NoSuggestedWord = (
    <li className='ml-2 mt-3 h-10 w-[400px] list-none items-center pl-1.5 text-left'>
      {MapPageConfig.noKeywordText}
    </li>
  );

  const HaveSuggestedWord = keywordData.map((word, i, array) => (
    <li
      key={word.id}
      className={`hover:bg-primaryGray-100 ml-2 mt-0 flex h-10 w-[400px] list-none items-center pl-1.5 ${
        i === array.length - 1 ? '' : 'border-b-primaryGray-100 border-b-[1px]'
      }`}
      onClick={() => {
        handleSearchModal();
        field.onChange(word.keyword);
        setLocationKeyword(word.keyword);
      }}
    >
      {materialIcon({
        iconName: word.category === 'searched' ? 'search' : 'location_on',
        style: 'mr-2 text-primaryGray-400',
        size: 15,
      })}
      {word.keyword}
    </li>
  ));

  if (isSearchModalOpen)
    return (
      <div className='no-scroll border-primaryGray-200 z-100 fixed z-[100] mt-5 max-h-[200px] w-[420px] overflow-y-scroll border bg-white drop-shadow-xl'>
        {locationKeyword && (
          <li
            key={locationKeyword}
            className='border-b-primaryGray-500 ml-2 mt-3 h-10 w-[400px] list-none items-center border-b-[1px] pl-1.5 text-left'
          >
            {locationKeyword}
          </li>
        )}
        {keywordData.length ? HaveSuggestedWord : NoSuggestedWord}
      </div>
    );
};
