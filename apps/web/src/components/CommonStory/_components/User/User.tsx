import Image from 'next/image';

import type { storyUserType } from '../../CommonStory.types';
import { StoryButtons } from '../StoryButtons/StoryButtons';

export const User: React.FC<{ user: storyUserType }> = ({ user }) => {
  const { profileImage, userId, date } = user;
  const formattedDate = `${date?.getFullYear()}.${
    date?.getMonth() + 1
  }.${date?.getDate()}`;

  return (
    <div>
      <div className='flex justify-between'>
        <div className='flex pt-[30px]'>
          <div className='relative mr-[15px] h-[40px] w-[40px]'>
            <Image
              src={profileImage}
              alt='사용자 프로필 이미지'
              fill
              className='rounded-[50%]'
            />
          </div>
          <div className='mt-[3px]'>
            <div className='text-sm'>{userId}</div>
            <div className='text-primaryGray-300 text-xs'>{formattedDate}</div>
          </div>
        </div>
        <StoryButtons />
      </div>
      <div></div>
    </div>
  );
};
