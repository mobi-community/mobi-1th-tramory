'use client';

import { useAtom } from 'jotai';

import { CommonStory, Pagination } from '@/components';
import { storyCommunityAtoms } from '@/store';

import { storyMock } from '../../_mocks';

export const StoryList: React.FC = () => {
  const [currentPage, setCurrentPage] = useAtom(
    storyCommunityAtoms.storyPageAtom
  );

  return (
    <div className='relatve'>
      <div className='flex justify-center'>
        <div className='m-auto grid grid-cols-2 gap-8 gap-x-10'>
          {storyMock.map((story) => (
            <CommonStory story={story} key={Math.random() * 1000} />
          ))}
        </div>
      </div>
      <div className='mt-[80px] flex h-[100px] justify-center'>
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          itemsPerPage={10}
          testData={100}
          bgColor='gray'
        />
      </div>
    </div>
  );
};
