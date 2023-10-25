'use client';

import { useAtomValue } from 'jotai';
import React from 'react';

import { CommonStory } from '@/components';
import { searchKeywordAtom } from '@/store/storyCommunity.atoms';

import { CategoryTab, SearchBar } from './_components';
import { storyMock } from './_mocks';

const StoryCommunityPage: React.FC = () => {
  const searchKeyword = useAtomValue(searchKeywordAtom);

  return (
    <div>
      <div className='flex'>
        <div className='mb-[100px] text-center'>
          <div>{searchKeyword ? searchKeyword : '전체'} 여행 스토리</div>
          <div></div>
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
