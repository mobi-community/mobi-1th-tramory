'use client';

import { useSearchParams } from 'next/navigation';

export const Title: React.FC = () => {
  const searchParams = useSearchParams();

  const searchedCountry = searchParams.get('keyword');

  return (
    <div className='relative'>
      <div className='relative z-50 text-4xl font-bold'>
        {searchedCountry ? searchedCountry : '전체'} 여행 스토리
      </div>
      <div className='bg-primaryYellow absolute top-2 h-[30px] w-full -rotate-3'></div>
    </div>
  );
};
