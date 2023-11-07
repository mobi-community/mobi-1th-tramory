'use client';

import { useSetAtom } from 'jotai';
import { useEffect } from 'react';

import badgeDefaultImage from '/public/images/badge-default.png';
import badgeDefaultImage2 from '/public/images/badge-default2.png';
import {
  userProfileInfoAtom,
  userRecordStoriesAtom,
} from '@/store/mypage.atoms';

import {
  BestTravelStories,
  MyPageContainer,
  MyPageProfile,
} from './_components';
import { MypageCardSection } from './_components/MypageCardSection/MypageCardSection';
import { badgeImages, badgeImages2 } from './_mocks';

const MyPage = () => {
  const setBestStories = useSetAtom(userRecordStoriesAtom);
  const setUserInfoState = useSetAtom(userProfileInfoAtom);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await fetch('/user/info');
        const data = await response.json();

        // headers : {
        //  Authorization : localStorage.getItem("access_token")
        // }
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
    // eslint fix
  }, [setUserInfoState]);

  useEffect(() => {
    const fetchUserRecordStories = async () => {
      try {
        const response = await fetch('/user/my_story/record');

        const data = await response.json();

        if (response.ok) {
          setBestStories(data.data);
          console.log('best', data.data);
        } else {
          console.error(data.message);
        }
      } catch (error) {
        console.error('사용자 정보를 가져오는 중 오류가 발생했습니다:', error);
      }
    };

    fetchUserRecordStories();
    // eslint fix
  }, [setBestStories]);

  return (
    <div className='text-primaryBlue-700 ml-10 flex w-full flex-col items-center justify-center'>
      <MyPageContainer>
        <MyPageProfile />
        <div className='px-12 pt-8 '>
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
          <BestTravelStories />
        </div>
      </MyPageContainer>
    </div>
  );
};

export default MyPage;
