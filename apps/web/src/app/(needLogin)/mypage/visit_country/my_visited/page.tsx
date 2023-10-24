import { mypageNavConfig } from '@/constants';
import { visitedContriesConfig } from '@/constants/visited_contries.contstants';

import { MyPageContainer } from '../../_components';
import OneMockFlag from './_components/OneMockFlag';

const MyVisitedPage = () => {
  const navTitle = mypageNavConfig.nav.find((nav) =>
    nav.href.includes('visit_country')
  ).title;

  const mockData = visitedContriesConfig.tabs.map((tabs) => tabs)[0].continents;

  return (
    <div className='text-primaryBlue-700 ml-10 flex w-full flex-col items-center justify-center'>
      <MyPageContainer title={navTitle}>
        {/* 목데이터입니다. */}
        {mockData.map((data, index) => (
          <OneMockFlag data={data.continentData} key={index} />
        ))}
      </MyPageContainer>
    </div>
  );
};

export default MyVisitedPage;
