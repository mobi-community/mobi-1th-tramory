import Image from 'next/image';
import React from 'react';

import fakeImage from '../../../../_mocks/fake-profile-image.png';
import { DetailSectionProps } from '../../DetailSection.types';

export const UserProfileSection = ({ planDetail }: DetailSectionProps) => {
  const { title, date } = planDetail;

  return (
    <div>
      <div className='flex w-full items-center justify-between'>
        <div className='text-[24px] font-bold'>{title}</div>
        <div className=' text-primaryGray-400 text-[14px]'>{date}</div>
      </div>
      <div className='mt-3 flex w-full items-center justify-start gap-3'>
        <div
          style={{ boxShadow: '0 0 3px rgba(0, 0, 0, 0.15)' }}
          className='w-[35px] rounded-full '
        >
          <Image src={fakeImage} alt='fakeProfile' width={35} height={35} />
        </div>
        <div className=' font-semibold'>kei_123</div>
      </div>
    </div>
  );
};
