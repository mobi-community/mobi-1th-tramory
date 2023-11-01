'use client';

import { usePathname } from 'next/navigation';
import { Button } from 'ui';

export const StoryButtons: React.FC = () => {
  const pathName = usePathname();
  const isMyStory = pathName.includes('mypage');

  if (isMyStory)
    return (
      <div className='mr-[35px] mt-[45px] flex'>
        <Button
          variant='skyblue'
          className='flex h-[24px] w-[40px] items-center p-0 text-[12px]'
        >
          수정
        </Button>
        <Button
          variant='coralpink'
          className='ml-[5px] flex h-[24px] w-[40px] items-center p-0 text-[12px]'
        >
          삭제
        </Button>
      </div>
    );
};
