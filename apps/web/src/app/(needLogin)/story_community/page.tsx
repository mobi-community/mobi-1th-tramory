'use client';

import { useAtomValue } from 'jotai';
import React from 'react';

import { CommonStory } from '@/components';
import { storyCommunityAtoms } from '@/store/storyCommunity.atoms';

import { CategoryTab, SearchBar } from './_components';
import { storyMock } from './_mocks';

const StoryCommunityPage: React.FC = () => {
  const searchKeyword = useAtomValue(storyCommunityAtoms.searchKeywordAtom);

  return (
    <div>
      <div className='mr-[130px] flex justify-end pt-[30px]'>
        <div className='relative'>
          <div className='relative z-50 text-4xl font-bold'>
            {searchKeyword ? searchKeyword : '전체'} 여행 스토리
          </div>
          <div className='bg-primaryYellow absolute top-2 h-[30px] w-full -rotate-3'></div>
        </div>
        <SearchBar />
      </div>
      <CategoryTab />
      <div className='ml-[150px] grid grid-cols-2 gap-8'>
        {storyMock.map((story) => (
          <CommonStory story={story} key={Math.random() * 1000} />
        ))}
      </div>
    </div>
  );
};

export default StoryCommunityPage;
