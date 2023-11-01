'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import logo from '/public/assets/logo_black.svg';
import { headerConfig } from '@/constants';
import materialIcon from '@/utils/materialIcon';

import { ModeSwitchButton, UserButton } from './_components';

export const Header: React.FC = () => {
  const pathName = usePathname();
  const isRecommendPage = pathName.includes('recommend');
  const isMapPage = pathName.includes('map');

  return (
    <div
      className={`z-50 mx-10 flex justify-between ${
        isRecommendPage
          ? 'z-100 fixed top-[0%] block h-[80px] w-[95%] items-center bg-white'
          : 'mt-10'
      }`}
    >
      <Link href='./map'>
        <Image src={logo} alt='트래모리 로고' className='cursor-pointer' />
      </Link>
      <div className='flex'>
        {isMapPage && <ModeSwitchButton />}
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
