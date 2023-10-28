'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { badgeConfig } from '@/constants';
import { Tab } from '@/components';

export default function BagdeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const paths = [
    '/mypage/badge',
    ...badgeConfig.badges.map((badge) => `/mypage/badge/${badge.slug}`),
  ];

  return (
    <div>
      <div className='ml-5 mt-10 flex w-full items-end justify-end space-x-[-30px]'>
        {paths.map((path, index) => (
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
