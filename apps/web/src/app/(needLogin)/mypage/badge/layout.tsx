'use client';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import { Tab } from '@/components';
import { badgeConfig } from '@/constants';

export default function BagdeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const params = useSearchParams();
  const category = params.get('category');
  const basePath = '/mypage/badge';
  const paths = ['ALL', ...badgeConfig.badges.map((badge) => badge.slug)];
  const isActive = (path: string) =>
    category === path || (!category && path === 'ALL');

  return (
    <div className='mb-14'>
      <div className='ml-5 mt-10 flex w-full items-end justify-end space-x-[-30px]'>
        {paths.map((path, index) => (
          <Tab
            key={index}
            bgColor={isActive(path) ? 'white' : 'primaryGray-200'}
            zIndex={isActive(path) ? '10' : '0'}
          >
            <Link
              href={index === 0 ? basePath : `${basePath}?category=${path}`}
            >
              {index === 0 ? 'ALL' : badgeConfig.badges[index - 1].title}
            </Link>
          </Tab>
        ))}
      </div>
      {children}
    </div>
  );
}
