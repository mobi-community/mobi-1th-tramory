'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { Switch } from 'ui';

import logo from '/public/assets/logo_black.svg';

import { headerConfig } from '../../constants';
import materialIcon from '../../utils/materialIcon';

const Header: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const handleMode = () => {
    setIsDarkMode((prev: boolean) => !prev);
  };

  return (
    <div className='ml-20 mt-10 flex justify-between'>
      <div>
        <Image src={logo} alt='트래모리 로고' />
      </div>
      <div className='flex'>
        <div className='flex items-center space-x-2'>
          <Switch
            id='airplane-mode'
            onClick={handleMode}
            isDarkMode={isDarkMode}
          />
        </div>
        {headerConfig.logoArray.map((logo) =>
          materialIcon({
            iconName: logo,
            style: 'text-primaryGray-400 cursor-pointer pl-5',
            size: 32,
          })
        )}
      </div>
    </div>
  );
};

export default Header;
