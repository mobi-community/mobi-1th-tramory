'use client';
import { useState } from 'react';

// 퍼블리싱 테스트용 이미지
import badgeImage1 from '/public/images/test-badge1.png';
import badgeImage2 from '/public/images/test-badge2.png';
import badgeImage3 from '/public/images/test-badge3.png';

import {
  MypageCardSection,
  MyPageContainer,
  MyPageProfile,
} from './_components';

const MyPage = () => {
  // 퍼블리싱 테스트용 state
  const [badge] = useState([
    badgeImage1,
    badgeImage2,
    badgeImage3,
    badgeImage1,
    badgeImage2,
    badgeImage3,
  ]);

  return (
    <div className='ml-[50px] flex flex-col items-center justify-center pl-10'>
      <MyPageContainer>
        <MyPageProfile />
        <MypageCardSection title='획득한 배지' badge={badge} />
      </MyPageContainer>
    </div>
  );
};

export default MyPage;
