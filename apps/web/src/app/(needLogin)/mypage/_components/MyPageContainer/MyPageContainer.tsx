import React from 'react';

import type { MyPageContainerProps } from './MyPageContainer.types';

export const MyPageContainer: React.FC<MyPageContainerProps> = ({
  children,
  title,
}) => {
  return (
    <div className='h-auto w-[1024px] rounded-tl-[80px] pb-12 shadow-[0_4px_20px_0_rgba(0,0,0,0.1)]'>
      {title && (
        <div className='p-12'>
          <p className='text-primaryBlue-700 mb-5 text-xl font-bold'>{title}</p>
          <div className='bg-primaryGray-300 mb-12 h-px w-full'></div>
        </div>
      )}
      {children}
    </div>
  );
};
