'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import fakeImage from '../../_mocks/fake-profile-image.png';
import type { UserProfileSectionProps } from './UserProfileSection.types';

export const UserProfileSection: React.FC<UserProfileSectionProps> = ({
  targetStory,
}) => {
  const { user, content } = targetStory;

  if (targetStory) {
    return (
      <div className='flex w-full flex-col justify-between'>
        <div className='flex w-full items-center justify-between'>
          <div className='text-[24px] font-bold'>{content.title}</div>
          <div className=' text-primaryGray-400 text-[14px]'>
            {content.date}
          </div>
        </div>
        <Link
          className='mt-3 flex w-full cursor-pointer items-center justify-start gap-3'
          href={'/otherspage?tab=1'}
        >
          <div
            style={{ boxShadow: '0 0 3px rgba(0, 0, 0, 0.15)' }}
            className='w-[35px] rounded-full '
          >
            <Image src={fakeImage} alt='fakeProfile' width={35} height={35} />
          </div>
          <div className=' font-semibold'>{user.userId}</div>
        </Link>
      </div>
    );
  } else {
    return <div>LOADING</div>;
  }
};
