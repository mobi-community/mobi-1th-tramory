/**
 * @todo
 * <MyPageContainer title='나의 배지'>
 * title props부분 추후 navbar title config값으로 대체 예정
 */

import Link from 'next/link';

import { badgeConfig } from '@/constants';

import { MyPageContainer } from '../../../../components';
import { BadgeSlide } from './_components';

const MyBadge = () => {
  return (
    <div className='my-[100px] flex flex-col justify-center'>
      {/* 추후 공용 컴포넌트 탭으로 수정 예정 */}
      <div className='flex justify-end'>
        <Link className='mr-4' href='badge'>
          all
        </Link>
        {badgeConfig.badges.map((badge, index) => (
          <Link className='mr-4' key={index} href={`badge/${badge.slug}`}>
            {badge.title}
          </Link>
        ))}
      </div>
      <MyPageContainer title='나의 배지'>
        <BadgeSlide />
      </MyPageContainer>
    </div>
  );
};

export default MyBadge;
