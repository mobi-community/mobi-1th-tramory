import { useMapSearchBar } from '@/app/(needLogin)/map/hooks/useMapSearchBar';
import { MapPageConfig } from '@/constants';
import type { suggestedLocationKeywordType } from '@/store';
import materialIcon from '@/utils/materialIcon';

import type { modalProps } from './KeywordModal.types';

export const LocationKeywordModal: React.FC<modalProps> = ({
  field,
  listRef,
  focusRef,
}) => {
  const {
    isSearchModalOpen,
    handleSearchModal,
    locationKeyword,
    keywordData,
    setLocationKeyword,
    focusIndex,
  } = useMapSearchBar();

  const NoSuggestedWord = (
    <li className='ml-2 mt-3 h-10 w-[400px] list-none items-center pl-1.5 text-left'>
      {MapPageConfig.noKeywordText}
    </li>
  );

  const handleBorderBottom = (
    index: number,
    array: suggestedLocationKeywordType[]
  ) =>
    index === array.length - 1 ? '' : 'border-b-primaryGray-100 border-b-[1px]';

  const handleFocusIndex = (i: number) =>
    i === focusIndex ? 'bg-primaryGray-400 text-white' : '';

  const HaveSuggestedWord = keywordData.map(
    (
      word: suggestedLocationKeywordType,
      i: number,
      array: suggestedLocationKeywordType[]
    ) => (
      <li
        key={word.id}
        ref={i === focusIndex ? focusRef : undefined}
        className={`hover:bg-primaryGray-100 ml-2 mt-0 flex h-10 w-[400px] list-none items-center pl-1.5 ${handleBorderBottom(
          i,
          array
        )} ${handleFocusIndex(i)}`}
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
    )
  );

  if (isSearchModalOpen)
    return (
      <div
        className='no-scroll border-primaryGray-200 z-100 fixed z-[100] mt-5 max-h-[200px] w-[420px] overflow-y-scroll border bg-white drop-shadow-xl'
        ref={listRef}
      >
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
