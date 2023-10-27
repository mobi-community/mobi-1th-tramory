'use client';

import { useAtomValue } from 'jotai';

import { storyCommunityAtoms } from '@/store';

export const Title: React.FC = () => {
  const searchKeyword = useAtomValue(storyCommunityAtoms.searchKeywordAtom);

  return (
    <div className='relative'>
      <div className='relative z-50 text-4xl font-bold'>
        {searchKeyword ? searchKeyword : '전체'} 여행 스토리
      </div>
      <div className='bg-primaryYellow absolute top-2 h-[30px] w-full -rotate-3'></div>
    </div>
  );
};
