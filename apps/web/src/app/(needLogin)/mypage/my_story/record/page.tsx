'use client';

import { useAtomValue } from 'jotai';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { CommonStory, Pagination } from '@/components';
import { userProfileInfoAtom } from '@/store/mypage.atoms';

import { MyPageContainer } from '../../_components';
import { Tabs } from '../_components';

const MyStoryRecordPage = () => {
  const { recordStories } = useAtomValue(userProfileInfoAtom);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  const dataLength = recordStories.length;

  const router = useRouter();

  const handleMoveToDetail = (id) => {
    router.push(`/mypage/my_story/${id}?page=record`);
  };

  return (
    <div className='text-primaryBlue-700 ml-10 flex w-full flex-col items-center justify-center'>
      <Tabs />
      <MyPageContainer title='나의 스토리 - 여행 기록'>
        <div className='flex flex-row flex-wrap justify-between px-12 pb-12 '>
          {recordStories.map((stories) => (
            <CommonStory
              handleMoveToDetail={handleMoveToDetail}
              story={stories}
              key={stories.id}
            />
          ))}
        </div>
        <div className='flex w-full items-center justify-center p-7'>
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            itemsPerPage={itemsPerPage}
            dataLength={dataLength}
            bgColor='gray'
          />
        </div>
      </MyPageContainer>
    </div>
  );
};

export default MyStoryRecordPage;
