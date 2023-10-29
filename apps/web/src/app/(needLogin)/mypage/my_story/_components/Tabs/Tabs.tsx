'use client';
import { useState } from 'react';

import { Tab } from '@/components';

export const Tabs = () => {
  const [TabColor, setTabColor] = useState('white');
  const [draftTabColor, setDraftTabColor] = useState('primaryGray-200');

  const handleClickTab = (page: string) => {
    if (page === 'current') {
      setTabColor('white');
      setDraftTabColor('primaryGray-200');
    } else {
      setTabColor('primaryGray-200');
      setDraftTabColor('white');
    }
  };

  return (
    <div className='mr-10 mt-10 flex w-full items-end justify-end space-x-[-30px]'>
      <Tab
        handleClickTab={handleClickTab}
        current={'current'}
        bgColor={TabColor}
        zIndex={'1'}
      >
        여행 기록
      </Tab>
      <Tab
        handleClickTab={handleClickTab}
        current={'draft'}
        bgColor={draftTabColor}
        zIndex={'0'}
      >
        임시 저장 기록
      </Tab>
    </div>
  );
};
