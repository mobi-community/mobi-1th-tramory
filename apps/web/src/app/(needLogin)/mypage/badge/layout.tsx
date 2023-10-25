'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Tab } from '@/components/Tab';
import { badgeConfig } from '@/constants';

export default function BagdeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div>
      <div className='ml-5 mt-10 flex w-full items-end justify-end space-x-[-30px]'>
        {[
          '/mypage/badge',
          ...badgeConfig.badges.map((badge) => `/mypage/badge/${badge.slug}`),
        ].map((path, index) => (
          <Tab
            key={index}
            bgColor={pathname === path ? 'white' : 'primaryGray-200'}
            zIndex={pathname === path ? '10' : '0'}
          >
            <Link href={path}>
              {index === 0 ? 'ALL' : badgeConfig.badges[index - 1].title}
            </Link>
          </Tab>
        ))}
      </div>
      {children}
    </div>
  );
}
