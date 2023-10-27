import Image from 'next/image';
import React from 'react';

import fakeImage from '../../my_story/_mocks/fake-profile-image.png';
import { UserProfileSectionProps } from './UserProfileSection.types';

export const UserProfileSection: React.FC<UserProfileSectionProps> = ({
  planDetail,
}) => {
  const { user, content } = planDetail;

  return (
    <div className='flex w-full flex-col justify-between'>
      <div className='flex w-full items-center justify-between'>
        <div className='text-[24px] font-bold'>{content.title}</div>
        <div className=' text-primaryGray-400 text-[14px]'>{content.date}</div>
      </div>
      <div className='mt-3 flex w-full items-center justify-start gap-3'>
        <div
          style={{ boxShadow: '0 0 3px rgba(0, 0, 0, 0.15)' }}
          className='w-[35px] rounded-full '
        >
          <Image src={fakeImage} alt='fakeProfile' width={35} height={35} />
        </div>
        <div className=' font-semibold'>{user.userId}</div>
      </div>
    </div>
  );
};
