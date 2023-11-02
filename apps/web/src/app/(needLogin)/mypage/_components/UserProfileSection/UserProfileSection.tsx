import Image from 'next/image';
import React from 'react';

export const UserProfileSection = ({ storyDetail }) => {
  const { title = 'Default Title', date = 'Default Date' } =
    storyDetail?.content || {};
  const { userId = 'Default User ID', profileImage = '/default-image.jpg' } =
    storyDetail?.user || {};

  return (
    <div className='flex w-full flex-col justify-between'>
      <div className='flex w-full items-center justify-between'>
        <div className='text-[24px] font-bold'>{title}</div>
        <div className=' text-primaryGray-400 text-[14px]'>{date}</div>
      </div>
      <div className='mt-3 flex w-full items-center justify-start gap-3'>
        <div
          style={{ boxShadow: '0 0 3px rgba(0, 0, 0, 0.15)' }}
          className='w-[35px] rounded-full '
        >
          <Image
            className='rounded-full'
            src={profileImage}
            alt='profileImage'
            width={35}
            height={35}
          />
        </div>
        <div className=' font-semibold'>{userId}</div>
      </div>
    </div>
  );
};
