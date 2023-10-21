'use client';

import Image from 'next/image';
import React from 'react';

import logo from '/public/assets/logo_black.svg';

import { headerConfig } from '../../constants';
import materialIcon from '../../utils/materialIcon';

const Header: React.FC = () => {
  return (
    <div className='z-20 ml-20 mt-10 flex justify-between'>
      <div>
        <Image src={logo} alt='트래모리 로고' />
      </div>
      <div>
        {headerConfig.logoArray.map((logo) =>
          materialIcon({
            iconName: logo,
            style: 'text-primaryGray-400 cursor-pointer',
            size: 32,
          })
        )}
      </div>
    </div>
  );
};

export default Header;
