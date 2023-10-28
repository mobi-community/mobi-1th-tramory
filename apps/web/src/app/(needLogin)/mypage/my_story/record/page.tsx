'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { CommonStory, Pagination } from '@/components';
import { MyPageContainer } from '../../_components';
import { Tabs } from '../_components';
import { planDescription } from '../_mocks';

const MyStoryRecordPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  //추후 실제 데이터로 변경 예정
  const testData = 80;

  const router = useRouter();

  const handleMoveToDetail = (id) => {
    router.push(`/mypage/my_story/${id}?page=record`);
  };

  return (
    <div className='text-primaryBlue-700 ml-10 flex w-full flex-col items-center justify-center'>
      <Tabs />
      <MyPageContainer title='나의 스토리 - 여행 기록'>
        <div className='flex flex-row flex-wrap justify-between px-12 pb-12 '>
          {planDescription.map((planData) => (
            <CommonStory
              handleMoveToDetail={handleMoveToDetail}
              story={planData}
              key={Math.random() * 1000}
            />
          ))}
        </div>
        <div className='flex w-full items-center justify-center p-7'>
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            itemsPerPage={itemsPerPage}
            testData={testData}
          />
        </div>
      </MyPageContainer>
    </div>
  );
};

export default MyStoryRecordPage;
