import Image from 'next/image';

import { storyUserType } from '@/components/CommonStory';
import { formattedDateFunc } from '@/utils/formattedDate';

export const User: React.FC<{ user: storyUserType }> = ({ user }) => {
  const { profileImage, userId, date } = user;
  const userFormattedDate = formattedDateFunc(date);

  return (
    <div>
      <div className='flex justify-between'>
        <div className='flex pt-[14px]'>
          <div className='relative mr-[14px] h-[30px] w-[30px]'>
            <Image
              src={profileImage}
              alt='사용자 프로필 이미지'
              layout='fill'
              className='rounded-[50%]'
            />
          </div>
          <div>
            <div className='text-xs font-bold'>{userId}</div>
            <div className='text-primaryGray-300 text-[10px]'>
              {userFormattedDate}
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};
