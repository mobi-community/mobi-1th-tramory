'use client';

import { useAtom } from 'jotai';

import { mockKeywordsArray } from '@/app/(needLogin)/story_community/_mocks';
import { storyCommunityAtoms } from '@/store';

import type { modalProps } from './SuggestionModal.types';

export const SuggestionModal: React.FC<modalProps> = ({ field }) => {
  const [isSearchModalOpen, setIsSearchModalOpen] = useAtom(
    storyCommunityAtoms.isSearchModalOpenAtom
  );

  const isLast = (i: number, arr: string[]) =>
    i !== arr.length - 1 ? 'border-b-[1px] border-b-primaryGray-100' : '';

  if (isSearchModalOpen)
    return (
      <div>
        <div className='no-scroll border-primaryGray-200 absolute z-20 mt-5 max-h-[100px] w-[250px] overflow-y-scroll border bg-white drop-shadow-xl'>
          {mockKeywordsArray.map((keyword, i, array) => (
            <li
              key={Math.random() * 1000}
              className={`hover:bg-primaryGray-100 cursor-pointer list-none px-[20px] py-[5px] ${isLast(
                i,
                array
              )}`}
              onClick={() => {
                setIsSearchModalOpen((prev: boolean) => !prev);
                field.onChange(keyword);
              }}
            >
              {keyword}
            </li>
          ))}
        </div>
      </div>
    );
};
