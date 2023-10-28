'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Checkbox } from 'ui';
import { Pagination } from '@/components';
import { MyPageContainer } from '../../_components';
import { MyStoryPlanCard, Tabs } from '../_components';
import { planDescription } from '../_mocks';

const MyStoryPlanPage = () => {
  const router = useRouter();
  const handleMoveToDetail = (id) => {
    router.push(`/mypage/my_story/${id}?page=plan&isEdit=true`);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  //추후 실제 데이터로 변경 예정
  const testData = 80;

  return (
    <div className='text-primaryBlue-700 ml-10 flex w-full flex-col items-center justify-center'>
      <Tabs />
      <MyPageContainer title='나의 스토리 - 여행 계획'>
        <div className='mt-5 flex items-center px-12 text-[13px]'>
          <Checkbox id='planAll' />
          <div className='ml-2 font-semibold'>지난 계획 모아보기</div>
        </div>
        <div className='flex flex-row flex-wrap justify-between px-12 pb-12 '>
          {planDescription.map((planData) => (
            <MyStoryPlanCard
              handleMoveToDetail={handleMoveToDetail}
              key={planData.id}
              planData={planData}
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

export default MyStoryPlanPage;
