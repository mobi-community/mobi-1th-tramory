'use client';
import { useAtom } from 'jotai';
import { useEffect } from 'react';

import { mypageNavConfig } from '@/constants';
import { visitedMyVisitedAtom } from '@/store/mypage.atoms';

import { MyPageContainer } from '../../_components';
import OneMockFlag from './_components/OneMockFlag';

const MyVisitedPage = () => {
  const navTitle = mypageNavConfig.nav.find((nav) =>
    nav.href.includes('visit_country')
  ).title;
  const [myVisitedAtom, setMyVisitedAtom] = useAtom(visitedMyVisitedAtom);

  useEffect(() => {
    const fetchUserMyVisited = async () => {
      try {
        const response = await fetch('/user/myvisited');
        const data = await response.json();

        if (response.ok) {
          setMyVisitedAtom(data.data);
        } else {
          console.error(data.message);
        }
      } catch (error) {
        console.error('사용자 정보를 가져오는 중 오류가 발생했습니다:', error);
      }
    };

    fetchUserMyVisited();
    // eslint fix
  }, [setMyVisitedAtom]);

  const mockData = myVisitedAtom?.map((tabs) => tabs)[0]?.continents;

  return (
    <div className='text-primaryBlue-700 mb-14 ml-10 flex w-full flex-col items-center justify-center'>
      <MyPageContainer title={navTitle}>
        {/* 목데이터입니다. */}
        <div className='my-12'>
          {mockData?.map((data, index) => (
            <OneMockFlag data={data.continentData} key={index} />
          ))}
        </div>
      </MyPageContainer>
    </div>
  );
};

export default MyVisitedPage;
