'use client';

import Image from 'next/image';

import badgeIcon from '/public/images/badge-default.png';

import { useImageSlider } from '../../../../../hooks';
import type { MypageCardSectionProps } from './MypageCardSection.types';

export const MypageCardSection = ({
  title,
  badge = [],
}: MypageCardSectionProps) => {
  const additionalBadges =
    3 - badge.length > 0 ? new Array(3 - badge.length).fill(badgeIcon) : [];
  const allBadges = [...badge, ...additionalBadges];

  const { visibleImages, goToPreviousSlide, goToNextSlide } =
    useImageSlider(allBadges);

  return (
    <div className='flex w-[380px] flex-col items-start justify-center'>
      <div className='flex w-full justify-between'>
        <div>{title}</div>
        <div>전체보기</div>
      </div>
      <div>선</div>
      <div className='bg-primaryGray-200 flex w-full items-center justify-center rounded-[30px] px-8 py-6'>
        <span className=' cursor-pointer' onClick={goToPreviousSlide}>
          ﹤
        </span>
        <div className='flex items-center justify-center'>
          <div className='flex items-center justify-center'>
            {visibleImages.map((icon, index) => (
              <Image
                // 키값은 실제 데이터로 연동하면서 좀더 유니크한 값으료 변경 예정
                key={index}
                src={icon}
                alt={index < badge.length ? '진짜 icon' : '기본 badgeIcon'}
                width={90}
              />
            ))}
          </div>
        </div>
        <span className=' cursor-pointer' onClick={goToNextSlide}>
          ＞
        </span>
      </div>
    </div>
  );
};
