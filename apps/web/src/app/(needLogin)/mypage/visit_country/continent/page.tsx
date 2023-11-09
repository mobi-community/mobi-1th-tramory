'use client';
import { useAtom } from 'jotai';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

import { FlagInfo } from '@/components';
import { mypageNavConfig } from '@/constants';
// import { visitedContriesConfig } from '@/constants/visited_contries.contstants';
import { visitedContinentAtom } from '@/store/mypage.atoms';

import { MyPageContainer } from '../../_components';

const VisitedContriesPage = () => {
  const pathname = usePathname();
  const navTitle = mypageNavConfig.nav.find(
    (nav) => nav.href === pathname
  ).title;
  const [visitedContinent, setVisitedContinent] = useAtom(visitedContinentAtom);
  const bannerData = visitedContinent?.map((tabs) => tabs)[0]?.continents;

  useEffect(() => {
    const fetchUserVisited = async () => {
      try {
        const response = await fetch('/user/visited');
        const data = await response.json();

        if (response.ok) {
          setVisitedContinent(data.data);
        } else {
          console.error(data.message);
        }
      } catch (error) {
        console.error('사용자 정보를 가져오는 중 오류가 발생했습니다:', error);
      }
    };

    fetchUserVisited();
    // eslint fix
  }, [setVisitedContinent]);

  return (
    <div className='text-primaryBlue-700 mb-14 ml-10 flex w-full flex-col items-center justify-center'>
      <MyPageContainer title={navTitle}>
        <div className='mb-20 mt-12 px-12'>
          {bannerData?.map((data, index) => (
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
