import { Checkbox } from 'ui';

import { MyPageContainer } from '../../_components';

const MyStoryPlanPage = () => {
  return (
    <div className='text-primaryBlue-700 ml-10 flex w-full flex-col items-center justify-center'>
      <MyPageContainer title='나의 스토리 - 여행 계획'>
        <div className='mt-5 flex items-center px-12 text-[13px]'>
          <Checkbox id='planAll' />
          <div className='ml-2'>지난 계획 모아보기</div>
        </div>
      </MyPageContainer>
    </div>
  );
};

export default MyStoryPlanPage;
