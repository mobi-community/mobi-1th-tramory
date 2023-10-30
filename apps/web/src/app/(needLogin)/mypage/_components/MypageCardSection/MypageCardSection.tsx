'use client';

import Image from 'next/image';

import { useImageSlider } from '@/hooks';

import type { MypageCardSectionProps } from './MypageCardSection.types';

export const MypageCardSection: React.FC<MypageCardSectionProps> = ({
  title,
  image = [],
  defaultImage,
}) => {
  const additionalImages =
    3 - image.length > 0 ? new Array(3 - image.length).fill(defaultImage) : [];
  const allBadges = [...image, ...additionalImages];

  const { visibleImages, goToPreviousSlide, goToNextSlide } =
    useImageSlider(allBadges);

  const isVisitedCountries = title === '방문국가';

  return (
    <div className='flex w-[380px] flex-col items-start justify-center'>
      <div className='flex w-full justify-between'>
        <div className='text-[15px] font-bold'>{title}</div>
        <div className='cursor-pointer text-[12px]'>전체보기</div>
      </div>
      <div className='border-primaryGray-300 mb-6 w-full border-t-[1px]'></div>
      <div
        className={`bg-primaryGray-200 flex w-full items-center justify-between rounded-[30px] px-4 ${
          isVisitedCountries ? 'py-10' : 'py-6'
        }`}
      >
        <span
          className='material-icons-outlined cursor-pointer'
          onClick={goToPreviousSlide}
        >
          arrow_back_ios
        </span>
        <div className='flex items-center justify-center'>
          <div className='flex items-center justify-center transition-all duration-300'>
            {visibleImages.map((icon, index) => (
              <div
                key={index}
                className={`flex flex-col items-center justify-center ${
                  index !== 0 && 'ml-1'
                } ${index !== visibleImages.length - 1 && 'mr-1'}`}
              >
                <Image
                  // 키값은 실제 데이터로 연동하면서 좀더 유니크한 값으료 변경 예정
                  src={icon.image}
                  alt={index < image.length ? '진짜 icon' : '기본 badgeIcon'}
                  width={90}
                />
                {icon.name && <div>{icon.name}</div>}
              </div>
            ))}
          </div>
        </div>
        <span
          className='material-icons-outlined cursor-pointer'
          onClick={goToNextSlide}
        >
          arrow_forward_ios
        </span>
      </div>
    </div>
  );
};
