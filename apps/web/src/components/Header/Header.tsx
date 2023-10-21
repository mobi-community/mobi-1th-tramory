'use client';

import Image from 'next/image';
import React from 'react';

import logo from '/public/assets/logo_black.svg';

import { headerConfig } from '../../constants';
import materialIcon from '../../utils/materialIcon';
import { ModeSwitchButton } from './_components';
import { MyPageButton } from './_components/MyPageButton';

export const Header: React.FC = () => {
  const iconStyle = {
    style: 'text-primaryGray-400 cursor-pointer pl-5',
    size: 32,
  };

  return (
    <div className='ml-20 mt-10 flex justify-between'>
      <div>
        <Image src={logo} alt='트래모리 로고' />
      </div>
      <div className='flex'>
        <ModeSwitchButton />
        {headerConfig.logoArray.map((logo) =>
          materialIcon({
            iconName: logo,
            ...iconStyle,
          })
        )}
        <MyPageButton />
      </div>
    </div>
  );
};
