'use client';

import { useSetAtom } from 'jotai';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

import { Tab } from '@/components';
import { visitedContriesConfig } from '@/constants/visited_contries.contstants';
import { selectTabAtom } from '@/store/tab.atoms';

export default function VistedContriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const selectTab = useSetAtom(selectTabAtom);
  const params = useSearchParams();
  const filter = params.get('filter') || 'continent';

  useEffect(() => {
    selectTab(filter);
  }, [selectTab, filter]);

  return (
    <div>
      <div className='ml-5 mt-10 flex w-full items-end justify-end space-x-[-30px]'>
        {visitedContriesConfig.tabs.map((tab, index) => (
          <div key={index}>
            <Tab slug={tab.lastPathname}>{tab.tabTitle}</Tab>
          </div>
        ))}
      </div>
      {children}
    </div>
  );
}
