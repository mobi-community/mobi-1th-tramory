import React from 'react';

type myPageTitle = {
  children: React.ReactNode;
  title?: string;
};

export const MyPageContainer: React.FC<myPageTitle> = ({ children, title }) => {
  return (
    <div className='h-auto w-[1280px] rounded-tl-[80px] p-12 shadow-[0_4px_20px_0_rgba(0,0,0,0.1)]'>
      <div>
        <p className='text-primaryBlue-700 mb-5 text-2xl font-bold'>{title}</p>
        <div className='bg-primaryGray-300 mb-12 h-px w-full'></div>
      </div>
      {children}
    </div>
  );
};
