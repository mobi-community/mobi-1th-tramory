/**
 * @todo
 * <MyPageContainer title='나의 배지'>
 * title props부분 추후 navbar title config값으로 대체 예정
 */
'use client';
import { usePathname } from 'next/navigation';

import { mypageNavConfig } from '@/constants';

import { MyPageContainer } from '../_components';
import { BadgeSlide } from './_components';

const MyBadge = () => {
  const pathname = usePathname();
  const navTitle = mypageNavConfig.nav.find(
    (nav) => nav.href === pathname
  ).title;

  return (
    <div className='mb-[100px] ml-[60px] flex flex-col justify-center'>
      <MyPageContainer title={navTitle}>
        <BadgeSlide />
      </MyPageContainer>
    </div>
  );
};

export default MyBadge;
