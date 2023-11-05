'use client';

import { usePathname } from 'next/navigation';
import { Button } from 'ui';

interface StoryButtonsProps {
  postId?: string | number;
}

export const StoryButtons: React.FC<StoryButtonsProps> = ({ postId }) => {
  const pathName = usePathname();
  //추후 유저 정보와 일치할때만 보여지도록 조건 변경하기
  const isMyStory = pathName.includes('mypage');
  const handleDeleteStory = async () => {
    try {
      const response = await fetch(`/user/my_story/record/${postId}`, {
        method: 'DELETE',
      });

      console.log('삭제 확인', response);
    } catch (error) {
      console.error(error);
    }
  };

  if (isMyStory)
    return (
      <div className='mr-[35px] mt-[45px] flex'>
        <Button
          variant='skyblue'
          className='flex h-[24px] w-[40px] items-center p-0 text-[12px]'
          // className='h-[30px] min-w-[50%] max-w-[53px] md:text-xs'
        >
          수정
        </Button>
        <Button
          onClick={(e) => {
            e.stopPropagation();
            handleDeleteStory();
          }}
          variant='coralpink'
          className='ml-[5px] flex h-[24px] w-[40px] items-center p-0 text-[12px]'
        >
          삭제
        </Button>
      </div>
    );
};
