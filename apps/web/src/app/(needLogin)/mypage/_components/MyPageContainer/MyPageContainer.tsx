import React from 'react';
import { Button } from 'ui';

import type { MyPageContainerProps } from './MyPageContainer.types';

export const MyPageContainer: React.FC<MyPageContainerProps> = ({
  children,
  title,
}) => {
  const isMyStoryRecordPage = title === '나의 스토리 - 여행 기록';

  return (
    <div className='h-auto w-[1024px] rounded-tl-[80px] shadow-[0_4px_20px_0_rgba(0,0,0,0.1)]'>
      {title && (
        <div className='px-12 pt-12'>
          <div className='flex'>
            <p className='text-primaryBlue-700 mb-5 text-xl font-bold'>
              {title}
            </p>
            {isMyStoryRecordPage && (
              <Button
                className='bg-primaryBlue-200 ml-4 mt-1 h-[22px] w-[90px] rounded-2xl border-none'
                size='xsm'
                variant='roundednavy'
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
