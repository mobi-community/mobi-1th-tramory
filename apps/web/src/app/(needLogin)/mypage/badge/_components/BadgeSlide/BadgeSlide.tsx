import { useAtom } from 'jotai';
import { atomWithDefault } from 'jotai/utils';
import { useEffect } from 'react';

import { badgeAtom } from '@/store/mypage.atoms';

import { OneBadgeSlide } from '../OneBadgeSlide';

const fetchUserBadges = async () => {
  try {
    const response = await fetch('/user/badge');
    const data = await response.json();

    if (response.ok) {
      return data.data;
    } else {
      console.error(data.message);
    }
  } catch (error) {
    console.error('사용자 정보를 가져오는 중 오류가 발생했습니다:', error);
  }
};

// atomWithDefault - 비동기 함수 결과를 기본값으로 하는 atom 생성
export const BADGES = atomWithDefault(fetchUserBadges);

export const BadgeSlide = () => {
  const [badges, setBadges] = useAtom(badgeAtom);

  useEffect(() => {
    fetchUserBadges().then((data) => setBadges(data));
    // eslint fix
  }, [setBadges]);

  return (
    <div className='pb-12'>
      {badges.map((item, index) => (
        <OneBadgeSlide id={index} key={index} item={item} />
      ))}
    </div>
  );
};
