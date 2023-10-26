'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import logo from '/public/assets/logo_black.svg';
import { headerConfig } from '@/constants';
import materialIcon from '@/utils/materialIcon';

import { ModeSwitchButton, UserButton } from './_components';

export const Header: React.FC = () => {
  return (
    <div className='z-50 mx-20 mt-10 flex justify-between'>
      <Link href='./map'>
        <Image src={logo} alt='트래모리 로고' className='cursor-pointer' />
      </Link>
      <div className='flex'>
        <ModeSwitchButton />
        <div className='flex pt-2'>
          <Link href='./story_community'>
            {materialIcon({
              iconName: 'auto_stories',
              ...headerConfig.iconStyle,
            })}
          </Link>
          <div>
            {materialIcon({
              iconName: 'notifications',
              ...headerConfig.iconStyle,
            })}
          </div>
          <UserButton />
        </div>
      </div>
    </div>
  );
};
