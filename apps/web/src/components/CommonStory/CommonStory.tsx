'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Button } from 'ui';

import { formattedDateFunc } from '@/utils/formattedDate';
import materialIcon from '@/utils/materialIcon';

import { ImageSlide } from './_components/ImageSlide/ImageSlide';
import type { CommonStoryProps } from './CommonStory.types';

export const CommonStory: React.FC<CommonStoryProps> = ({
  story,
  handleMoveToDetail,
}) => {
  const { user, content, id } = story;

  const pathname = usePathname();
  const isMyPage = pathname.includes('mypage');
  const StoryButtons = (
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

  const User = (
    <div className='flex justify-between'>
      <div className='flex pt-[30px]'>
        <div className='relative mr-[15px] h-[40px] w-[40px]'>
          <Image
            src={user.profileImage}
            alt='사용자 프로필 이미지'
            layout='fill'
            className='rounded-[50%]'
          />
        </div>
        <div className='mt-[3px]'>
          <div className='text-sm'>{user.userId}</div>
          <div className='text-primaryGray-300 text-xs'>
            {formattedDateFunc(
              content.date instanceof Date
                ? content.date
                : new Date(content.date)
            )}
          </div>
        </div>
      </div>
      {isMyPage && StoryButtons}
    </div>
  );

  const ReactionBox = (category: string, value: number) => (
    <div className='border-primaryGray-300 flex h-[24px] min-w-[60px] items-center justify-center rounded-[20px] border p-[3px]'>
      {materialIcon({
        iconName: category === 'liked' ? 'favorite' : 'visibility',
        style: `mt-[4px] mr-[5px] ${
          category === 'liked' ? 'text-primaryYellow' : 'text-primaryGray-300'
        }`,
        size: 10,
      })}
      <div className='text-primaryGray-300 text-[12px]'>{value}</div>
    </div>
  );

  const Content = (
    <div className='mt-[20px] flex justify-between pl-[5px]'>
      <div className='mr-[20px]'>
        <div className=' text-[15px] font-bold'>{content.title}</div>
        <div
          className={`text-primaryGray-400 mt-[10px] h-[70px] ${
            isMyPage ? 'w-[180px]' : 'w-[250px]'
          } overflow-hidden text-ellipsis text-[12px]`}
        >
          {content.text}
        </div>
        <div className='mt-[20px] flex flex-col'>
          <div className='flex w-[125px] justify-between'>
            <div>{ReactionBox('liked', content.liked)}</div>
            <div>{ReactionBox('viewed', content.viewed)}</div>
          </div>
          <div>
            {content.tags.map((tag) => (
              <span
                key={Math.random() * 1000}
                className='border-primaryGray-300 text-primaryGray-300 ml-[5px] border-b-[1px] text-[12px]'
              >
                # {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div>
        <ImageSlide images={content.images} postId={id} />
      </div>
    </div>
  );

  return (
    <div
      onClick={() => handleMoveToDetail(id)}
      className='relative cursor-pointer'
    >
      <div
        className={`relative z-50 ${
          isMyPage ? 'w-[430px]' : 'w-[500px]'
        } bg-white/[0.5] pb-[30px] pl-[30px] drop-shadow-xl`}
      >
        <div>{User}</div>
        <div>{Content}</div>
      </div>
      <div
        className={`bg-primaryYellow absolute ${
          isMyPage ? 'left-[390px] top-5' : 'left-[460px] top-5'
        } z-0 h-[20px] w-[60px]`}
      ></div>
    </div>
  );
};
