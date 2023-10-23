'use client';
import { usePathname } from 'next/navigation';

import { MyPageContainer } from '@/components';
import { badgeConfig } from '@/constants';

const MyPageTabs = () => {
  const pathname = usePathname();

  const slug = pathname.split('/').pop();

  const currentBadge = badgeConfig.badges.find((badge) => badge.slug === slug);

  return (
    <div>
      <MyPageContainer title={currentBadge.title}>
        <div></div>
      </MyPageContainer>
    </div>
  );
};

export default MyPageTabs;
