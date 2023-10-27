'use client';

import { useAtom } from 'jotai';

import { CommonStory } from '@/components';
import { Pagination } from '@/components/Pagination';
import { storyCommunityAtoms } from '@/store';

import { storyMock } from '../../_mocks';

export const StoryList: React.FC = () => {
  const [currentPage, setCurrentPage] = useAtom(
    storyCommunityAtoms.storyPageAtom
  );

  return (
    <>
      <div className='m-auto grid w-[80%] grid-cols-2 gap-8'>
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
