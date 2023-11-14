'use client';

import { useSetAtom } from 'jotai';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

import { Tab } from '@/components';
import { selectTabAtom } from '@/store/tab.atoms';

export const Tabs = () => {
  const selectTab = useSetAtom(selectTabAtom);
  const params = useSearchParams();
  const filter = params.get('filter') || 'travel';

  useEffect(() => {
    selectTab(filter);
  }, [selectTab, filter]);

  return (
    <div className='mr-10 mt-10 flex w-full items-end justify-end space-x-[-30px]'>
      <Tab slug='travel'>여행 기록</Tab>
      <Tab slug='draft'>임시 저장 기록</Tab>
    </div>
  );
};
