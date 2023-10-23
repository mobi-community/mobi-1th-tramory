'use client';
import { usePathname } from 'next/navigation';

import { badgeConfig } from '@/constants';

const MyPageTabs = () => {
  const pathname = usePathname();

  const slug = pathname.split('/').pop();

  const currentBadge = badgeConfig.badges.find((badge) => badge.slug === slug);

  return (
    <div>
      <h1>{currentBadge.title}</h1>
    </div>
  );
};

export default MyPageTabs;
