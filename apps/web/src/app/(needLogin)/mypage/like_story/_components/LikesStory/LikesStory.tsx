import { useState } from 'react';

import { storyMock } from '@/app/(needLogin)/story_community/_mocks';
import { CommonStory, Pagination } from '@/components';

export const LikeStory = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage] = useState(4);
  const startIdx = currentPage * itemsPerPage;
  const endIdx = (currentPage + 1) * itemsPerPage;

  if (storyMock.length <= 0) {
    return (
      <div className='mb-[180px] mt-[150px] text-center text-[22px] font-bold'>
        관심 설정한 스토리가 없습니다
      </div>
    );
  }
  if (storyMock.length)
    return (
      <div>
        <div className='grid grid-cols-2 gap-8'>
          {storyMock.slice(startIdx, endIdx).map((story) => (
            <CommonStory story={story} key={Math.random() * 1000} />
          ))}
        </div>
        <div className='my-8 flex justify-center'>
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            itemsPerPage={itemsPerPage}
            testData={storyMock.length}
            bgColor='gray'
          />
        </div>
      </div>
    );
};
