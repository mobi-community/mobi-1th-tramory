import React from 'react';

import type { MyPageContainerProps } from './MyPageContainer.types';

export const MyPageContainer: React.FC<MyPageContainerProps> = ({
  children,
  title,
}) => {
  const isMyStoryPanePage = title === '나의 스토리 - 여행 계획';

  return (
    <div className='h-auto w-[1024px] rounded-tl-[80px] shadow-[0_4px_20px_0_rgba(0,0,0,0.1)]'>
      {title && (
        <div className={`${isMyStoryPanePage ? 'px-12 pt-12' : 'p-12'}`}>
          <p className='text-primaryBlue-700 mb-5 text-xl font-bold'>{title}</p>
          <div
            className={`${
              isMyStoryPanePage ? 'md-2' : 'mb-12'
            } bg-primaryGray-300 h-px w-full`}
          ></div>
        </div>
      )}
      {children}
    </div>
  );
};
