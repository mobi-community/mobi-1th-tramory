'use client';

import { useSetAtom } from 'jotai';
import { useEffect } from 'react';

import badgeDefaultImage from '/public/images/badge-default.png';
import badgeDefaultImage2 from '/public/images/badge-default2.png';
import { userProfileInfoAtom } from '@/store/mypage.atoms';

import { MyPageContainer, MyPageProfile } from './_components';
import { MypageCardSection } from './_components/MypageCardSection/MypageCardSection';
import { badgeImages, badgeImages2 } from './_mocks';

const MyPage = () => {
  const setUserInfoState = useSetAtom(userProfileInfoAtom);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await fetch('/user/info');
        const data = await response.json();

        if (response.ok) {
          setUserInfoState(data.data);
        } else {
          console.error(
            '서버로부터 정보를 가져오는 데 실패했습니다:',
            data.message
          );
        }
      } catch (error) {
        console.error('사용자 정보를 가져오는 중 오류가 발생했습니다:', error);
      }
    };

    fetchUserInfo();
  }, []);

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
