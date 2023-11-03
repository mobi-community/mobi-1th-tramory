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
          className='h-[30px] min-w-[50%] max-w-[53px] md:text-xs'
        >
          수정
        </Button>
        <Button
          variant='coralpink'
          className='ml-[5px] h-[30px] min-w-[50%] max-w-[53px] md:text-xs'
        >
          삭제
        </Button>
      </div>
    );
};
