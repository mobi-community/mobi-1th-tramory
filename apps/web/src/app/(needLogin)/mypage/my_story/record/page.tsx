'use client';

import { useState } from 'react';

import { Pagination } from '@/components/Pagination';
import { Tab } from '@/components/Tab';

import { MyPageContainer } from '../../_components';

const MyStoryRecordPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  //추후 실제 데이터로 변경 예정
  const testData = 80;

  const [recordTabColor, setRecordTabColor] = useState('white');
  const [draftTabColor, setDraftTabColor] = useState('primaryGray-200');

  const handleClickTab = (page) => {
    if (page === 'record') {
      setRecordTabColor('white');
      setDraftTabColor('primaryGray-200');
    } else {
      setRecordTabColor('primaryGray-200');
      setDraftTabColor('white');
    }
  };

  return (
    <div className='text-primaryBlue-700 ml-10 flex w-full flex-col items-center justify-center'>
      <div className='mr-10 mt-10 flex w-full items-end justify-end space-x-[-30px]'>
        <Tab
          handleClickTab={handleClickTab}
          page={'record'}
          bgColor={recordTabColor}
          zIndex={'10'}
        >
          여행 기록
        </Tab>
        <Tab
          handleClickTab={handleClickTab}
          page={'draft'}
          bgColor={draftTabColor}
          zIndex={'0'}
        >
          임시 저장 기록
        </Tab>
      </div>
      <MyPageContainer title='나의 스토리 - 여행 기록'>
        <div className='flex flex-row flex-wrap justify-between px-12 pb-12 '>
          {/* 정우님 컴포넌트 자리 */}
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
