/**
 * @todo
 * <MyPageContainer title='나의 배지'>
 * title props부분 추후 navbar title config값으로 대체 예정
 */

import { MyPageContainer } from '../../../../components';
import { BadgeSlide } from './_components';

const MyBadge = () => {
  return (
    <div className='my-[100px] flex justify-center'>
      <MyPageContainer title='나의 배지'>
        <BadgeSlide />
      </MyPageContainer>
    </div>
  );
};

export default MyBadge;
