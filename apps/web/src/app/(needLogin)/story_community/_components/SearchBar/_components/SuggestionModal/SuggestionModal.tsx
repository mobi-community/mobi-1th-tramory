'use client';

import { useStoryCommunity } from '@/app/(needLogin)/story_community/_hooks/useStoryCommunity';
import { storyCommunityPageConfig } from '@/constants';
import type { suggestedStoryKeywordType } from '@/store';

import type { modalProps } from './SuggestionModal.types';

export const SuggestionModal: React.FC<modalProps> = ({ field }) => {
  const { isSearchModalOpen, handleSearchModal, keywordData } =
    useStoryCommunity();

  const isLast = (i: number, arr: suggestedStoryKeywordType[]) =>
    i !== arr.length - 1 ? 'border-b-[1px] border-b-primaryGray-100' : '';

  const NoSuggestedWord = (
    <li className='list-none px-[20px] py-[5px]'>
      {storyCommunityPageConfig.noKeywordText}
    </li>
  );

  const HaveSuggestedWord = keywordData.map((word, i, array) => (
    <li
      key={word.keyword + i}
      className={`hover:bg-primaryGray-100 cursor-pointer list-none px-[20px] py-[5px] ${isLast(
        i,
        array
      )}`}
      onClick={() => {
        handleSearchModal();
        field.onChange(word.keyword);
      }}
    >
      {word.keyword}
    </li>
  ));

  if (isSearchModalOpen)
    return (
      <div>
        <div className='no-scroll border-primaryGray-200 absolute z-20 mt-5 max-h-[100px] w-[250px] overflow-y-scroll border bg-white text-[13px] drop-shadow-xl'>
          {keywordData.length ? HaveSuggestedWord : NoSuggestedWord}
        </div>
      </div>
    );
};
