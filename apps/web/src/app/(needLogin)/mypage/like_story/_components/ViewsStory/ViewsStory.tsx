import { useState } from 'react';

import { storyMock } from '@/app/(needLogin)/story_community/_mocks';
import { CommonStory, Pagination } from '@/components';

export const ViewStory = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage] = useState(4);
  const startIdx = currentPage * itemsPerPage;
  const endIdx = (currentPage + 1) * itemsPerPage;

  return (
    <>
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
    </>
  );
};
