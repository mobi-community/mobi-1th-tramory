'use client';
import { usePathname } from 'next/navigation';

import { mypageNavConfig } from '@/constants';
import { visitedContriesConfig } from '@/constants/visited_contries.contstants';

import { MyPageContainer } from '../../_components';
import FlagInfo from './_components/FlagInfo/FlagInfo';

const VisitedContriesPage = () => {
  const pathname = usePathname();
  const navTitle = mypageNavConfig.nav.find(
    (nav) => nav.href === pathname
  ).title;
  const bannerData = visitedContriesConfig.tabs.map((tabs) => tabs)[0]
    .continents;

  return (
    <div className='text-primaryBlue-700 ml-10 flex w-full flex-col items-center justify-center'>
      <MyPageContainer title={navTitle}>
        <div className='mb-12 px-12'>
          {bannerData.map((data, index) => (
            <div key={index} className='flex flex-col'>
              <FlagInfo data={data} id={index} />
            </div>
          ))}
        </div>
      </MyPageContainer>
    </div>
  );
};

export default VisitedContriesPage;
