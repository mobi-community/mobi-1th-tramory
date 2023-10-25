'use client';

import { useState } from 'react';

import { CommonStory } from '@/components';
import { Pagination } from '@/components/Pagination';

import { storyMock } from '../../_mocks';

export const StoryList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
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
    </>
  );
};
