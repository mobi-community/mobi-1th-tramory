'use client';

import { useAtomValue } from 'jotai';
import React, { useState } from 'react';

import { CommonStory } from '@/components';
import { Pagination } from '@/components/Pagination';
import { storyCommunityAtoms } from '@/store/storyCommunity.atoms';

import { CategoryTab, SearchBar } from './_components';
import { storyMock } from './_mocks';

const StoryCommunityPage: React.FC = () => {
  const searchKeyword = useAtomValue(storyCommunityAtoms.searchKeywordAtom);
  const [currentPage, setCurrentPage] = useState(1);

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
      <div className='ml-[700px] mt-[80px] h-[100px] w-full'>
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          itemsPerPage={10}
          testData={100}
        />
      </div>
    </div>
  );
};

export default StoryCommunityPage;
