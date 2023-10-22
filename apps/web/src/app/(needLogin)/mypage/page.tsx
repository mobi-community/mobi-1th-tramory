'use client';

import badgeDefaultImage from '/public/images/badge-default.png';
import badgeDefaultImage2 from '/public/images/badge-default2.png';

import {
  MypageCardSection,
  MyPageContainer,
  MyPageProfile,
} from './_components';
import { badgeImages, badgeImages2 } from './_mocks';

const MyPage = () => {
  return (
    <div className='text-primaryBlue-700 ml-10 flex w-full flex-col items-center justify-center'>
      <MyPageContainer>
        <MyPageProfile />
        <div className='px-20 pt-8 '>
          <div className='flex items-center justify-between'>
            <MypageCardSection
              title='획득한 배지'
              image={badgeImages}
              defaultImage={badgeDefaultImage}
            />
            <MypageCardSection
              title='방문 국가'
              image={badgeImages2}
              defaultImage={badgeDefaultImage2}
            />
          </div>
          <div className='mt-10 flex w-full flex-col items-start justify-center'>
            <div className='text-[15px] font-bold'>인기 스토리</div>
            <div className='border-primaryGray-300 mb-6 w-full border-t-[1px]'></div>
            {/* 여기 스토리 컴포넌트 */}
            {/* 스토리 데이터가 없는 경우 */}
            <div className='mb-[70px] mt-10 flex w-full items-center justify-center font-bold'>
              <div>여행 스토리를 등록해보세요!</div>
            </div>
          </div>
        </div>
      </MyPageContainer>
    </div>
  );
};

export default MyPage;
