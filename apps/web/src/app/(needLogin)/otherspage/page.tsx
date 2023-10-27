'use client';
import { useSearchParams } from 'next/navigation';

import OthersPageBadge from './_components/OthersPageBadge/OthersPageBadge';
import OthenrStoryList from './_components/OtherStoryList/OtherStoryList';

const OthersPage = () => {
  const params = useSearchParams();
  const tabId = params.get('tabId');

  let TabComponent;

  if (tabId == '1') {
    TabComponent = <OthersPageBadge />;
  } else if (tabId == '2') {
    TabComponent = <OthersPageBadge />;
  } else {
    /** 예슬님 visited 컴포넌트 오면 만들 예정 */
    TabComponent = <OthenrStoryList />;
  }
  return <>{TabComponent}</>;
};

export default OthersPage;
