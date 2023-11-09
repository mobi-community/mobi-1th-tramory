'use client';
import { usePathname, useSearchParams } from 'next/navigation';

import { mypageNavConfig } from '@/constants';

import { MyPageContainer } from '../_components';
import { BadgeSlide, MyBadgeComponent } from './_components';

const MyBadgePage = () => {
  const pathname = usePathname();
  const params = useSearchParams();
  const category = params.get('category');
  const navTitle = mypageNavConfig.nav.find(
    (nav) => nav.href === pathname
  ).title;

  return category ? (
    <MyBadgeComponent />
  ) : (
    <div className='text-primaryBlue-700 ml-10 flex w-full flex-col items-center justify-center'>
      <MyPageContainer title={navTitle}>
        <BadgeSlide />
      </MyPageContainer>
    </div>
  );
};

export default MyBadgePage;
