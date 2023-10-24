import {
  africaData,
  asiaData,
  europeData,
  naData,
  oceaniaData,
  saData,
} from '../app/(needLogin)/mypage/visit_country/_mock';

export type VisitedContriesConfig = typeof visitedContriesConfig;

export const visitedContriesConfig = [
  {
    lastPathname: 'continent',
    tabTitle: '대륙별',
    continents: [
      {
        ko: '아시아',
        en: 'ASIA',
        asiaData,
      },
      {
        ko: '아프리카',
        en: 'AFRICA',
        africaData,
      },
      {
        ko: '유럽',
        en: 'EUROPE',
        europeData,
      },
      {
        ko: '북아메리카',
        en: 'NORTH AMERICA',
        naData,
      },
      {
        ko: '남아메리카',
        en: 'SOUTH AMERICA',
        saData,
      },
      {
        ko: '오세아니아',
        en: 'OCEANIA',
        oceaniaData,
      },
    ],
  },
  {
    lastPathname: 'my_visited',
    tabTitle: '내 방문 국가 모아보기',
  },
];
