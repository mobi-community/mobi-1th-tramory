'use client';

import { useSetAtom } from 'jotai';
import { useEffect } from 'react';

import { Tab } from '@/components';
import { badgeConfig } from '@/constants';
import { selectTabAtom } from '@/store/tab.atoms';

export default function BagdeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const selectTab = useSetAtom(selectTabAtom);

  useEffect(() => {
    selectTab(''); // 첫번째 탭을 활성화하기 위해 selectTab을 호출합니다.
  }, [selectTab]);

  const tabsWithAll = [{ slug: '', title: 'ALL' }, ...badgeConfig.badges];

  return (
    <div className='mb-14'>
      <div className='ml-5 mt-10 flex w-full items-end justify-end space-x-[-30px]'>
        {tabsWithAll.map((badgeConfig, index) => (
          <div key={index}>
            <Tab slug={badgeConfig.slug}>{badgeConfig.title}</Tab>
          </div>
        ))}
      </div>
      {children}
    </div>
  );
}
