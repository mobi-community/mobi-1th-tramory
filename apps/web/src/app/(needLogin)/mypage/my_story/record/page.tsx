'use client';

import { useState } from 'react';

import { Pagination } from '@/components/Pagination';

import { MyPageContainer } from '../../_components';

const MyStoryRecordPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  //추후 실제 데이터로 변경 예정
  const testData = 80;

  return (
    <div>
      <div className='text-primaryBlue-700 ml-10 flex w-full flex-col items-center justify-center'>
        <div className='mr-10 mt-10 flex w-full items-end justify-end space-x-[-30px]'>
          {/* <Tab></Tab> */}
          탭s
        </div>
      </div>
      <MyPageContainer title='나의 스토리 - 여행 기록'>
        <div className='flex flex-row flex-wrap justify-between px-12 pb-12 '>
          {/* {planDescription.map((planData) => (
            <MyStoryPlanCard key={planData.title} planData={planData} />
          ))} */}
        </div>
        {/* 추후 공용 페이지네이션 적용 예정 */}
        <div className='flex w-full items-center justify-center'>
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
