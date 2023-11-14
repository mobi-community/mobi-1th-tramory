import { useAtom } from 'jotai';
import { useEffect } from 'react';

import { badgeAtom } from '@/store/mypage.atoms';

import { OneBadgeSlide } from '../OneBadgeSlide';

export const BadgeSlide = () => {
  const [badges, setBadges] = useAtom(badgeAtom);

  useEffect(() => {
    const fetchUserBadges = async () => {
      try {
        const response = await fetch('/user/badge');
        const data = await response.json();

        if (response.ok) {
          setBadges(data.data);
        } else {
          console.error(data.message);
        }
      } catch (error) {
        console.error('사용자 정보를 가져오는 중 오류가 발생했습니다:', error);
      }
    };

    fetchUserBadges();
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
