import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { Button } from 'ui';

import { SortingModal } from '../../like_story/_components';
import type { MyPageContainerProps } from './MyPageContainer.types';

export const MyPageContainer: React.FC<MyPageContainerProps> = ({
  children,
  title,
}) => {
  const [isToggleModal, setIsToggleModal] = useState(false);
  const handleSortingModal = () => {
    setIsToggleModal((prev: boolean) => !prev);
  };
  const pathname = usePathname();
  const isMyStoryRecordPage = title === '나의 스토리 - 여행 기록';
  const isLikeStoryPage = pathname.includes('mypage/like_story');
  const isFiltered = isMyStoryRecordPage || isLikeStoryPage;

  return (
    <div className='h-[auto] w-[1024px] rounded-tl-[80px] shadow-[0_4px_20px_0_rgba(0,0,0,0.1)]'>
      {isToggleModal && <SortingModal setIsToggleModal={setIsToggleModal} />}
      {title && (
        <div className='mb-5 px-12 pt-12'>
          <div className='mb-4 flex items-center '>
            <p className='text-primaryBlue-700 mr-4 text-xl font-bold'>
              {title}
            </p>
            {isFiltered && (
              <Button
                onClick={handleSortingModal}
                variant='lightblue'
                weight='bold'
                font='xs'
              >
                정렬 및 필터
              </Button>
            )}
          </div>
          <div className='bg-primaryGray-300 h-px w-full'></div>
        </div>
      )}
      {children}
    </div>
  );
};
