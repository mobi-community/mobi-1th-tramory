'use client';
import { useState } from 'react';

import { storyMock } from '@/app/(needLogin)/story_community/_mocks';
import { Pagination } from '@/components';

import { CommonStory } from './components/CommonStory/CommonStory';

const OthenrStoryList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage] = useState(4);
  const startIdx = currentPage * itemsPerPage;

  const endIdx = (currentPage + 1) * itemsPerPage;

  return (
    <>
      <div className='m-auto mt-[-147px] h-[800px] w-[1024px] border  shadow-[0_4px_20px_0_rgba(0,0,0,0.1)]'>
        <div className='m-auto mt-[150px] grid w-[950px] grid-cols-2  '>
          {storyMock.slice(startIdx, endIdx).map((story) => (
            <CommonStory story={story} key={Math.random() * 1000} />
          ))}
        </div>
        <div className='ml-[393px] mt-[70px] h-[100px] w-full'>
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            itemsPerPage={itemsPerPage}
            testData={storyMock.length}
            bgColor='gray'
          />
        </div>
      </div>
    </>
  );
};

export default OthenrStoryList;
