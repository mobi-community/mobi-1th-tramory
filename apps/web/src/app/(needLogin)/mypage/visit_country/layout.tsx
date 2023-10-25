'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Tab } from '@/components/Tab';
import { visitedContriesConfig } from '@/constants/visited_contries.contstants';

export default function VistedContriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const pathArray = pathname.split('/');
  const lastElement = pathArray[pathArray.length - 1];

  return (
    <div>
      <div className='ml-5 mt-10 flex w-full items-end justify-end space-x-[-30px]'>
        {visitedContriesConfig.tabs.map((tab, index) => (
          <Tab
            key={index}
            bgColor={
              lastElement === tab.lastPathname ? 'white' : 'primaryGray-200'
            }
            zIndex={lastElement === tab.lastPathname ? '10' : '0'}
          >
            <Link href={`/mypage/visit_country/${tab.lastPathname}`}>
              {tab.tabTitle}
            </Link>
          </Tab>
        ))}
      </div>
      {children}
    </div>
  );
}
