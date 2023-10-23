import { RadioGroup, RadioGroupItem } from 'ui';

import { MyPageContainer } from '../../_components';

const MyStoryPlanPage = () => {
  return (
    <div className='text-primaryBlue-700 ml-10 flex w-full flex-col items-center justify-center'>
      <MyPageContainer title='나의 스토리 - 여행 계획'>
        <RadioGroup className='text-primaryBlue-700' defaultValue='option-one'>
          <div className='flex items-center space-x-2'>
            <RadioGroupItem value='option-one' id='option-one' />
            <label htmlFor='option-one'>Option One</label>
          </div>
          <div className='flex items-center space-x-2'>
            <RadioGroupItem value='option-two' id='option-two' />
            <label htmlFor='option-two'>Option Two</label>
          </div>
        </RadioGroup>
      </MyPageContainer>
    </div>
  );
};

export default MyStoryPlanPage;
