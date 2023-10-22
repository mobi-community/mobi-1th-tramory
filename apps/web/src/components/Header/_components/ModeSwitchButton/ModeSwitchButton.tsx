'use client';

import { useAtom } from 'jotai';
import React from 'react';
import { Switch } from 'ui';

import { MapAtom } from '../../../../store/atom';

export const ModeSwitchButton: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useAtom(MapAtom.isDarkMode);
  const handleMode = () => {
    setIsDarkMode((prev: boolean) => !prev);
  };

  return (
    <div className='flex items-center space-x-2'>
      <Switch id='airplane-mode' onClick={handleMode} isDarkMode={isDarkMode} />
    </div>
  );
};
