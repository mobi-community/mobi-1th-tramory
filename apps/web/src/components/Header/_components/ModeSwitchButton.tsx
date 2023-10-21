'use client';

import React, { useState } from 'react';
import { Switch } from 'ui';

export const ModeSwitchButton: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const handleMode = () => {
    setIsDarkMode((prev: boolean) => !prev);
  };

  return (
    <div className='flex items-center space-x-2'>
      <Switch id='airplane-mode' onClick={handleMode} isDarkMode={isDarkMode} />
    </div>
  );
};
