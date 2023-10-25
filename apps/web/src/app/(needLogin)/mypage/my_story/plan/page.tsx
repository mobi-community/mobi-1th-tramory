'use client';

'use cilent';
import { useState } from 'react';
import { Checkbox } from 'ui';

import { Pagination } from '@/components/Pagination';

import { Tab } from '../../../../../components/Tab';
import { MyPageContainer } from '../../_components';
import { MyStoryPlanCard } from '../_components';
import { planDescription, PlanDescriptionDataType } from '../_mocks';

const MyStoryPlanPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  //추후 실제 데이터로 변경 예정
  const testData = 80;
  const [planTabColor, setPlanTabColor] = useState('white');
  const [draftTabColor, setDraftTabColor] = useState('primaryGray-200');
  const isPlanPage = planDescription.filter((plan) => plan.isDraft === false);
  const isDraftPlanPage = planDescription.filter(
    (plan) => plan.isDraft === true
  );

  const [planDescriptions, setPlanDescriptions] =
    useState<PlanDescriptionDataType[]>(isPlanPage);

  const handleClickTab = (page) => {
    if (page === 'plan') {
      setPlanDescriptions(isPlanPage);
      setPlanTabColor('white');
      setDraftTabColor('primaryGray-200');
    } else {
      setPlanDescriptions(isDraftPlanPage);
      setPlanTabColor('primaryGray-200');
      setDraftTabColor('white');
    }
  };

  return (
    <div className='text-primaryBlue-700 ml-10 flex w-full flex-col items-center justify-center'>
      <div className='mr-10 mt-10 flex w-full items-end justify-end space-x-[-30px]'>
        <Tab
          handleClickTab={handleClickTab}
          page={'plan'}
          bgColor={planTabColor}
          zIndex={'10'}
        >
          여행 계획
        </Tab>
        <Tab
          handleClickTab={handleClickTab}
          page={'draft'}
          bgColor={draftTabColor}
          zIndex={'0'}
        >
          임시 저장 계획
        </Tab>
      </div>
      <MyPageContainer title='나의 스토리 - 여행 계획'>
        <div className='mt-5 flex items-center px-12 text-[13px]'>
          <Checkbox id='planAll' />
          <div className='ml-2 font-semibold'>지난 계획 모아보기</div>
        </div>
        <div className='flex flex-row flex-wrap justify-between px-12 pb-12 '>
          {planDescriptions.map((planData) => (
            <MyStoryPlanCard key={planData.title} planData={planData} />
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
