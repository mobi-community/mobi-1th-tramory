import { Checkbox } from 'ui';

import { MyPageContainer } from '../../_components';

const MyStoryPlanPage = () => {
  return (
    <div className='text-primaryBlue-700 ml-10 flex w-full flex-col items-center justify-center'>
      <MyPageContainer title='나의 스토리 - 여행 계획'>
        <Checkbox id='terms2' />
      </MyPageContainer>
    </div>
  );
};

export default MyStoryPlanPage;
